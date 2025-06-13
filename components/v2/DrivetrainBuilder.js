import React, { useState, useEffect } from 'react';
import { componentDatabaseV2 } from '../../lib/v2/components';

const V2ComponentSelector = ({ 
  bikeType, 
  currentSetup, 
  setCurrentSetup, 
  proposedSetup, 
  setProposedSetup 
}) => {
  const [activeSelector, setActiveSelector] = useState(null);
  const [compatibilityMode, setCompatibilityMode] = useState(true);
  const [filterBrand, setFilterBrand] = useState('all');
  const [filterSpeedCount, setFilterSpeedCount] = useState('all');
  const [sortBy, setSortBy] = useState('weight'); // weight, price, performance

  // Get available components based on bike type
  const getAvailableComponents = (type) => {
    const relevantTypes = [bikeType];
    if (bikeType === 'gravel') relevantTypes.push('mtb');
    
    return {
      cranksets: componentDatabaseV2.cranksets.filter(c => relevantTypes.includes(c.bikeType)),
      cassettes: componentDatabaseV2.cassettes.filter(c => relevantTypes.includes(c.bikeType)),
      rearDerailleurs: componentDatabaseV2.rearDerailleurs.filter(c => relevantTypes.includes(c.bikeType))
    };
  };

  const availableComponents = getAvailableComponents(bikeType);

  // Professional Component Card with detailed specs
  const ComponentCard = ({ component, type, isSelected, onSelect, compatibility }) => {
    const getBrandColor = (model) => {
      if (model.includes('Shimano')) return '#0066CC';
      if (model.includes('SRAM')) return '#E31837';
      if (model.includes('Campagnolo')) return '#C41E3A';
      return '#6B7280';
    };

    const getCompatibilityStatus = () => {
      if (!compatibility) return null;
      if (compatibility.errors?.length > 0) return 'incompatible';
      if (compatibility.warnings?.length > 0) return 'warning';
      return 'compatible';
    };

    const status = getCompatibilityStatus();

    return (
      <div 
        onClick={() => onSelect(component)}
        className={`relative cursor-pointer transition-all duration-200 rounded-lg border-2 p-4 ${
          isSelected 
            ? 'border-blue-500 bg-blue-50 shadow-lg scale-105' 
            : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
        }`}
      >
        {/* Compatibility Indicator */}
        {status && (
          <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
            status === 'compatible' ? 'bg-green-500' :
            status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
          }`} />
        )}

        {/* Brand Badge */}
        <div 
          className="inline-block px-2 py-1 rounded text-xs font-semibold text-white mb-2"
          style={{ backgroundColor: getBrandColor(component.model) }}
        >
          {component.model.split(' ')[0]}
        </div>

        {/* Component Details */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">
            {component.model}
          </h3>
          <p className="text-gray-600 text-sm">{component.variant}</p>
          
          {/* Technical Specs Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs mt-3">
            <div>
              <span className="text-gray-500">Weight:</span>
              <span className="font-mono ml-1">{component.weight}g</span>
            </div>
            
            {component.speeds && (
              <div>
                <span className="text-gray-500">Speed:</span>
                <span className="font-mono ml-1">{component.speeds}</span>
              </div>
            )}
            
            {component.teeth && (
              <div className="col-span-2">
                <span className="text-gray-500">Range:</span>
                <span className="font-mono ml-1">
                  {component.teeth.length === 1 ? 
                    `${component.teeth[0]}T` : 
                    `${component.teeth.join('/')}T`
                  }
                </span>
              </div>
            )}
            
            {type === 'rearDerailleur' && (
              <>
                <div>
                  <span className="text-gray-500">Max Cog:</span>
                  <span className="font-mono ml-1">{component.maxCog}T</span>
                </div>
                <div>
                  <span className="text-gray-500">Capacity:</span>
                  <span className="font-mono ml-1">{component.totalCapacity}T</span>
                </div>
              </>
            )}
            
            {component.price && (
              <div className="col-span-2">
                <span className="text-gray-500">Price:</span>
                <span className="font-mono ml-1 text-green-600">${component.price}</span>
              </div>
            )}
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-1 mt-2">
            {component.isElectronic && (
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                Electronic
              </span>
            )}
            {component.isWireless && (
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                Wireless
              </span>
            )}
            {component.hasClutch && (
              <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                Clutch
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Professional Component Selector with Advanced Filtering
  const ComponentSelector = ({ title, type, components, selectedComponent, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    // Filter and sort components
    const filteredComponents = components
      .filter(comp => {
        const matchesSearch = comp.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            comp.variant.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBrand = filterBrand === 'all' || 
                           comp.model.toLowerCase().includes(filterBrand.toLowerCase());
        const matchesSpeed = filterSpeedCount === 'all' || 
                           comp.speeds?.includes(filterSpeedCount);
        
        return matchesSearch && matchesBrand && matchesSpeed;
      })
      .sort((a, b) => {
        if (sortBy === 'weight') return a.weight - b.weight;
        if (sortBy === 'price') return (a.price || 999) - (b.price || 999);
        if (sortBy === 'performance') {
          // Custom performance score based on weight and features
          const scoreA = (1000 - a.weight) + (a.isElectronic ? 100 : 0) + (a.hasClutch ? 50 : 0);
          const scoreB = (1000 - b.weight) + (b.isElectronic ? 100 : 0) + (b.hasClutch ? 50 : 0);
          return scoreB - scoreA;
        }
        return 0;
      });

    // Get compatibility for each component
    const getComponentCompatibility = (component) => {
      if (type === 'rearDerailleur' && currentSetup.crankset && currentSetup.cassette) {
        return componentDatabaseV2.compatibilityRules.checkRearDerailleur(
          component, 
          currentSetup.cassette, 
          currentSetup.crankset
        );
      }
      return null;
    };

    return (
      <div className="space-y-4">
        {/* Header with Controls */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Filters {showFilters ? '▲' : '▼'}
            </button>
            {selectedComponent && (
              <div className="px-3 py-1.5 bg-blue-100 text-blue-800 text-sm rounded-lg">
                Selected: {selectedComponent.model}
              </div>
            )}
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
              <select 
                value={filterBrand} 
                onChange={(e) => setFilterBrand(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">All Brands</option>
                <option value="shimano">Shimano</option>
                <option value="sram">SRAM</option>
                <option value="campagnolo">Campagnolo</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Speed Count</label>
              <select 
                value={filterSpeedCount} 
                onChange={(e) => setFilterSpeedCount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">All Speeds</option>
                <option value="11-speed">11-speed</option>
                <option value="12-speed">12-speed</option>
                <option value="13-speed">13-speed</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="weight">Weight (Light → Heavy)</option>
                <option value="price">Price (Low → High)</option>
                <option value="performance">Performance Score</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Compatibility</label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={compatibilityMode}
                  onChange={(e) => setCompatibilityMode(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm">Show warnings</span>
              </label>
            </div>
          </div>
        )}

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder={`Search ${title.toLowerCase()}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
          {filteredComponents.map((component) => (
            <ComponentCard
              key={component.id}
              component={component}
              type={type}
              isSelected={selectedComponent?.id === component.id}
              onSelect={onSelect}
              compatibility={getComponentCompatibility(component)}
            />
          ))}
        </div>

        {/* Results Summary */}
        <div className="text-sm text-gray-600 border-t pt-2">
          Showing {filteredComponents.length} of {components.length} components
          {sortBy === 'weight' && filteredComponents.length > 0 && (
            <span className="ml-2">• Lightest: {Math.min(...filteredComponents.map(c => c.weight))}g</span>
          )}
        </div>
      </div>
    );
  };

  // Professional Setup Column
  const SetupColumn = ({ title, setup, setSetup, isPrimary = false }) => (
    <div className={`rounded-xl border-2 p-6 ${isPrimary ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">
          {isPrimary ? 'Your current configuration' : 'Test new components'}
        </p>
      </div>

      {/* Component Selection Tabs */}
      <div className="space-y-6">
        {/* Crankset */}
        <div>
          <button
            onClick={() => setActiveSelector(activeSelector === 'crankset' ? null : 'crankset')}
            className="w-full p-4 border border-gray-300 rounded-lg text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">Crankset</h4>
                {setup.crankset ? (
                  <p className="text-sm text-gray-600">{setup.crankset.model} {setup.crankset.variant}</p>
                ) : (
                  <p className="text-sm text-gray-400">Select crankset...</p>
                )}
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {activeSelector === 'crankset' && (
            <div className="mt-4 border border-gray-200 rounded-lg p-4">
              <ComponentSelector
                title="Cranksets"
                type="crankset"
                components={availableComponents.cranksets}
                selectedComponent={setup.crankset}
                onSelect={(component) => {
                  setSetup(prev => ({ ...prev, crankset: component }));
                  setActiveSelector(null);
                }}
              />
            </div>
          )}
        </div>

        {/* Cassette */}
        <div>
          <button
            onClick={() => setActiveSelector(activeSelector === 'cassette' ? null : 'cassette')}
            className="w-full p-4 border border-gray-300 rounded-lg text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">Cassette</h4>
                {setup.cassette ? (
                  <p className="text-sm text-gray-600">{setup.cassette.model} {setup.cassette.variant}</p>
                ) : (
                  <p className="text-sm text-gray-400">Select cassette...</p>
                )}
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {activeSelector === 'cassette' && (
            <div className="mt-4 border border-gray-200 rounded-lg p-4">
              <ComponentSelector
                title="Cassettes"
                type="cassette"
                components={availableComponents.cassettes}
                selectedComponent={setup.cassette}
                onSelect={(component) => {
                  setSetup(prev => ({ ...prev, cassette: component }));
                  setActiveSelector(null);
                }}
              />
            </div>
          )}
        </div>

        {/* Rear Derailleur */}
        <div>
          <button
            onClick={() => setActiveSelector(activeSelector === 'rearDerailleur' ? null : 'rearDerailleur')}
            className="w-full p-4 border border-gray-300 rounded-lg text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">Rear Derailleur</h4>
                {setup.rearDerailleur ? (
                  <p className="text-sm text-gray-600">{setup.rearDerailleur.model} {setup.rearDerailleur.variant}</p>
                ) : (
                  <p className="text-sm text-gray-400">Select rear derailleur...</p>
                )}
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {activeSelector === 'rearDerailleur' && (
            <div className="mt-4 border border-gray-200 rounded-lg p-4">
              <ComponentSelector
                title="Rear Derailleurs"
                type="rearDerailleur"
                components={availableComponents.rearDerailleurs}
                selectedComponent={setup.rearDerailleur}
                onSelect={(component) => {
                  setSetup(prev => ({ ...prev, rearDerailleur: component }));
                  setActiveSelector(null);
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Setup Summary */}
      {setup.crankset && setup.cassette && setup.rearDerailleur && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-3">Configuration Summary</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-gray-500">Total Weight:</span>
              <span className="font-mono ml-2 font-semibold">
                {setup.crankset.weight + setup.cassette.weight + setup.rearDerailleur.weight + 257}g
              </span>
            </div>
            <div>
              <span className="text-gray-500">System:</span>
              <span className="font-mono ml-2">
                {setup.rearDerailleur.speeds}
              </span>
            </div>
            <div className="col-span-2">
              <span className="text-gray-500">Gear Range:</span>
              <span className="font-mono ml-2">
                {Math.min(...setup.crankset.teeth)}/{Math.max(...setup.cassette.teeth)} - {Math.max(...setup.crankset.teeth)}/{Math.min(...setup.cassette.teeth)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Professional Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Professional Drivetrain Configuration
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Advanced component selection with real-time compatibility validation, 
          intelligent filtering, and expert-grade specifications.
        </p>
      </div>

      {/* Main Configuration Interface */}
      <div className="grid lg:grid-cols-2 gap-8">
        <SetupColumn
          title="Current Setup"
          setup={currentSetup}
          setSetup={setCurrentSetup}
          isPrimary={true}
        />
        
        <SetupColumn
          title="Proposed Setup"
          setup={proposedSetup}
          setSetup={setProposedSetup}
          isPrimary={false}
        />
      </div>

      {/* Global Actions */}
      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Analyze Configuration
        </button>
        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
          Save Configuration
        </button>
        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
          Export Report
        </button>
      </div>
    </div>
  );
};

export default V2ComponentSelector;