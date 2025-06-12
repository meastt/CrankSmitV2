// lib/components.js - Enhanced component database with full drivetrain

export const componentDatabaseV2 = {
    // Keep existing cranksets and cassettes...
    cranksets: [...], // Copy from v1
    cassettes: [...], // Copy from v1
    
    // NEW: Rear Derailleurs with full specs
    rearDerailleurs: [
      // ================================
      // SHIMANO ROAD REAR DERAILLEURS
      // ================================
      
      // 105 R7000 (11-Speed)
      {
        id: "shimano-105-r7000-ss",
        model: "Shimano 105 R7000",
        variant: "Short Cage",
        weight: 232,
        maxCog: 30,
        minCog: 11,
        totalCapacity: 35,
        cageLength: "SS",
        speeds: "11-speed",
        bikeType: "road",
        compatibility: ["Shimano 11-speed road"],
        price: 65
      },
      {
        id: "shimano-105-r7000-gs",
        model: "Shimano 105 R7000",
        variant: "Medium Cage", 
        weight: 255,
        maxCog: 34,
        minCog: 11,
        totalCapacity: 39,
        cageLength: "GS",
        speeds: "11-speed",
        bikeType: "road",
        compatibility: ["Shimano 11-speed road"],
        price: 70
      },
  
      // Ultegra R8000 (11-Speed)
      {
        id: "shimano-ultegra-r8000-ss",
        model: "Shimano Ultegra R8000",
        variant: "Short Cage",
        weight: 200,
        maxCog: 30,
        minCog: 11,
        totalCapacity: 35,
        cageLength: "SS",
        speeds: "11-speed",
        bikeType: "road",
        compatibility: ["Shimano 11-speed road"],
        price: 130
      },
      {
        id: "shimano-ultegra-r8000-gs",
        model: "Shimano Ultegra R8000",
        variant: "Medium Cage",
        weight: 224,
        maxCog: 34,
        minCog: 11,
        totalCapacity: 39,
        cageLength: "GS",
        speeds: "11-speed",
        bikeType: "road",
        compatibility: ["Shimano 11-speed road"],
        price: 135
      },
  
      // Dura-Ace R9100 (11-Speed)
      {
        id: "shimano-dura-ace-r9100-ss",
        model: "Shimano Dura-Ace R9100",
        variant: "Short Cage",
        weight: 158,
        maxCog: 30,
        minCog: 11,
        totalCapacity: 35,
        cageLength: "SS",
        speeds: "11-speed",
        bikeType: "road",
        compatibility: ["Shimano 11-speed road"],
        price: 250
      },
  
      // 105 Di2 R7150 (12-Speed)
      {
        id: "shimano-105-di2-r7150",
        model: "Shimano 105 Di2 R7150",
        variant: "Electronic",
        weight: 295,
        maxCog: 36,
        minCog: 11,
        totalCapacity: 41,
        cageLength: "Electronic",
        speeds: "12-speed",
        bikeType: "road",
        compatibility: ["Shimano 12-speed Di2"],
        price: 280,
        isElectronic: true
      },
  
      // Ultegra Di2 R8150 (12-Speed)
      {
        id: "shimano-ultegra-di2-r8150",
        model: "Shimano Ultegra Di2 R8150",
        variant: "Electronic",
        weight: 262,
        maxCog: 34,
        minCog: 11,
        totalCapacity: 41,
        cageLength: "Electronic",
        speeds: "12-speed",
        bikeType: "road",
        compatibility: ["Shimano 12-speed Di2"],
        price: 430,
        isElectronic: true
      },
  
      // Dura-Ace Di2 R9250 (12-Speed)
      {
        id: "shimano-dura-ace-di2-r9250",
        model: "Shimano Dura-Ace Di2 R9250",
        variant: "Electronic",
        weight: 215,
        maxCog: 34,
        minCog: 11,
        totalCapacity: 41,
        cageLength: "Electronic",
        speeds: "12-speed",
        bikeType: "road",
        compatibility: ["Shimano 12-speed Di2"],
        price: 760,
        isElectronic: true
      },
  
      // ================================
      // SHIMANO GRAVEL REAR DERAILLEURS
      // ================================
      
      // GRX RX810 (11-Speed)
      {
        id: "shimano-grx-rx810",
        model: "Shimano GRX RX810",
        variant: "Clutch",
        weight: 265,
        maxCog: 34,
        minCog: 11,
        totalCapacity: 31,
        cageLength: "Medium",
        speeds: "11-speed",
        bikeType: "gravel",
        compatibility: ["Shimano 11-speed road/gravel"],
        hasClutch: true,
        price: 125
      },
      {
        id: "shimano-grx-rx812",
        model: "Shimano GRX RX812",
        variant: "1x Clutch",
        weight: 288,
        maxCog: 42,
        minCog: 11,
        totalCapacity: 31,
        cageLength: "Long",
        speeds: "11-speed",
        bikeType: "gravel",
        compatibility: ["Shimano 11-speed 1x"],
        hasClutch: true,
        price: 130
      },
  
      // GRX Di2 RX815 (11-Speed)
      {
        id: "shimano-grx-di2-rx815",
        model: "Shimano GRX Di2 RX815",
        variant: "Electronic Clutch",
        weight: 322,
        maxCog: 34,
        minCog: 11,
        totalCapacity: 31,
        cageLength: "Electronic",
        speeds: "11-speed",
        bikeType: "gravel",
        compatibility: ["Shimano 11-speed Di2"],
        hasClutch: true,
        isElectronic: true,
        price: 470
      },
      {
        id: "shimano-grx-di2-rx817",
        model: "Shimano GRX Di2 RX817",
        variant: "1x Electronic Clutch",
        weight: 346,
        maxCog: 42,
        minCog: 11,
        totalCapacity: 31,
        cageLength: "Electronic Long",
        speeds: "11-speed",
        bikeType: "gravel",
        compatibility: ["Shimano 11-speed Di2 1x"],
        hasClutch: true,
        isElectronic: true,
        price: 480
      },
  
      // ================================
      // SHIMANO MTB REAR DERAILLEURS
      // ================================
  
      // Deore M6100 (12-Speed)
      {
        id: "shimano-deore-m6100-sgs",
        model: "Shimano Deore M6100",
        variant: "Long Cage",
        weight: 337,
        maxCog: 51,
        minCog: 10,
        totalCapacity: 41,
        cageLength: "SGS",
        speeds: "12-speed",
        bikeType: "mtb",
        compatibility: ["Shimano 12-speed MTB"],
        hasClutch: true,
        price: 80
      },
  
      // SLX M7100 (12-Speed)
      {
        id: "shimano-slx-m7100-sgs",
        model: "Shimano SLX M7100",
        variant: "Long Cage",
        weight: 320,
        maxCog: 51,
        minCog: 10,
        totalCapacity: 41,
        cageLength: "SGS",
        speeds: "12-speed",
        bikeType: "mtb",
        compatibility: ["Shimano 12-speed MTB"],
        hasClutch: true,
        price: 100
      },
  
      // XT M8100 (12-Speed)
      {
        id: "shimano-xt-m8100-sgs",
        model: "Shimano XT M8100",
        variant: "Long Cage",
        weight: 289,
        maxCog: 51,
        minCog: 10,
        totalCapacity: 41,
        cageLength: "SGS",
        speeds: "12-speed",
        bikeType: "mtb",
        compatibility: ["Shimano 12-speed MTB"],
        hasClutch: true,
        price: 120
      },
  
      // XTR M9100 (12-Speed)
      {
        id: "shimano-xtr-m9100-sgs",
        model: "Shimano XTR M9100",
        variant: "Long Cage",
        weight: 237,
        maxCog: 51,
        minCog: 10,
        totalCapacity: 41,
        cageLength: "SGS",
        speeds: "12-speed",
        bikeType: "mtb",
        compatibility: ["Shimano 12-speed MTB"],
        hasClutch: true,
        price: 280
      },
  
      // XTR M9200 Di2 (12-Speed Wireless)
      {
        id: "shimano-xtr-di2-m9200",
        model: "Shimano XTR Di2 M9200",
        variant: "Wireless Electronic",
        weight: 278,
        maxCog: 51,
        minCog: 10,
        totalCapacity: 41,
        cageLength: "Electronic",
        speeds: "12-speed",
        bikeType: "mtb",
        compatibility: ["Shimano 12-speed Di2 MTB"],
        hasClutch: true,
        isElectronic: true,
        isWireless: true,
        price: 550
      },
  
      // ================================
      // SRAM ROAD REAR DERAILLEURS
      // ================================
  
      // Rival eTap AXS (12-Speed)
      {
        id: "sram-rival-etap-axs",
        model: "SRAM Rival eTap AXS",
        variant: "Wireless",
        weight: 340,
        maxCog: 36,
        minCog: 10,
        totalCapacity: 36,
        cageLength: "Medium",
        speeds: "12-speed",
        bikeType: "road",
        compatibility: ["SRAM AXS 12-speed"],
        isElectronic: true,
        isWireless: true,
        price: 280
      },
  
      // Force eTap AXS (12-Speed)
      {
        id: "sram-force-etap-axs",
        model: "SRAM Force eTap AXS",
        variant: "Wireless",
        weight: 303,
        maxCog: 36,
        minCog: 10,
        totalCapacity: 36,
        cageLength: "Medium",
        speeds: "12-speed",
        bikeType: "road",
        compatibility: ["SRAM AXS 12-speed"],
        isElectronic: true,
        isWireless: true,
        price: 365
      },
  
      // Red eTap AXS (12-Speed)
      {
        id: "sram-red-etap-axs",
        model: "SRAM Red eTap AXS",
        variant: "Wireless",
        weight: 265,
        maxCog: 36,
        minCog: 10,
        totalCapacity: 36,
        cageLength: "Medium",
        speeds: "12-speed",
        bikeType: "road",
        compatibility: ["SRAM AXS 12-speed"],
        isElectronic: true,
        isWireless: true,
        price: 710
      },
  
      // Red eTap AXS 2024
      {
        id: "sram-red-etap-axs-2024",
        model: "SRAM Red eTap AXS 2024",
        variant: "Wireless",
        weight: 249,
        maxCog: 36,
        minCog: 10,
        totalCapacity: 36,
        cageLength: "Medium",
        speeds: "12-speed",
        bikeType: "road",
        compatibility: ["SRAM AXS 12-speed"],
        isElectronic: true,
        isWireless: true,
        price: 710
      },
  
      // ================================
      // SRAM GRAVEL REAR DERAILLEURS
      // ================================
  
      // Apex XPLR (12-Speed)
      {
        id: "sram-apex-xplr",
        model: "SRAM Apex XPLR",
        variant: "1x Mechanical",
        weight: 395,
        maxCog: 44,
        minCog: 11,
        totalCapacity: 33,
        cageLength: "Long",
        speeds: "12-speed",
        bikeType: "gravel",
        compatibility: ["SRAM 12-speed mechanical"],
        hasClutch: true,
        price: 130
      },
  
      // Rival XPLR eTap AXS (12-Speed)
      {
        id: "sram-rival-xplr-etap-axs",
        model: "SRAM Rival XPLR eTap AXS",
        variant: "1x Wireless",
        weight: 375,
        maxCog: 44,
        minCog: 10,
        totalCapacity: 36,
        cageLength: "Long",
        speeds: "12-speed",
        bikeType: "gravel",
        compatibility: ["SRAM XPLR AXS"],
        hasClutch: true,
        isElectronic: true,
        isWireless: true,
        price: 320
      },
  
      // Force XPLR eTap AXS (12-Speed)
      {
        id: "sram-force-xplr-etap-axs",
        model: "SRAM Force XPLR eTap AXS",
        variant: "1x Wireless",
        weight: 350,
        maxCog: 44,
        minCog: 10,
        totalCapacity: 36,
        cageLength: "Long",
        speeds: "12-speed",
        bikeType: "gravel",
        compatibility: ["SRAM XPLR AXS"],
        hasClutch: true,
        isElectronic: true,
        isWireless: true,
        price: 425
      },
  
      // Red XPLR eTap AXS (13-Speed!)
      {
        id: "sram-red-xplr-etap-axs",
        model: "SRAM Red XPLR eTap AXS",
        variant: "1x Wireless",
        weight: 288,
        maxCog: 46,
        minCog: 10,
        totalCapacity: 38,
        cageLength: "Long",
        speeds: "13-speed",
        bikeType: "gravel",
        compatibility: ["SRAM XPLR AXS 13-speed"],
        hasClutch: true,
        isElectronic: true,
        isWireless: true,
        price: 775
      },
  
      // ================================
      // SRAM MTB REAR DERAILLEURS
      // ================================
  
      // NX Eagle (12-Speed)
      {
        id: "sram-nx-eagle",
        model: "SRAM NX Eagle",
        variant: "Long Cage",
        weight: 381,
        maxCog: 50,
        minCog: 11,
        totalCapacity: 39,
        cageLength: "Long",
        speeds: "12-speed",
        bikeType: "mtb",
        compatibility: ["SRAM Eagle 12-speed"],
        hasClutch: true,
        price: 100
      },
  
      // GX Eagle (12-Speed)
      {
        id: "sram-gx-eagle",
        model: "SRAM GX Eagle",
        variant: "Long Cage",
        weight: 290,
        maxCog: 52,
        minCog: 10,
        totalCapacity: 42,
        cageLength: "Long",
        speeds: "12-speed",
        bikeType: "mtb",
        compatibility: ["SRAM Eagle 12-speed"],
        hasClutch: true,
        price: 140
      },
  
      // GX Eagle AXS (12-Speed)
      {
        id: "sram-gx-eagle-axs",
        model: "SRAM GX Eagle AXS",
        variant: "Wireless",
        weight: 380,
        maxCog: 52,
        minCog: 10,
        totalCapacity: 42,
        cageLength: "Electronic",
        speeds: "12-speed",
        bikeType: "mtb",
        compatibility: ["SRAM Eagle AXS"],
        hasClutch: true,
        isElectronic: true,
        isWireless: true,
        price: 380
      },
  
      // X01 Eagle (12-Speed)
      {
        id: "sram-x01-eagle",
        model: "SRAM X01 Eagle",
        variant: "Long Cage",
        weight: 273,
        maxCog: 52,
        minCog: 10,
        totalCapacity: 42,
        cageLength: "Long",
        speeds: "12-speed",
        bikeType: "mtb",
        compatibility: ["SRAM Eagle 12-speed"],
        hasClutch: true,
        price: 250
      },
  
      // X01 Eagle AXS (12-Speed)
      {
        id: "sram-x01-eagle-axs",
        model: "SRAM X01 Eagle AXS",
        variant: "Wireless",
        weight: 360,
        maxCog: 52,
        minCog: 10,
        totalCapacity: 42,
        cageLength: "Electronic",
        speeds: "12-speed",
        bikeType: "mtb",
        compatibility: ["SRAM Eagle AXS"],
        hasClutch: true,
        isElectronic: true,
        isWireless: true,
        price: 530
      },
  
      // XX1 Eagle (12-Speed)
      {
        id: "sram-xx1-eagle",
        model: "SRAM XX1 Eagle",
        variant: "Long Cage",
        weight: 254,
        maxCog: 52,
        minCog: 10,
        totalCapacity: 42,
        cageLength: "Long",
        speeds: "12-speed",
        bikeType: "mtb",
        compatibility: ["SRAM Eagle 12-speed"],
        hasClutch: true,
        price: 380
      },
  
      // XX1 Eagle AXS (12-Speed)
      {
        id: "sram-xx1-eagle-axs",
        model: "SRAM XX1 Eagle AXS",
        variant: "Wireless",
        weight: 346,
        maxCog: 52,
        minCog: 10,
        totalCapacity: 42,
        cageLength: "Electronic",
        speeds: "12-speed",
        bikeType: "mtb",
        compatibility: ["SRAM Eagle AXS"],
        hasClutch: true,
        isElectronic: true,
        isWireless: true,
        price: 700
      },
  
      // XX SL Eagle AXS T-Type (New Direct Mount)
      {
        id: "sram-xx-sl-eagle-axs-t-type",
        model: "SRAM XX SL Eagle AXS T-Type",
        variant: "Direct Mount Wireless",
        weight: 393,
        maxCog: 52,
        minCog: 10,
        totalCapacity: 42,
        cageLength: "T-Type",
        speeds: "12-speed",
        bikeType: "mtb",
        compatibility: ["SRAM T-Type"],
        hasClutch: true,
        isElectronic: true,
        isWireless: true,
        isDirectMount: true,
        price: 925
      },
  
      // ================================
      // CAMPAGNOLO REAR DERAILLEURS
      // ================================
  
      // Chorus (12-Speed)
      {
        id: "campagnolo-chorus",
        model: "Campagnolo Chorus",
        variant: "Medium Cage",
        weight: 235,
        maxCog: 34,
        minCog: 11,
        totalCapacity: 36,
        cageLength: "Medium",
        speeds: "12-speed",
        bikeType: "road",
        compatibility: ["Campagnolo 12-speed"],
        price: 200
      },
  
      // Record (12-Speed)
      {
        id: "campagnolo-record",
        model: "Campagnolo Record",
        variant: "Medium Cage",
        weight: 205,
        maxCog: 34,
        minCog: 11,
        totalCapacity: 36,
        cageLength: "Medium",
        speeds: "12-speed",
        bikeType: "road",
        compatibility: ["Campagnolo 12-speed"],
        price: 370
      },
  
      // Super Record (12-Speed)
      {
        id: "campagnolo-super-record",
        model: "Campagnolo Super Record",
        variant: "Medium Cage",
        weight: 185,
        maxCog: 34,
        minCog: 11,
        totalCapacity: 36,
        cageLength: "Medium",
        speeds: "12-speed",
        bikeType: "road",
        compatibility: ["Campagnolo 12-speed"],
        price: 560
      },
  
      // Super Record Wireless (12-Speed)
      {
        id: "campagnolo-super-record-wireless",
        model: "Campagnolo Super Record Wireless",
        variant: "Electronic",
        weight: 237,
        maxCog: 34,
        minCog: 11,
        totalCapacity: 36,
        cageLength: "Electronic",
        speeds: "12-speed",
        bikeType: "road",
        compatibility: ["Campagnolo 12-speed Electronic"],
        isElectronic: true,
        isWireless: true,
        price: 1100
      },
  
      // ================================
      // THIRD PARTY / SPECIALTY
      // ================================
  
      // Ratio Technology
      {
        id: "ratio-technology-1x12",
        model: "Ratio Technology",
        variant: "1x12 Upgrade Kit",
        weight: 295,
        maxCog: 52,
        minCog: 11,
        totalCapacity: 41,
        cageLength: "Long",
        speeds: "12-speed",
        bikeType: "mtb",
        compatibility: ["Shimano 11-speed converted"],
        hasClutch: true,
        price: 250
      },
  
      // Microshift Advent X
      {
        id: "microshift-advent-x",
        model: "Microshift Advent X",
        variant: "1x10 Wide Range",
        weight: 365,
        maxCog: 48,
        minCog: 11,
        totalCapacity: 37,
        cageLength: "Long",
        speeds: "10-speed",
        bikeType: "mtb",
        compatibility: ["Microshift Advent X"],
        hasClutch: true,
        price: 75
      }
    ],
  
    // NEW: Compatibility rules engine
    compatibilityRules: {
      // Check if RD can handle the cassette
      checkRearDerailleur: function(rd, cassette, crankset) {
        const errors = [];
        const warnings = [];
  
        // Max cog check
        const maxCog = Math.max(...cassette.teeth);
        if (maxCog > rd.maxCog) {
          errors.push(`${rd.model} has a max cog of ${rd.maxCog}T, but your cassette has ${maxCog}T`);
        }
  
        // Total capacity check (for 2x setups)
        if (crankset.teeth.length > 1) {
          const bigRing = Math.max(...crankset.teeth);
          const smallRing = Math.min(...crankset.teeth);
          const bigCog = Math.max(...cassette.teeth);
          const smallCog = Math.min(...cassette.teeth);
          const requiredCapacity = (bigRing - smallRing) + (bigCog - smallCog);
          
          if (requiredCapacity > rd.totalCapacity) {
            warnings.push(`Total capacity needed: ${requiredCapacity}T, but ${rd.model} only supports ${rd.totalCapacity}T`);
          }
        }
  
        // Speed compatibility
        const rdSpeed = parseInt(rd.speeds);
        const cassetteSpeed = parseInt(cassette.speeds);
        if (rdSpeed !== cassetteSpeed) {
          errors.push(`Speed mismatch: ${rd.model} is ${rd.speeds}, cassette is ${cassette.speeds}`);
        }
  
        // Brand compatibility (with exceptions)
        const rdBrand = rd.model.split(' ')[0].toLowerCase();
        const cassetteBrand = cassette.model.split(' ')[0].toLowerCase();
        
        if (rdBrand !== cassetteBrand) {
          // Check known compatible combinations
          const isCompatible = 
            (rdBrand === 'shimano' && cassetteBrand === 'shimano') ||
            (rdBrand === 'sram' && cassetteBrand === 'sram') ||
            (rd.compatibility.includes('Shimano') && cassette.compatibility?.includes('Shimano')) ||
            (rd.model.includes('XPLR') && cassette.model.includes('Eagle')); // SRAM cross-compatibility
          
          if (!isCompatible) {
            warnings.push(`Brand compatibility: ${rd.model} with ${cassette.model} may require special consideration`);
          }
        }
  
        return { errors, warnings };
      },
  
      // Calculate optimal chain length
      calculateChainLength: function(crankset, cassette, chainstayLength = 430) {
        // Simplified chain length calculation
        const bigRing = Math.max(...crankset.teeth);
        const bigCog = Math.max(...cassette.teeth);
        const smallRing = Math.min(...crankset.teeth);
        const smallCog = Math.min(...cassette.teeth);
        
        // Basic formula: 2 * chainstay + bigRing + bigCog + 2
        const baseLength = (2 * chainstayLength / 12.7) + (bigRing + bigCog) / 2 + 2;
        
        return {
          links: Math.ceil(baseLength),
          recommendation: `Approximately ${Math.ceil(baseLength)} links needed`
        };
      }
    }
  };
  
  // Helper function to get components for v2
  export const getComponentsForBikeTypeV2 = (bikeType) => {
    const relevantBikeTypes = [bikeType];
    if (bikeType === 'gravel') {
      relevantBikeTypes.push('mtb'); // Allow MTB components for mullet builds
    }
  
    return {
      cranksets: componentDatabaseV2.cranksets.filter(c => relevantBikeTypes.includes(c.bikeType)),
      cassettes: componentDatabaseV2.cassettes.filter(c => relevantBikeTypes.includes(c.bikeType)),
      rearDerailleurs: componentDatabaseV2.rearDerailleurs.filter(c => relevantBikeTypes.includes(c.bikeType))
    };
  };