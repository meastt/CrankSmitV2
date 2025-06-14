import React, { useState, useEffect } from 'react';
import { componentDatabaseV2 } from '../lib/components';

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
  const [sortBy, setSortBy] = useState('weight');

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

  // Component Card with dark theme
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
            ? 'border-blue-500 shadow-lg scale-105' 
            : 'border-gray-600 hover:border-gray-500 hover:shadow-md'
        }`}
        style={{ 
          background: isSelected ? 'rgba(59, 130, 246, 0.1)' : 'var(--surface-elevated)',
          color: 'var(--text-primary)'
        }}
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
          <h3 className="font-semibold text-sm leading-tight" style={{ color: 'var(--text-primary)' }}>
            {component.model}
          </h3>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{component.variant}</p>
          
          {/* Technical Specs Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs mt-3">
            <div>
              <span style={{ color: 'var(--text-tertiary)' }}>Weight:</span>
              <span className="font-mono ml-1" style={{ color: 'var(--text-secondary)' }}>{component.weight}g</span>
            </div>
            
            {component.speeds && (
              <div>
                <span style={{ color: 'var(--text-tertiary)' }}>Speed:</span>
                <span className="font-mono ml-1" style={{ color: 'var(--text-secondary)' }}>{component.speeds}</span>
              </div>
            )}
            
            {component.teeth && (
              <div className="col-span-2">
                <span style={{ color: 'var(--text-tertiary)' }}>Range:</span>
                <span className="font-mono ml-1" style={{ color: 'var(--text-secondary)' }}>
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
                  <span style={{ color: 'var(--text-tertiary)' }}>Max Cog:</span>
                  <span className="font-mono ml-1" style={{ color: 'var(--text-secondary)' }}>{component.maxCog}T</span>
                </div>
                <div>
                  <span style={{ color: 'var(--text-tertiary)' }}>Capacity:</span>
                  <span className="font-mono ml-1" style={{ color: 'var(--text-secondary)' }}>{component.totalCapacity}T</span>
                </div>
              </>
            )}
            
            {component.price && (
              <div className="col-span-2">
                <span style={{ color: 'var(--text-tertiary)' }}>Price:</span>
                <span className="font-mono ml-1 text-green-400">${component.price}</span>
              </div>
            )}
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-1 mt-2">
            {component.isElectronic && (
              <span className="px-2 py-1 bg-blue-900 text-blue-300 text-xs rounded">
                Electronic
              </span>
            )}
            {component.isWireless && (
              <span className="px-2 py-1 bg-purple-900 text-purple-300 text-xs rounded">
                Wireless
              </span>
            )}
            {component.hasClutch && (
              <span className="px-2 py-1 bg-orange-900 text-orange-300 text-xs rounded">
                Clutch
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Component Selector with dark theme
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
          <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{title}</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-3 py-1.5 text-sm rounded-lg transition-colors"
              style={{ 
                border: '1px solid var(--border-subtle)',
                background: 'var(--surface-elevated)',
                color: 'var(--text-secondary)'
              }}
            >
              Filters {showFilters ? '▲' : '▼'}
            </button>
            {selectedComponent && (
              <div className="px-3 py-1.5 bg-blue-900 text-blue-300 text-sm rounded-lg">
                Selected: {selectedComponent.model}
              </div>
            )}
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg" 
               style={{ background: 'var(--surface-primary)' }}>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>Brand</label>
              <select 
                value={filterBrand} 
                onChange={(e) => setFilterBrand(e.target.value)}
                className="w-full px-3 py-2 rounded-md text-sm"
                style={{ 
                  background: 'var(--surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)'
                }}
              >
                <option value="all">All Brands</option>
                <option value="shimano">Shimano</option>
                <option value="sram">SRAM</option>
                <option value="campagnolo">Campagnolo</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>Speed Count</label>
              <select 
                value={filterSpeedCount} 
                onChange={(e) => setFilterSpeedCount(e.target.value)}
                className="w-full px-3 py-2 rounded-md text-sm"
                style={{ 
                  background: 'var(--surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)'
                }}
              >
                <option value="all">All Speeds</option>
                <option value="11-speed">11-speed</option>
                <option value="12-speed">12-speed</option>
                <option value="13-speed">13-speed</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>Sort By</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 rounded-md text-sm"
                style={{ 
                  background: 'var(--surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)'
                }}
              >
                <option value="weight">Weight (Light → Heavy)</option>
                <option value="price">Price (Low → High)</option>
                <option value="performance">Performance Score</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>Compatibility</label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={compatibilityMode}
                  onChange={(e) => setCompatibilityMode(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Show warnings</span>
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
            className="w-full px-4 py-2 pl-10 rounded-lg focus:ring-2 focus:ring-blue-500"
            style={{ 
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)'
            }}
          />
          <svg className="absolute left-3 top-2.5 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-tertiary)' }}>
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
        <div className="text-sm border-t pt-2" style={{ color: 'var(--text-tertiary)', borderColor: 'var(--border-subtle)' }}>
          Showing {filteredComponents.length} of {components.length} components
          {sortBy === 'weight' && filteredComponents.length > 0 && (
            <span className="ml-2">• Lightest: {Math.min(...filteredComponents.map(c => c.weight))}g</span>
          )}
        </div>
      </div>
    );
  };

  // Setup Column with dark theme
  const SetupColumn = ({ title, setup, setSetup, isPrimary = false }) => (
    <div className={`rounded-xl border-2 p-6 ${isPrimary ? 'border-blue-500' : ''}`}
         style={{ 
           background: isPrimary ? 'rgba(59, 130, 246, 0.1)' : 'var(--surface-primary)',
           borderColor: isPrimary ? 'var(--accent-blue)' : 'var(--border-subtle)'
         }}>
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{title}</h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
          {isPrimary ? 'Your current configuration' : 'Test new components'}
        </p>
      </div>

      {/* Component Selection Tabs */}
      <div className="space-y-6">
        {/* Crankset */}
        <div>
          <button
            onClick={() => setActiveSelector(activeSelector === 'crankset' ? null : 'crankset')}
            className="w-full p-4 rounded-lg text-left transition-colors"
            style={{ 
              border: '1px solid var(--border-subtle)',
              background: 'var(--surface-elevated)',
              color: 'var(--text-primary)'
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Crankset</h4>
                {setup.crankset ? (
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{setup.crankset.model} {setup.crankset.variant}</p>
                ) : (
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Select crankset...</p>
                )}
              </div>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-tertiary)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {activeSelector === 'crankset' && (
            <div className="mt-4 rounded-lg p-4" style={{ border: '1px solid var(--border-subtle)', background: 'var(--surface-elevated)' }}>
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
            className="w-full p-4 rounded-lg text-left transition-colors"
            style={{ 
              border: '1px solid var(--border-subtle)',
              background: 'var(--surface-elevated)',
              color: 'var(--text-primary)'
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Cassette</h4>
                {setup.cassette ? (
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{setup.cassette.model} {setup.cassette.variant}</p>
                ) : (
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Select cassette...</p>
                )}
              </div>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-tertiary)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {activeSelector === 'cassette' && (
            <div className="mt-4 rounded-lg p-4" style={{ border: '1px solid var(--border-subtle)', background: 'var(--surface-elevated)' }}>
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
            className="w-full p-4 rounded-lg text-left transition-colors"
            style={{ 
              border: '1px solid var(--border-subtle)',
              background: 'var(--surface-elevated)',
              color: 'var(--text-primary)'
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Rear Derailleur</h4>
                {setup.rearDerailleur ? (
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{setup.rearDerailleur.model} {setup.rearDerailleur.variant}</p>
                ) : (
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Select rear derailleur...</p>
                )}
              </div>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-tertiary)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {activeSelector === 'rearDerailleur' && (
            <div className="mt-4 rounded-lg p-4" style={{ border: '1px solid var(--border-subtle)', background: 'var(--surface-elevated)' }}>
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
        <div className="mt-6 p-4 rounded-lg" style={{ background: 'var(--surface-elevated)' }}>
          <h4 className="font-medium mb-3" style={{ color: 'var(--text-primary)' }}>Configuration Summary</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span style={{ color: 'var(--text-tertiary)' }}>Total Weight:</span>
              <span className="font-mono ml-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                {setup.crankset.weight + setup.cassette.weight + setup.rearDerailleur.weight + 257}g
              </span>
            </div>
            <div>
              <span style={{ color: 'var(--text-tertiary)' }}>System:</span>
              <span className="font-mono ml-2" style={{ color: 'var(--text-secondary)' }}>
                {setup.rearDerailleur.speeds}
              </span>
            </div>
            <div className="col-span-2">
              <span style={{ color: 'var(--text-tertiary)' }}>Gear Range:</span>
              <span className="font-mono ml-2" style={{ color: 'var(--text-secondary)' }}>
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
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Professional Drivetrain Configuration
        </h1>
        <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
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
        <button className="px-6 py-3 rounded-lg font-medium transition-colors" style={{ background: 'var(--accent-blue)', color: 'white' }}>
          Analyze Configuration
        </button>
        <button className="px-6 py-3 rounded-lg font-medium transition-colors" style={{ border: '1px solid var(--border-subtle)', background: 'var(--surface-elevated)', color: 'var(--text-secondary)' }}>
          Save Configuration
        </button>
        <button className="px-6 py-3 rounded-lg font-medium transition-colors" style={{ border: '1px solid var(--border-subtle)', background: 'var(--surface-elevated)', color: 'var(--text-secondary)' }}>
          Export Report
        </button>
      </div>
    </div>
  );
};

export default V2ComponentSelector;