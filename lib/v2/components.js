// lib/components.js - Enhanced component database with full drivetrain

export const componentDatabaseV2 = {
  cranksets: [
    // ================================
    // SHIMANO ROAD CRANKSETS
    // ================================

    // Claris (8-Speed)
    { id: "shimano-claris-r2000-50-34", model: "Shimano Claris R2000", variant: "50/34T", weight: 900, bikeType: "road", teeth: [50, 34], speeds: "8-speed" },
    { id: "shimano-claris-r2000-52-36", model: "Shimano Claris R2000", variant: "52/36T", weight: 920, bikeType: "road", teeth: [52, 36], speeds: "8-speed" },

    // Sora (9-Speed)
    { id: "shimano-sora-r3000-50-34", model: "Shimano Sora R3000", variant: "50/34T", weight: 850, bikeType: "road", teeth: [50, 34], speeds: "9-speed" },
    { id: "shimano-sora-r3000-52-36", model: "Shimano Sora R3000", variant: "52/36T", weight: 870, bikeType: "road", teeth: [52, 36], speeds: "9-speed" },

    // Tiagra (10-Speed)
    { id: "shimano-tiagra-r4700-50-34", model: "Shimano Tiagra R4700", variant: "50/34T", weight: 785, bikeType: "road", teeth: [50, 34], speeds: "10-speed" },
    { id: "shimano-tiagra-r4700-52-36", model: "Shimano Tiagra R4700", variant: "52/36T", weight: 795, bikeType: "road", teeth: [52, 36], speeds: "10-speed" },

    // 105 (11-Speed) - YOUR EXISTING IDs
    { id: "shimano-105-r7000", model: "Shimano 105 R7000", variant: "50/34T", weight: 760, bikeType: "road", teeth: [50, 34], speeds: "11-speed" },
    { id: "shimano-105-compact", model: "Shimano 105 R7000", variant: "52/36T", weight: 780, bikeType: "road", teeth: [52, 36], speeds: "11-speed" },
    { id: "shimano-105-r7000-53-39", model: "Shimano 105 R7000", variant: "53/39T", weight: 790, bikeType: "road", teeth: [53, 39], speeds: "11-speed" },

    // 105 (12-Speed)
    { id: "shimano-105-r7100-50-34", model: "Shimano 105 R7100", variant: "50/34T", weight: 750, bikeType: "road", teeth: [50, 34], speeds: "12-speed" },
    { id: "shimano-105-r7100-52-36", model: "Shimano 105 R7100", variant: "52/36T", weight: 760, bikeType: "road", teeth: [52, 36], speeds: "12-speed" },

    // Ultegra (11-Speed) - YOUR EXISTING IDs
    { id: "shimano-ultegra-r8000", model: "Shimano Ultegra R8000", variant: "50/34T", weight: 680, bikeType: "road", teeth: [50, 34], speeds: "11-speed" },
    { id: "shimano-ultegra-compact", model: "Shimano Ultegra R8000", variant: "52/36T", weight: 700, bikeType: "road", teeth: [52, 36], speeds: "11-speed" },
    { id: "shimano-ultegra-r8000-53-39", model: "Shimano Ultegra R8000", variant: "53/39T", weight: 710, bikeType: "road", teeth: [53, 39], speeds: "11-speed" },

    // Ultegra (12-Speed)
    { id: "shimano-ultegra-r8100-50-34", model: "Shimano Ultegra R8100", variant: "50/34T", weight: 716, bikeType: "road", teeth: [50, 34], speeds: "12-speed" },
    { id: "shimano-ultegra-r8100-52-36", model: "Shimano Ultegra R8100", variant: "52/36T", weight: 700, bikeType: "road", teeth: [52, 36], speeds: "12-speed" },

    // Dura-Ace (11-Speed) - YOUR EXISTING ID
    { id: "shimano-dura-ace-r9100", model: "Shimano Dura-Ace R9100", variant: "50/34T", weight: 590, bikeType: "road", teeth: [50, 34], speeds: "11-speed" },
    { id: "shimano-dura-ace-r9100-52-36", model: "Shimano Dura-Ace R9100", variant: "52/36T", weight: 600, bikeType: "road", teeth: [52, 36], speeds: "11-speed" },
    { id: "shimano-dura-ace-r9100-53-39", model: "Shimano Dura-Ace R9100", variant: "53/39T", weight: 610, bikeType: "road", teeth: [53, 39], speeds: "11-speed" },

    // Dura-Ace (12-Speed)
    { id: "shimano-dura-ace-r9200-50-34", model: "Shimano Dura-Ace R9200", variant: "50/34T", weight: 690, bikeType: "road", teeth: [50, 34], speeds: "12-speed" },
    { id: "shimano-dura-ace-r9200-52-36", model: "Shimano Dura-Ace R9200", variant: "52/36T", weight: 700, bikeType: "road", teeth: [52, 36], speeds: "12-speed" },
    { id: "shimano-dura-ace-r9200-54-40", model: "Shimano Dura-Ace R9200", variant: "54/40T", weight: 720, bikeType: "road", teeth: [54, 40], speeds: "12-speed" },

    // ================================
    // SHIMANO GRAVEL CRANKSETS
    // ================================

    // GRX RX400 (10-Speed)
    { id: "shimano-grx-rx400-46-30", model: "Shimano GRX RX400", variant: "46/30T", weight: 819, bikeType: "gravel", teeth: [46, 30], speeds: "10-speed" },

    // GRX RX600 (11-Speed) - YOUR EXISTING IDs
    { id: "shimano-grx-rx600", model: "Shimano GRX RX600", variant: "46/30T", weight: 720, bikeType: "gravel", teeth: [46, 30], speeds: "11-speed" },
    { id: "shimano-grx-1x-40", model: "Shimano GRX RX600 1x", variant: "40T", weight: 580, bikeType: "gravel", teeth: [40], speeds: "11-speed" },
    { id: "shimano-grx-1x-42", model: "Shimano GRX RX600 1x", variant: "42T", weight: 590, bikeType: "gravel", teeth: [42], speeds: "11-speed" },
    { id: "shimano-grx-1x-44", model: "Shimano GRX RX600 1x", variant: "44T", weight: 600, bikeType: "gravel", teeth: [44], speeds: "11-speed" },

    // GRX RX810 (11-Speed) - YOUR EXISTING ID
    { id: "shimano-grx-rx810", model: "Shimano GRX RX810", variant: "48/31T", weight: 680, bikeType: "gravel", teeth: [48, 31], speeds: "11-speed" },
    { id: "shimano-grx-rx810-1x-40", model: "Shimano GRX RX810 1x", variant: "40T", weight: 655, bikeType: "gravel", teeth: [40], speeds: "11-speed" },
    { id: "shimano-grx-rx810-1x-42", model: "Shimano GRX RX810 1x", variant: "42T", weight: 665, bikeType: "gravel", teeth: [42], speeds: "11-speed" },

    // ================================
    // SHIMANO MTB CRANKSETS
    // ================================

    // CUES U4000 (9-speed) - NEW!
    { id: "shimano-cues-u4000-32", model: "Shimano CUES U4000", variant: "32T", weight: 720, bikeType: "mtb", teeth: [32], speeds: "9-speed" },
    { id: "shimano-cues-u4000-34", model: "Shimano CUES U4000", variant: "34T", weight: 720, bikeType: "mtb", teeth: [34], speeds: "9-speed" },

    // CUES U6000 (10/11-speed) - NEW!
    { id: "shimano-cues-u6000-30", model: "Shimano CUES U6000", variant: "30T", weight: 680, bikeType: "mtb", teeth: [30], speeds: "10/11-speed" },
    { id: "shimano-cues-u6000-32", model: "Shimano CUES U6000", variant: "32T", weight: 680, bikeType: "mtb", teeth: [32], speeds: "10/11-speed" },
    { id: "shimano-cues-u6000-34", model: "Shimano CUES U6000", variant: "34T", weight: 680, bikeType: "mtb", teeth: [34], speeds: "10/11-speed" },

    // CUES U8000 (11-speed) - NEW!
    { id: "shimano-cues-u8000-32", model: "Shimano CUES U8000", variant: "32T", weight: 650, bikeType: "mtb", teeth: [32], speeds: "11-speed" },
    { id: "shimano-cues-u8000-34", model: "Shimano CUES U8000", variant: "34T", weight: 650, bikeType: "mtb", teeth: [34], speeds: "11-speed" },

    // Deore (11-Speed)
    { id: "shimano-deore-m5100-30", model: "Shimano Deore M5100", variant: "30T", weight: 685, bikeType: "mtb", teeth: [30], speeds: "11-speed" },
    { id: "shimano-deore-m5100-32", model: "Shimano Deore M5100", variant: "32T", weight: 685, bikeType: "mtb", teeth: [32], speeds: "11-speed" },

    // Deore (12-Speed)
    { id: "shimano-deore-m6100-30", model: "Shimano Deore M6100", variant: "30T", weight: 685, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "shimano-deore-m6100-32", model: "Shimano Deore M6100", variant: "32T", weight: 685, bikeType: "mtb", teeth: [32], speeds: "12-speed" },

    // SLX (11-Speed)
    { id: "shimano-slx-m7000-30", model: "Shimano SLX M7000", variant: "30T", weight: 522, bikeType: "mtb", teeth: [30], speeds: "11-speed" },
    { id: "shimano-slx-m7000-32", model: "Shimano SLX M7000", variant: "32T", weight: 522, bikeType: "mtb", teeth: [32], speeds: "11-speed" },

    // SLX (12-Speed) - YOUR EXISTING ID
    { id: "shimano-slx-m7100", model: "Shimano SLX M7100", variant: "32T", weight: 522, bikeType: "mtb", teeth: [32], speeds: "12-speed" },
    { id: "shimano-slx-m7100-30", model: "Shimano SLX M7100", variant: "30T", weight: 522, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "shimano-slx-m7100-34", model: "Shimano SLX M7100", variant: "34T", weight: 522, bikeType: "mtb", teeth: [34], speeds: "12-speed" },

    // XT (11-Speed)
    { id: "shimano-xt-m8000-30", model: "Shimano XT M8000", variant: "30T", weight: 690, bikeType: "mtb", teeth: [30], speeds: "11-speed" },
    { id: "shimano-xt-m8000-32", model: "Shimano XT M8000", variant: "32T", weight: 690, bikeType: "mtb", teeth: [32], speeds: "11-speed" },
    { id: "shimano-xt-m8000-34", model: "Shimano XT M8000", variant: "34T", weight: 690, bikeType: "mtb", teeth: [34], speeds: "11-speed" },

    // XT (12-Speed) - YOUR EXISTING ID
    { id: "shimano-xt-m8100", model: "Shimano XT M8100", variant: "32T", weight: 690, bikeType: "mtb", teeth: [32], speeds: "12-speed" },
    { id: "shimano-xt-m8100-30", model: "Shimano XT M8100", variant: "30T", weight: 690, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "shimano-xt-m8100-34", model: "Shimano XT M8100", variant: "34T", weight: 690, bikeType: "mtb", teeth: [34], speeds: "12-speed" },
    { id: "shimano-xt-m8100-36", model: "Shimano XT M8100", variant: "36T", weight: 690, bikeType: "mtb", teeth: [36], speeds: "12-speed" },

    // XTR M9100 (12-Speed) - YOUR EXISTING ID
    { id: "shimano-xtr-m9100", model: "Shimano XTR M9100", variant: "30T", weight: 590, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "shimano-xtr-m9100-32", model: "Shimano XTR M9100", variant: "32T", weight: 590, bikeType: "mtb", teeth: [32], speeds: "12-speed" },
    { id: "shimano-xtr-m9100-34", model: "Shimano XTR M9100", variant: "34T", weight: 590, bikeType: "mtb", teeth: [34], speeds: "12-speed" },

    // 🚀 NEW XTR M9200 Di2 WIRELESS (2025) - BRAND NEW!
    { id: "shimano-xtr-m9200-30", model: "Shimano XTR M9200 Di2", variant: "30T XC", weight: 580, bikeType: "mtb", teeth: [30], speeds: "12-speed wireless" },
    { id: "shimano-xtr-m9200-32", model: "Shimano XTR M9200 Di2", variant: "32T XC", weight: 580, bikeType: "mtb", teeth: [32], speeds: "12-speed wireless" },
    { id: "shimano-xtr-m9200-34", model: "Shimano XTR M9200 Di2", variant: "34T XC", weight: 580, bikeType: "mtb", teeth: [34], speeds: "12-speed wireless" },
    { id: "shimano-xtr-m9200-trail-32", model: "Shimano XTR M9200 Di2 Trail", variant: "32T Trail", weight: 590, bikeType: "mtb", teeth: [32], speeds: "12-speed wireless" },
    { id: "shimano-xtr-m9200-trail-34", model: "Shimano XTR M9200 Di2 Trail", variant: "34T Trail", weight: 590, bikeType: "mtb", teeth: [34], speeds: "12-speed wireless" },

    // ================================
    // SRAM ROAD CRANKSETS
    // ================================

    // Apex (10-Speed)
    { id: "sram-apex-50-34", model: "SRAM Apex", variant: "50/34T", weight: 850, bikeType: "road", teeth: [50, 34], speeds: "10-speed" },
    { id: "sram-apex-52-36", model: "SRAM Apex", variant: "52/36T", weight: 860, bikeType: "road", teeth: [52, 36], speeds: "10-speed" },

    // Force 22 (11-Speed)
    { id: "sram-force-22-50-34", model: "SRAM Force 22", variant: "50/34T", weight: 720, bikeType: "road", teeth: [50, 34], speeds: "11-speed" },
    { id: "sram-force-22-52-36", model: "SRAM Force 22", variant: "52/36T", weight: 730, bikeType: "road", teeth: [52, 36], speeds: "11-speed" },
    { id: "sram-force-22-53-39", model: "SRAM Force 22", variant: "53/39T", weight: 740, bikeType: "road", teeth: [53, 39], speeds: "11-speed" },

    // Rival 22 (11-Speed)
    { id: "sram-rival-22-50-34", model: "SRAM Rival 22", variant: "50/34T", weight: 800, bikeType: "road", teeth: [50, 34], speeds: "11-speed" },
    { id: "sram-rival-22-52-36", model: "SRAM Rival 22", variant: "52/36T", weight: 810, bikeType: "road", teeth: [52, 36], speeds: "11-speed" },

    // Rival AXS (12-Speed) - YOUR EXISTING ID
    { id: "sram-rival-axs", model: "SRAM Rival eTap AXS", variant: "46/33T", weight: 710, bikeType: "road", teeth: [46, 33], speeds: "12-speed" },
    { id: "sram-rival-axs-48-35", model: "SRAM Rival eTap AXS", variant: "48/35T", weight: 720, bikeType: "road", teeth: [48, 35], speeds: "12-speed" },

    // Force AXS (12-Speed)
    { id: "sram-force-axs-48-35", model: "SRAM Force eTap AXS", variant: "48/35T", weight: 750, bikeType: "road", teeth: [48, 35], speeds: "12-speed" },
    { id: "sram-force-axs-50-37", model: "SRAM Force eTap AXS", variant: "50/37T", weight: 760, bikeType: "road", teeth: [50, 37], speeds: "12-speed" },

    // 🚀 NEW SRAM RED AXS 2024 - BRAND NEW!
    { id: "sram-red-axs-2024-46-33", model: "SRAM Red AXS 2024", variant: "46/33T", weight: 545, bikeType: "road", teeth: [46, 33], speeds: "12-speed" },
    { id: "sram-red-axs-2024-48-35", model: "SRAM Red AXS 2024", variant: "48/35T", weight: 545, bikeType: "road", teeth: [48, 35], speeds: "12-speed" },
    { id: "sram-red-axs-2024-50-37", model: "SRAM Red AXS 2024", variant: "50/37T", weight: 545, bikeType: "road", teeth: [50, 37], speeds: "12-speed" },
    { id: "sram-red-axs-2024-1x-48", model: "SRAM Red AXS 2024 1x", variant: "48T", weight: 480, bikeType: "road", teeth: [48], speeds: "12-speed" },
    { id: "sram-red-axs-2024-1x-50", model: "SRAM Red AXS 2024 1x", variant: "50T", weight: 480, bikeType: "road", teeth: [50], speeds: "12-speed" },

    // Red AXS (Old 12-Speed) - keeping for compatibility
    { id: "sram-red-axs-48-35", model: "SRAM Red eTap AXS", variant: "48/35T", weight: 650, bikeType: "road", teeth: [48, 35], speeds: "12-speed" },
    { id: "sram-red-axs-50-37", model: "SRAM Red eTap AXS", variant: "50/37T", weight: 650, bikeType: "road", teeth: [50, 37], speeds: "12-speed" },

    // ================================
    // SRAM GRAVEL CRANKSETS
    // ================================

    // Apex (11-Speed)
    { id: "sram-apex-gravel-40", model: "SRAM Apex 1x", variant: "40T", weight: 762, bikeType: "gravel", teeth: [40], speeds: "11-speed" },
    { id: "sram-apex-gravel-42", model: "SRAM Apex 1x", variant: "42T", weight: 762, bikeType: "gravel", teeth: [42], speeds: "11-speed" },

    // Rival XPLR AXS (12-Speed) - YOUR EXISTING ID  
    { id: "sram-rival-gravel", model: "SRAM Rival XPLR AXS", variant: "43/30T", weight: 715, bikeType: "gravel", teeth: [43, 30], speeds: "12-speed" },
    { id: "sram-rival-xplr-40", model: "SRAM Rival XPLR AXS 1x", variant: "40T", weight: 719, bikeType: "gravel", teeth: [40], speeds: "12-speed" },
    { id: "sram-rival-xplr-42", model: "SRAM Rival XPLR AXS 1x", variant: "42T", weight: 719, bikeType: "gravel", teeth: [42], speeds: "12-speed" },

    // Force XPLR AXS (12-Speed)
    { id: "sram-force-xplr-40", model: "SRAM Force XPLR AXS 1x", variant: "40T", weight: 750, bikeType: "gravel", teeth: [40], speeds: "12-speed" },
    { id: "sram-force-xplr-42", model: "SRAM Force XPLR AXS 1x", variant: "42T", weight: 750, bikeType: "gravel", teeth: [42], speeds: "12-speed" },

    // Red XPLR AXS (13-Speed!)
    { id: "sram-red-xplr-38", model: "SRAM Red XPLR AXS 1x", variant: "38T", weight: 650, bikeType: "gravel", teeth: [38], speeds: "13-speed" },
    { id: "sram-red-xplr-40", model: "SRAM Red XPLR AXS 1x", variant: "40T", weight: 650, bikeType: "gravel", teeth: [40], speeds: "13-speed" },

    // Eagle Gravel Crossover - YOUR EXISTING IDs
    { id: "sram-gx-gravel-46", model: "SRAM GX Eagle", variant: "46T", weight: 650, bikeType: "gravel", teeth: [46], speeds: "12-speed" },
    { id: "sram-gx-gravel-48", model: "SRAM GX Eagle", variant: "48T", weight: 660, bikeType: "gravel", teeth: [48], speeds: "12-speed" },

    // ================================
    // SRAM MTB CRANKSETS
    // ================================

    // SX Eagle (12-Speed)
    { id: "sram-sx-eagle-30", model: "SRAM SX Eagle", variant: "30T", weight: 750, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "sram-sx-eagle-32", model: "SRAM SX Eagle", variant: "32T", weight: 750, bikeType: "mtb", teeth: [32], speeds: "12-speed" },

    // NX Eagle (12-Speed) - YOUR EXISTING ID
    { id: "sram-nx-eagle", model: "SRAM NX Eagle", variant: "32T", weight: 750, bikeType: "mtb", teeth: [32], speeds: "12-speed" },
    { id: "sram-nx-eagle-30", model: "SRAM NX Eagle", variant: "30T", weight: 750, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "sram-nx-eagle-34", model: "SRAM NX Eagle", variant: "34T", weight: 750, bikeType: "mtb", teeth: [34], speeds: "12-speed" },

    // GX Eagle (12-Speed) - YOUR EXISTING IDs
    { id: "sram-gx-eagle", model: "SRAM GX Eagle", variant: "32T", weight: 680, bikeType: "mtb", teeth: [32], speeds: "12-speed" },
    { id: "sram-gx-30t", model: "SRAM GX Eagle", variant: "30T", weight: 670, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "sram-gx-34t", model: "SRAM GX Eagle", variant: "34T", weight: 690, bikeType: "mtb", teeth: [34], speeds: "12-speed" },
    { id: "sram-gx-eagle-36", model: "SRAM GX Eagle", variant: "36T", weight: 700, bikeType: "mtb", teeth: [36], speeds: "12-speed" },
    { id: "sram-gx-eagle-38", model: "SRAM GX Eagle", variant: "38T", weight: 710, bikeType: "mtb", teeth: [38], speeds: "12-speed" },

    // X01 Eagle (12-Speed) - YOUR EXISTING ID
    { id: "sram-x01-eagle", model: "SRAM X01 Eagle", variant: "32T", weight: 590, bikeType: "mtb", teeth: [32], speeds: "12-speed" },
    { id: "sram-x01-eagle-30", model: "SRAM X01 Eagle", variant: "30T", weight: 590, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "sram-x01-eagle-34", model: "SRAM X01 Eagle", variant: "34T", weight: 590, bikeType: "mtb", teeth: [34], speeds: "12-speed" },
    { id: "sram-x01-eagle-36", model: "SRAM X01 Eagle", variant: "36T", weight: 590, bikeType: "mtb", teeth: [36], speeds: "12-speed" },

    // XX1 Eagle (12-Speed)
    { id: "sram-xx1-eagle-30", model: "SRAM XX1 Eagle", variant: "30T", weight: 424, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "sram-xx1-eagle-32", model: "SRAM XX1 Eagle", variant: "32T", weight: 424, bikeType: "mtb", teeth: [32], speeds: "12-speed" },
    { id: "sram-xx1-eagle-34", model: "SRAM XX1 Eagle", variant: "34T", weight: 424, bikeType: "mtb", teeth: [34], speeds: "12-speed" },
    { id: "sram-xx1-eagle-36", model: "SRAM XX1 Eagle", variant: "36T", weight: 424, bikeType: "mtb", teeth: [36], speeds: "12-speed" },

    // ================================
    // CAMPAGNOLO ROAD CRANKSETS
    // ================================

    // Chorus (12-Speed)
    { id: "campagnolo-chorus-50-34", model: "Campagnolo Chorus", variant: "50/34T", weight: 720, bikeType: "road", teeth: [50, 34], speeds: "12-speed" },
    { id: "campagnolo-chorus-52-36", model: "Campagnolo Chorus", variant: "52/36T", weight: 730, bikeType: "road", teeth: [52, 36], speeds: "12-speed" },

    // Super Record (12-Speed)
    { id: "campagnolo-super-record-50-34", model: "Campagnolo Super Record", variant: "50/34T", weight: 580, bikeType: "road", teeth: [50, 34], speeds: "12-speed" },
    { id: "campagnolo-super-record-52-36", model: "Campagnolo Super Record", variant: "52/36T", weight: 590, bikeType: "road", teeth: [52, 36], speeds: "12-speed" },

    // Record (12-Speed)
    { id: "campagnolo-record-50-34", model: "Campagnolo Record", variant: "50/34T", weight: 630, bikeType: "road", teeth: [50, 34], speeds: "12-speed" },
    { id: "campagnolo-record-52-36", model: "Campagnolo Record", variant: "52/36T", weight: 640, bikeType: "road", teeth: [52, 36], speeds: "12-speed" },

    // ================================
    // FSA CRANKSETS
    // ================================

    // FSA Gossamer (Road)
    { id: "fsa-gossamer-50-34", model: "FSA Gossamer", variant: "50/34T", weight: 820, bikeType: "road", teeth: [50, 34], speeds: "road" },
    { id: "fsa-gossamer-52-36", model: "FSA Gossamer", variant: "52/36T", weight: 830, bikeType: "road", teeth: [52, 36], speeds: "road" },

    // FSA Energy (Road)
    { id: "fsa-energy-50-34", model: "FSA Energy", variant: "50/34T", weight: 750, bikeType: "road", teeth: [50, 34], speeds: "road" },
    { id: "fsa-energy-52-36", model: "FSA Energy", variant: "52/36T", weight: 760, bikeType: "road", teeth: [52, 36], speeds: "road" },

    // FSA SL-K (High-End Road)
    { id: "fsa-sl-k-50-34", model: "FSA SL-K", variant: "50/34T", weight: 650, bikeType: "road", teeth: [50, 34], speeds: "road" },
    { id: "fsa-sl-k-52-36", model: "FSA SL-K", variant: "52/36T", weight: 660, bikeType: "road", teeth: [52, 36], speeds: "road" },

    // FSA Comet (Gravel)
    { id: "fsa-comet-46-30", model: "FSA Comet", variant: "46/30T", weight: 780, bikeType: "gravel", teeth: [46, 30], speeds: "gravel" },
    { id: "fsa-comet-1x-40", model: "FSA Comet 1x", variant: "40T", weight: 620, bikeType: "gravel", teeth: [40], speeds: "gravel" },
    { id: "fsa-comet-1x-42", model: "FSA Comet 1x", variant: "42T", weight: 630, bikeType: "gravel", teeth: [42], speeds: "gravel" },

    // FSA Gradient (Gravel)
    { id: "fsa-gradient-48-32", model: "FSA Gradient", variant: "48/32T", weight: 720, bikeType: "gravel", teeth: [48, 32], speeds: "gravel" },
    { id: "fsa-gradient-1x-40", model: "FSA Gradient 1x", variant: "40T", weight: 580, bikeType: "gravel", teeth: [40], speeds: "gravel" },

    // ================================
    // PRAXIS CRANKSETS
    // ================================

    // Praxis Alba (Road)
    { id: "praxis-alba-50-34", model: "Praxis Alba", variant: "50/34T", weight: 720, bikeType: "road", teeth: [50, 34], speeds: "road" },
    { id: "praxis-alba-52-36", model: "Praxis Alba", variant: "52/36T", weight: 730, bikeType: "road", teeth: [52, 36], speeds: "road" },

    // Praxis Zayante Carbon (Road)
    { id: "praxis-zayante-50-34", model: "Praxis Zayante Carbon", variant: "50/34T", weight: 580, bikeType: "road", teeth: [50, 34], speeds: "road" },
    { id: "praxis-zayante-52-36", model: "Praxis Zayante Carbon", variant: "52/36T", weight: 590, bikeType: "road", teeth: [52, 36], speeds: "road" },

    // Praxis Cadet (Gravel)
    { id: "praxis-cadet-48-32", model: "Praxis Cadet", variant: "48/32T", weight: 750, bikeType: "gravel", teeth: [48, 32], speeds: "gravel" },
    { id: "praxis-cadet-1x-40", model: "Praxis Cadet 1x", variant: "40T", weight: 600, bikeType: "gravel", teeth: [40], speeds: "gravel" },
    { id: "praxis-cadet-1x-42", model: "Praxis Cadet 1x", variant: "42T", weight: 610, bikeType: "gravel", teeth: [42], speeds: "gravel" },

    // ================================
    // RACE FACE MTB CRANKSETS
    // ================================

    // Race Face Aeffect (MTB)
    { id: "race-face-aeffect-30", model: "Race Face Aeffect", variant: "30T", weight: 720, bikeType: "mtb", teeth: [30], speeds: "mtb" },
    { id: "race-face-aeffect-32", model: "Race Face Aeffect", variant: "32T", weight: 720, bikeType: "mtb", teeth: [32], speeds: "mtb" },
    { id: "race-face-aeffect-34", model: "Race Face Aeffect", variant: "34T", weight: 720, bikeType: "mtb", teeth: [34], speeds: "mtb" },

    // Race Face Atlas (MTB)
    { id: "race-face-atlas-30", model: "Race Face Atlas", variant: "30T", weight: 680, bikeType: "mtb", teeth: [30], speeds: "mtb" },
    { id: "race-face-atlas-32", model: "Race Face Atlas", variant: "32T", weight: 680, bikeType: "mtb", teeth: [32], speeds: "mtb" },
    { id: "race-face-atlas-34", model: "Race Face Atlas", variant: "34T", weight: 680, bikeType: "mtb", teeth: [34], speeds: "mtb" },

    // Race Face Next SL (High-End MTB)
    { id: "race-face-next-sl-30", model: "Race Face Next SL", variant: "30T", weight: 520, bikeType: "mtb", teeth: [30], speeds: "mtb" },
    { id: "race-face-next-sl-32", model: "Race Face Next SL", variant: "32T", weight: 520, bikeType: "mtb", teeth: [32], speeds: "mtb" },
    { id: "race-face-next-sl-34", model: "Race Face Next SL", variant: "34T", weight: 520, bikeType: "mtb", teeth: [34], speeds: "mtb" },

    // ================================
    // ROTOR CRANKSETS
    // ================================

    // Rotor Aldhu (Road)
    { id: "rotor-aldhu-50-34", model: "Rotor Aldhu", variant: "50/34T", weight: 650, bikeType: "road", teeth: [50, 34], speeds: "road" },
    { id: "rotor-aldhu-52-36", model: "Rotor Aldhu", variant: "52/36T", weight: 660, bikeType: "road", teeth: [52, 36], speeds: "road" },

    // Rotor Vegast (Road)
    { id: "rotor-vegast-50-34", model: "Rotor Vegast", variant: "50/34T", weight: 580, bikeType: "road", teeth: [50, 34], speeds: "road" },
    { id: "rotor-vegast-52-36", model: "Rotor Vegast", variant: "52/36T", weight: 590, bikeType: "road", teeth: [52, 36], speeds: "road" },

    // Rotor Aldhu Gravel
    { id: "rotor-aldhu-gravel-46-30", model: "Rotor Aldhu Gravel", variant: "46/30T", weight: 680, bikeType: "gravel", teeth: [46, 30], speeds: "gravel" },
    { id: "rotor-aldhu-gravel-1x-40", model: "Rotor Aldhu Gravel 1x", variant: "40T", weight: 550, bikeType: "gravel", teeth: [40], speeds: "gravel" },
  ],

  cassettes: [
    // ================================
    // SHIMANO ROAD CASSETTES
    // ================================

    // Entry Level (8-10 speed)
    { id: "shimano-claris-r2000-11-28", model: "Shimano Claris R2000", variant: "11-28T", weight: 280, bikeType: "road", teeth: [11, 28], speeds: "8-speed" },
    { id: "shimano-claris-r2000-11-32", model: "Shimano Claris R2000", variant: "11-32T", weight: 290, bikeType: "road", teeth: [11, 32], speeds: "8-speed" },
    { id: "shimano-sora-r3000-11-28", model: "Shimano Sora R3000", variant: "11-28T", weight: 300, bikeType: "road", teeth: [11, 28], speeds: "9-speed" },
    { id: "shimano-sora-r3000-11-32", model: "Shimano Sora R3000", variant: "11-32T", weight: 310, bikeType: "road", teeth: [11, 32], speeds: "9-speed" },
    { id: "shimano-tiagra-r4700-11-28", model: "Shimano Tiagra R4700", variant: "11-28T", weight: 290, bikeType: "road", teeth: [11, 28], speeds: "10-speed" },
    { id: "shimano-tiagra-r4700-11-32", model: "Shimano Tiagra R4700", variant: "11-32T", weight: 320, bikeType: "road", teeth: [11, 32], speeds: "10-speed" },

    // 105 R7000 (11-Speed) - YOUR EXISTING IDs
    { id: "shimano-105-r7000-11-28", model: "Shimano 105 R7000", variant: "11-28T", weight: 280, bikeType: "road", teeth: [11, 28], speeds: "11-speed" },
    { id: "shimano-105-r7000-11-30", model: "Shimano 105 R7000", variant: "11-30T", weight: 295, bikeType: "road", teeth: [11, 30], speeds: "11-speed" },
    { id: "shimano-105-r7000-11-32", model: "Shimano 105 R7000", variant: "11-32T", weight: 310, bikeType: "road", teeth: [11, 32], speeds: "11-speed" },
    { id: "shimano-105-r7000-11-34", model: "Shimano 105 R7000", variant: "11-34T", weight: 325, bikeType: "road", teeth: [11, 34], speeds: "11-speed" },

    // 105 R7100 (12-Speed)
    { id: "shimano-105-r7100-11-34", model: "Shimano 105 R7100", variant: "11-34T", weight: 360, bikeType: "road", teeth: [11, 34], speeds: "12-speed" },
    { id: "shimano-105-r7100-11-36", model: "Shimano 105 R7100", variant: "11-36T", weight: 380, bikeType: "road", teeth: [11, 36], speeds: "12-speed" },

    // Ultegra R8000 (11-Speed) - YOUR EXISTING IDs
    { id: "shimano-ultegra-r8000-11-28", model: "Shimano Ultegra R8000", variant: "11-28T", weight: 250, bikeType: "road", teeth: [11, 28], speeds: "11-speed" },
    { id: "shimano-ultegra-r8000-11-30", model: "Shimano Ultegra R8000", variant: "11-30T", weight: 265, bikeType: "road", teeth: [11, 30], speeds: "11-speed" },
    { id: "shimano-ultegra-r8000-11-32", model: "Shimano Ultegra R8000", variant: "11-32T", weight: 280, bikeType: "road", teeth: [11, 32], speeds: "11-speed" },
    { id: "shimano-ultegra-r8000-11-34", model: "Shimano Ultegra R8000", variant: "11-34T", weight: 295, bikeType: "road", teeth: [11, 34], speeds: "11-speed" },

    // Ultegra R8100 (12-Speed)
    { id: "shimano-ultegra-r8100-11-30", model: "Shimano Ultegra R8100", variant: "11-30T", weight: 291, bikeType: "road", teeth: [11, 30], speeds: "12-speed" },
    { id: "shimano-ultegra-r8100-11-34", model: "Shimano Ultegra R8100", variant: "11-34T", weight: 345, bikeType: "road", teeth: [11, 34], speeds: "12-speed" },

    // Dura-Ace R9100 (11-Speed) - YOUR EXISTING ID
    { id: "shimano-dura-ace-r9100-11-28", model: "Shimano Dura-Ace R9100", variant: "11-28T", weight: 195, bikeType: "road", teeth: [11, 28], speeds: "11-speed" },
    { id: "shimano-dura-ace-r9100-11-30", model: "Shimano Dura-Ace R9100", variant: "11-30T", weight: 220, bikeType: "road", teeth: [11, 30], speeds: "11-speed" },

    // Dura-Ace R9200 (12-Speed)
    { id: "shimano-dura-ace-r9200-11-28", model: "Shimano Dura-Ace R9200", variant: "11-28T", weight: 223, bikeType: "road", teeth: [11, 28], speeds: "12-speed" },
    { id: "shimano-dura-ace-r9200-11-30", model: "Shimano Dura-Ace R9200", variant: "11-30T", weight: 250, bikeType: "road", teeth: [11, 30], speeds: "12-speed" },
    { id: "shimano-dura-ace-r9200-11-34", model: "Shimano Dura-Ace R9200", variant: "11-34T", weight: 285, bikeType: "road", teeth: [11, 34], speeds: "12-speed" },

    // ================================
    // SHIMANO GRAVEL CASSETTES
    // ================================

    // GRX RX400 (10-Speed)
    { id: "shimano-grx-rx400-11-34", model: "Shimano GRX RX400", variant: "11-34T", weight: 350, bikeType: "gravel", teeth: [11, 34], speeds: "10-speed" },
    { id: "shimano-grx-rx400-11-36", model: "Shimano GRX RX400", variant: "11-36T", weight: 370, bikeType: "gravel", teeth: [11, 36], speeds: "10-speed" },

    // GRX RX600/RX810 (11-Speed) - YOUR EXISTING IDs
    { id: "shimano-grx-rx600-11-34", model: "Shimano GRX RX600", variant: "11-34T", weight: 350, bikeType: "gravel", teeth: [11, 34], speeds: "11-speed" },
    { id: "shimano-grx-rx600-11-42", model: "Shimano GRX RX600", variant: "11-42T", weight: 390, bikeType: "gravel", teeth: [11, 42], speeds: "11-speed" },
    { id: "shimano-grx-rx810-11-40", model: "Shimano GRX RX810", variant: "11-40T", weight: 370, bikeType: "gravel", teeth: [11, 40], speeds: "11-speed" },

    // ================================
    // SHIMANO MTB CASSETTES
    // ================================

    // 🚀 NEW CUES CASSETTES - Linkglide Technology!
    { id: "shimano-cues-u4000-11-46", model: "Shimano CUES U4000", variant: "11-46T", weight: 480, bikeType: "mtb", teeth: [11, 46], speeds: "9-speed" },
    { id: "shimano-cues-u6000-11-46", model: "Shimano CUES U6000", variant: "11-46T", weight: 460, bikeType: "mtb", teeth: [11, 46], speeds: "10-speed" },
    { id: "shimano-cues-u6000-11-48", model: "Shimano CUES U6000", variant: "11-48T", weight: 480, bikeType: "mtb", teeth: [11, 48], speeds: "10-speed" },
    { id: "shimano-cues-u6000-11-50-10s", model: "Shimano CUES U6000", variant: "11-50T", weight: 500, bikeType: "mtb", teeth: [11, 50], speeds: "10-speed" },
    { id: "shimano-cues-u6000-11-50-11s", model: "Shimano CUES U6000", variant: "11-50T", weight: 520, bikeType: "mtb", teeth: [11, 50], speeds: "11-speed" },
    { id: "shimano-cues-u8000-11-50", model: "Shimano CUES U8000", variant: "11-50T", weight: 500, bikeType: "mtb", teeth: [11, 50], speeds: "11-speed" },

    // Deore M5100 (11-Speed)
    { id: "shimano-deore-m5100-11-42", model: "Shimano Deore M5100", variant: "11-42T", weight: 460, bikeType: "mtb", teeth: [11, 42], speeds: "11-speed" },
    { id: "shimano-deore-m5100-11-51", model: "Shimano Deore M5100", variant: "11-51T", weight: 518, bikeType: "mtb", teeth: [11, 51], speeds: "11-speed" },

    // Deore M6100 (12-Speed)
    { id: "shimano-deore-m6100-10-51", model: "Shimano Deore M6100", variant: "10-51T", weight: 593, bikeType: "mtb", teeth: [10, 51], speeds: "12-speed" },

    // SLX M7000 (11-Speed)
    { id: "shimano-slx-m7000-11-40", model: "Shimano SLX M7000", variant: "11-40T", weight: 360, bikeType: "mtb", teeth: [11, 40], speeds: "11-speed" },
    { id: "shimano-slx-m7000-11-42", model: "Shimano SLX M7000", variant: "11-42T", weight: 390, bikeType: "mtb", teeth: [11, 42], speeds: "11-speed" },

    // SLX M7100 (12-Speed) - YOUR EXISTING ID
    { id: "shimano-slx-m7100-10-51", model: "Shimano SLX M7100", variant: "10-51T", weight: 534, bikeType: "mtb", teeth: [10, 51], speeds: "12-speed" },
    { id: "shimano-slx-m7100-10-45", model: "Shimano SLX M7100", variant: "10-45T", weight: 461, bikeType: "mtb", teeth: [10, 45], speeds: "12-speed" },

    // XT M8000 (11-Speed)
    { id: "shimano-xt-m8000-11-40", model: "Shimano XT M8000", variant: "11-40T", weight: 360, bikeType: "mtb", teeth: [11, 40], speeds: "11-speed" },
    { id: "shimano-xt-m8000-11-42", model: "Shimano XT M8000", variant: "11-42T", weight: 390, bikeType: "mtb", teeth: [11, 42], speeds: "11-speed" },

    // XT M8100 (12-Speed) - YOUR EXISTING IDs
    { id: "shimano-xt-m8100-10-51", model: "Shimano XT M8100", variant: "10-51T", weight: 470, bikeType: "mtb", teeth: [10, 51], speeds: "12-speed" },
    { id: "shimano-xt-m8100-10-45", model: "Shimano XT M8100", variant: "10-45T", weight: 406, bikeType: "mtb", teeth: [10, 45], speeds: "12-speed" },
    { id: "shimano-xt-m8100-10-51-gravel", model: "Shimano XT M8100", variant: "10-51T", weight: 470, bikeType: "gravel", teeth: [10, 51], speeds: "12-speed" },

    // XTR M9100 (12-Speed) - YOUR EXISTING ID
    { id: "shimano-xtr-m9100-10-51", model: "Shimano XTR M9100", variant: "10-51T", weight: 390, bikeType: "mtb", teeth: [10, 51], speeds: "12-speed" },
    { id: "shimano-xtr-m9100-10-45", model: "Shimano XTR M9100", variant: "10-45T", weight: 366, bikeType: "mtb", teeth: [10, 45], speeds: "12-speed" },

    // 🚀 NEW XTR M9200 CASSETTES (2025) - BRAND NEW!
    { id: "shimano-xtr-m9200-9-45", model: "Shimano XTR M9200", variant: "9-45T", weight: 350, bikeType: "mtb", teeth: [9, 45], speeds: "12-speed wireless" },
    { id: "shimano-xtr-m9200-10-51", model: "Shimano XTR M9200", variant: "10-51T", weight: 385, bikeType: "mtb", teeth: [10, 51], speeds: "12-speed wireless" },

    // ================================
    // SRAM ROAD CASSETTES
    // ================================

    // Apex (10-Speed)
    { id: "sram-apex-11-32", model: "SRAM Apex", variant: "11-32T", weight: 320, bikeType: "road", teeth: [11, 32], speeds: "10-speed" },
    { id: "sram-apex-11-36", model: "SRAM Apex", variant: "11-36T", weight: 350, bikeType: "road", teeth: [11, 36], speeds: "10-speed" },

    // Force/Rival 22 (11-Speed)
    { id: "sram-force-22-11-28", model: "SRAM Force 22", variant: "11-28T", weight: 215, bikeType: "road", teeth: [11, 28], speeds: "11-speed" },
    { id: "sram-force-22-11-32", model: "SRAM Force 22", variant: "11-32T", weight: 245, bikeType: "road", teeth: [11, 32], speeds: "11-speed" },
    { id: "sram-rival-22-11-32", model: "SRAM Rival 22", variant: "11-32T", weight: 260, bikeType: "road", teeth: [11, 32], speeds: "11-speed" },
    { id: "sram-rival-22-11-36", model: "SRAM Rival 22", variant: "11-36T", weight: 290, bikeType: "road", teeth: [11, 36], speeds: "11-speed" },

    // Rival AXS (12-Speed) - YOUR EXISTING ID
    { id: "sram-rival-xg1251-10-36", model: "SRAM Rival XG-1251", variant: "10-36T", weight: 265, bikeType: "road", teeth: [10, 36], speeds: "12-speed" },

    // Force AXS (12-Speed)
    { id: "sram-force-xg1270-10-28", model: "SRAM Force XG-1270", variant: "10-28T", weight: 240, bikeType: "road", teeth: [10, 28], speeds: "12-speed" },
    { id: "sram-force-xg1270-10-33", model: "SRAM Force XG-1270", variant: "10-33T", weight: 270, bikeType: "road", teeth: [10, 33], speeds: "12-speed" },
    { id: "sram-force-xg1270-10-36", model: "SRAM Force XG-1270", variant: "10-36T", weight: 295, bikeType: "road", teeth: [10, 36], speeds: "12-speed" },

    // 🚀 NEW SRAM RED AXS 2024 CASSETTES - BRAND NEW!
    { id: "sram-red-xg1290-2024-10-28", model: "SRAM Red XG-1290 2024", variant: "10-28T", weight: 226, bikeType: "road", teeth: [10, 28], speeds: "12-speed" },
    { id: "sram-red-xg1290-2024-10-30", model: "SRAM Red XG-1290 2024", variant: "10-30T", weight: 235, bikeType: "road", teeth: [10, 30], speeds: "12-speed" },
    { id: "sram-red-xg1290-2024-10-33", model: "SRAM Red XG-1290 2024", variant: "10-33T", weight: 260, bikeType: "road", teeth: [10, 33], speeds: "12-speed" },
    { id: "sram-red-xg1290-2024-10-36", model: "SRAM Red XG-1290 2024", variant: "10-36T", weight: 285, bikeType: "road", teeth: [10, 36], speeds: "12-speed" },

    // Red AXS (Old 12-Speed) - keeping for compatibility
    { id: "sram-red-xg1290-10-26", model: "SRAM Red XG-1290", variant: "10-26T", weight: 240, bikeType: "road", teeth: [10, 26], speeds: "12-speed" },
    { id: "sram-red-xg1290-10-28", model: "SRAM Red XG-1290", variant: "10-28T", weight: 250, bikeType: "road", teeth: [10, 28], speeds: "12-speed" },
    { id: "sram-red-xg1290-10-33", model: "SRAM Red XG-1290", variant: "10-33T", weight: 280, bikeType: "road", teeth: [10, 33], speeds: "12-speed" },

    // ================================
    // SRAM GRAVEL CASSETTES
    // ================================

    // Apex (11-Speed)
    { id: "sram-apex-gravel-11-42", model: "SRAM Apex PG-1130", variant: "11-42T", weight: 538, bikeType: "gravel", teeth: [11, 42], speeds: "11-speed" },

    // Rival XPLR AXS (12-Speed) - YOUR EXISTING IDs
    { id: "sram-rival-xg1251-10-36-gravel", model: "SRAM Rival XG-1251", variant: "10-36T", weight: 265, bikeType: "gravel", teeth: [10, 36], speeds: "12-speed" },
    { id: "sram-rival-xg1271-10-44", model: "SRAM Rival XG-1271", variant: "10-44T", weight: 345, bikeType: "gravel", teeth: [10, 44], speeds: "12-speed" },

    // Force XPLR AXS (12-Speed)
    { id: "sram-force-xg1271-10-44", model: "SRAM Force XG-1271", variant: "10-44T", weight: 373, bikeType: "gravel", teeth: [10, 44], speeds: "12-speed" },

    // Red XPLR AXS (13-Speed!)
    { id: "sram-red-xg1391-10-46", model: "SRAM Red XG-1391", variant: "10-46T", weight: 288, bikeType: "gravel", teeth: [10, 46], speeds: "13-speed" },

    // ================================
    // SRAM MTB CASSETTES
    // ================================

    // SX Eagle (12-Speed)
    { id: "sram-sx-eagle-11-50", model: "SRAM SX Eagle PG-1210", variant: "11-50T", weight: 650, bikeType: "mtb", teeth: [11, 50], speeds: "12-speed" },

    // NX Eagle (12-Speed) - YOUR EXISTING ID
    { id: "sram-nx-eagle-10-50", model: "SRAM NX Eagle XG-1230", variant: "11-50T", weight: 615, bikeType: "mtb", teeth: [11, 50], speeds: "12-speed" },

    // GX Eagle (12-Speed) - YOUR EXISTING IDs
    { id: "sram-gx-eagle-10-52", model: "SRAM GX Eagle XG-1275", variant: "10-52T", weight: 440, bikeType: "mtb", teeth: [10, 52], speeds: "12-speed" },
    { id: "sram-gx-eagle-10-50", model: "SRAM GX Eagle XG-1275", variant: "10-50T", weight: 430, bikeType: "mtb", teeth: [10, 50], speeds: "12-speed" },

    // X01 Eagle (12-Speed) - YOUR EXISTING ID
    { id: "sram-x01-eagle-10-52", model: "SRAM X01 Eagle XG-1295", variant: "10-52T", weight: 350, bikeType: "mtb", teeth: [10, 52], speeds: "12-speed" },

    // XX1 Eagle (12-Speed)
    { id: "sram-xx1-eagle-10-52", model: "SRAM XX1 Eagle XG-1299", variant: "10-52T", weight: 371, bikeType: "mtb", teeth: [10, 52], speeds: "12-speed" },

    // MTB Crossover for Gravel - YOUR EXISTING IDs
    { id: "sram-gx-eagle-10-50-gravel", model: "SRAM GX Eagle XG-1275", variant: "10-50T", weight: 430, bikeType: "gravel", teeth: [10, 50], speeds: "12-speed" },
    { id: "sram-gx-eagle-10-52-gravel", model: "SRAM GX Eagle XG-1275", variant: "10-52T", weight: 440, bikeType: "gravel", teeth: [10, 52], speeds: "12-speed" },

    // ================================
    // CAMPAGNOLO CASSETTES
    // ================================

    // Chorus (12-Speed)
    { id: "campagnolo-chorus-11-29", model: "Campagnolo Chorus", variant: "11-29T", weight: 250, bikeType: "road", teeth: [11, 29], speeds: "12-speed" },
    { id: "campagnolo-chorus-11-32", model: "Campagnolo Chorus", variant: "11-32T", weight: 270, bikeType: "road", teeth: [11, 32], speeds: "12-speed" },
    { id: "campagnolo-chorus-11-34", model: "Campagnolo Chorus", variant: "11-34T", weight: 290, bikeType: "road", teeth: [11, 34], speeds: "12-speed" },

    // Super Record (12-Speed)
    { id: "campagnolo-super-record-11-29", model: "Campagnolo Super Record", variant: "11-29T", weight: 195, bikeType: "road", teeth: [11, 29], speeds: "12-speed" },
    { id: "campagnolo-super-record-11-32", model: "Campagnolo Super Record", variant: "11-32T", weight: 215, bikeType: "road", teeth: [11, 32], speeds: "12-speed" },
    { id: "campagnolo-super-record-11-34", model: "Campagnolo Super Record", variant: "11-34T", weight: 235, bikeType: "road", teeth: [11, 34], speeds: "12-speed" },

    // Record (12-Speed)
    { id: "campagnolo-record-11-29", model: "Campagnolo Record", variant: "11-29T", weight: 220, bikeType: "road", teeth: [11, 29], speeds: "12-speed" },
    { id: "campagnolo-record-11-32", model: "Campagnolo Record", variant: "11-32T", weight: 240, bikeType: "road", teeth: [11, 32], speeds: "12-speed" },
    { id: "campagnolo-record-11-34", model: "Campagnolo Record", variant: "11-34T", weight: 260, bikeType: "road", teeth: [11, 34], speeds: "12-speed" },

    // ================================
    // FSA CASSETTES
    // ================================

    // FSA Road Cassettes
    { id: "fsa-k-force-11-28", model: "FSA K-Force", variant: "11-28T", weight: 270, bikeType: "road", teeth: [11, 28], speeds: "11-speed" },
    { id: "fsa-k-force-11-32", model: "FSA K-Force", variant: "11-32T", weight: 290, bikeType: "road", teeth: [11, 32], speeds: "11-speed" },
    { id: "fsa-pro-road-11-28", model: "FSA Pro Road", variant: "11-28T", weight: 320, bikeType: "road", teeth: [11, 28], speeds: "11-speed" },
    { id: "fsa-pro-road-11-32", model: "FSA Pro Road", variant: "11-32T", weight: 340, bikeType: "road", teeth: [11, 32], speeds: "11-speed" },

    // FSA Gravel Cassettes
    { id: "fsa-adventure-11-42", model: "FSA Adventure", variant: "11-42T", weight: 450, bikeType: "gravel", teeth: [11, 42], speeds: "11-speed" },
    { id: "fsa-gravel-11-40", model: "FSA Gravel", variant: "11-40T", weight: 420, bikeType: "gravel", teeth: [11, 40], speeds: "11-speed" },

    // ================================
    // PRAXIS CASSETTES
    // ================================

    // Praxis Road Cassettes
    { id: "praxis-works-11-28", model: "Praxis Works", variant: "11-28T", weight: 285, bikeType: "road", teeth: [11, 28], speeds: "11-speed" },
    { id: "praxis-works-11-32", model: "Praxis Works", variant: "11-32T", weight: 305, bikeType: "road", teeth: [11, 32], speeds: "11-speed" },

    // Praxis Gravel Cassettes
    { id: "praxis-gravel-11-40", model: "Praxis Gravel", variant: "11-40T", weight: 430, bikeType: "gravel", teeth: [11, 40], speeds: "11-speed" },
    { id: "praxis-gravel-11-42", model: "Praxis Gravel", variant: "11-42T", weight: 450, bikeType: "gravel", teeth: [11, 42], speeds: "11-speed" },
  ]
};
    
    
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
    ];
  
 // --- Helper: pull only the categories you actually need
export const getComponentsForBikeTypeV2 = (bikeType) => {
  const relevantBikeTypes = [bikeType];
  if (bikeType === 'gravel') {
    relevantBikeTypes.push('mtb'); // allow mullet setups
  }

  return {
    cranksets: componentDatabaseV2.cranksets.filter(c =>
      relevantBikeTypes.includes(c.bikeType)
    ),
    cassettes: componentDatabaseV2.cassettes.filter(c =>
      relevantBikeTypes.includes(c.bikeType)
    ),
    rearDerailleurs: componentDatabaseV2.rearDerailleurs.filter(c =>
      relevantBikeTypes.includes(c.bikeType)
    ),
    // …and add any other categories here (shifters, chainrings, etc.)
  };
};

// --- Enhanced compatibility rules
export const enhancedCompatibilityRules = {
  validateDrivetrain(crankset, cassette, rearDerailleur) {
    const rdCheck = this.checkRearDerailleur(rearDerailleur, cassette, crankset);
    const chainLength = this.calculateChainLength(
      crankset,
      cassette,
      430,                        // chainstay length in mm
      rearDerailleur.hasClutch
    );

    const systemIssues = [];

    // 1× vs. 2×
    if (crankset.teeth.length === 1 && !rearDerailleur.is1x) {
      systemIssues.push('Single chainring with non-1x derailleur may have chainline issues');
    }

    // “Mullet” gravel builds
    if (cassette.bikeType === 'mtb' && crankset.bikeType === 'gravel') {
      systemIssues.push('MTB cassette on gravel crank—double-check chainline');
    }

    // electronic completeness
    if (rearDerailleur.isElectronic) {
      systemIssues.push('Electronic derailleur requires compatible shifters, battery, and wiring');
    }

    return {
      ...rdCheck,
      chainLength,
      systemIssues,
      overallCompatibility: rdCheck.errors.length === 0 ? 'compatible' : 'incompatible',
      setupDifficulty: this.assessSetupDifficulty(crankset, cassette, rearDerailleur),
    };
  },

  checkRearDerailleur(rd, cassette, crankset) {
    const errors = [];
    const warnings = [];
    const recommendations = [];

    // parse speeds once
    const rdSpeed = parseInt(rd.speeds, 10);
    const cassetteSpeed = parseInt(cassette.speeds, 10);

    // 1) Max-cog capacity
    const maxCog = Math.max(...cassette.teeth);
    if (maxCog > rd.maxCog) {
      errors.push(
        `${rd.model} max cog is ${rd.maxCog}T but cassette has ${maxCog}T`
      );
      // suggest a derailleur rated for _this_ cassette type
      const compatibles = componentDatabaseV2.rearDerailleurs.filter(alt =>
        alt.maxCog >= maxCog &&
        parseInt(alt.speeds, 10) === cassetteSpeed &&
        alt.bikeType === cassette.bikeType
      );
      if (compatibles.length) {
        recommendations.push(
          `Upgrade to ${compatibles[0].model} (supports up to ${compatibles[0].maxCog}T)`
        );
      }
    }

    // 2) Total-capacity (for 2×)
    if (crankset.teeth.length > 1) {
      const [smallRing, bigRing] = [Math.min(...crankset.teeth), Math.max(...crankset.teeth)];
      const [smallCog, bigCog] = [Math.min(...cassette.teeth), Math.max(...cassette.teeth)];
      const required = (bigRing - smallRing) + (bigCog - smallCog);

      if (required > rd.totalCapacity) {
        warnings.push(
          `Need ${required}T total capacity but ${rd.model} supports ${rd.totalCapacity}T`
        );
        recommendations.push('Use a longer-cage derailleur or reduce gear range');
      }
    }

    // 3) Speed mismatch
    if (rdSpeed !== cassetteSpeed) {
      errors.push(`Speed mismatch: derailleur is ${rd.speeds}, cassette is ${cassette.speeds}`);
      // suggest a cassette that matches _this_ derailleur
      const cassettes = componentDatabaseV2.cassettes.filter(c =>
        parseInt(c.speeds, 10) === rdSpeed &&
        c.bikeType === rd.bikeType
      );
      if (cassettes.length) {
        recommendations.push(`Try ${cassettes[0].model} for ${rd.speeds} compatibility`);
      }
    }

    // 4) Electronic / wireless notes
    if (rd.isElectronic && !rd.isWireless) {
      warnings.push('Electronic shifting requires cable routing and Di2 battery');
    }
    if (rd.isWireless) {
      warnings.push('Wireless shifting needs battery upkeep and pairing');
    }

    // 5) Direct-mount frames
    if (rd.isDirectMount) {
      warnings.push('Direct-mount derailleurs need a UDH-compatible frame');
    }

    // 6) Cross-brand setups
    const rdBrand       = rd.model.split(' ')[0].toLowerCase();
    const cassetteBrand = cassette.model.split(' ')[0].toLowerCase();
    const crankBrand    = crankset.model.split(' ')[0].toLowerCase();
    const allBrands     = [rdBrand, cassetteBrand, crankBrand];
    if (new Set(allBrands).size > 1) {
      // check our known exceptions
      const known = [
        { rd: 'shimano', cassette: 'sram', note: 'Works with proper shifter indexing' },
        { rd: 'sram',    cassette: 'shimano', note: 'May need a 1.85 mm spacer' }
      ];
      const match = known.find(k => k.rd === rdBrand && k.cassette === cassetteBrand);
      if (match) {
        warnings.push(`Cross-brand setup: ${match.note}`);
      } else {
        warnings.push('Mixed brands may need extra tuning');
      }
    }

    return { errors, warnings, recommendations };
  },

  // … calculateChainLength & assessSetupDifficulty remain largely the same
};
// Add this to the END of your lib/v2/components.js file

// Enhanced compatibility rules implementation
export const enhancedCompatibilityRules = {
  validateDrivetrain(crankset, cassette, rearDerailleur) {
    const rdCheck = this.checkRearDerailleur(rearDerailleur, cassette, crankset);
    const chainLength = this.calculateChainLength(
      crankset,
      cassette,
      430, // chainstay length in mm
      rearDerailleur.hasClutch
    );

    const systemIssues = [];

    // 1× vs. 2×
    if (crankset.teeth.length === 1 && !rearDerailleur.is1x) {
      systemIssues.push('Single chainring with non-1x derailleur may have chainline issues');
    }

    // "Mullet" gravel builds
    if (cassette.bikeType === 'mtb' && crankset.bikeType === 'gravel') {
      systemIssues.push('MTB cassette on gravel crank—double-check chainline');
    }

    // Electronic completeness
    if (rearDerailleur.isElectronic) {
      systemIssues.push('Electronic derailleur requires compatible shifters, battery, and wiring');
    }

    return {
      ...rdCheck,
      chainLength,
      systemIssues,
      overallCompatibility: rdCheck.errors.length === 0 ? 'compatible' : 'incompatible',
      setupDifficulty: this.assessSetupDifficulty(crankset, cassette, rearDerailleur),
    };
  },

  checkRearDerailleur(rd, cassette, crankset) {
    const errors = [];
    const warnings = [];
    const recommendations = [];

    // Parse speeds
    const rdSpeed = parseInt(rd.speeds, 10);
    const cassetteSpeed = parseInt(cassette.speeds, 10);

    // 1) Max-cog capacity check
    const maxCog = Math.max(...cassette.teeth);
    if (maxCog > rd.maxCog) {
      errors.push(
        `${rd.model} max cog is ${rd.maxCog}T but cassette has ${maxCog}T`
      );
      
      // Suggest compatible alternatives
      const compatibles = componentDatabaseV2.rearDerailleurs.filter(alt =>
        alt.maxCog >= maxCog &&
        parseInt(alt.speeds, 10) === cassetteSpeed &&
        alt.bikeType === cassette.bikeType
      );
      if (compatibles.length) {
        recommendations.push(
          `Try ${compatibles[0].model} (supports up to ${compatibles[0].maxCog}T)`
        );
      }
    }

    // 2) Total capacity check (for 2×)
    if (crankset.teeth.length > 1) {
      const [smallRing, bigRing] = [Math.min(...crankset.teeth), Math.max(...crankset.teeth)];
      const [smallCog, bigCog] = [Math.min(...cassette.teeth), Math.max(...cassette.teeth)];
      const required = (bigRing - smallRing) + (bigCog - smallCog);

      if (required > rd.totalCapacity) {
        warnings.push(
          `Need ${required}T total capacity but ${rd.model} supports ${rd.totalCapacity}T`
        );
        recommendations.push('Use a longer-cage derailleur or reduce gear range');
      }
    }

    // 3) Speed compatibility
    if (rdSpeed !== cassetteSpeed) {
      errors.push(`Speed mismatch: derailleur is ${rd.speeds}, cassette is ${cassette.speeds}`);
      
      // Suggest matching cassettes
      const matchingCassettes = componentDatabaseV2.cassettes.filter(c =>
        parseInt(c.speeds, 10) === rdSpeed &&
        c.bikeType === rd.bikeType
      );
      if (matchingCassettes.length) {
        recommendations.push(`Try ${matchingCassettes[0].model} for ${rd.speeds} compatibility`);
      }
    }

    // 4) Electronic/wireless considerations
    if (rd.isElectronic && !rd.isWireless) {
      warnings.push('Electronic shifting requires cable routing and Di2 battery');
    }
    if (rd.isWireless) {
      warnings.push('Wireless shifting needs battery maintenance and pairing');
    }

    // 5) Direct-mount frame requirements
    if (rd.isDirectMount) {
      warnings.push('Direct-mount derailleurs require UDH-compatible frame');
    }

    // 6) Cross-brand compatibility
    const rdBrand = rd.model.split(' ')[0].toLowerCase();
    const cassetteBrand = cassette.model.split(' ')[0].toLowerCase();
    const crankBrand = crankset.model.split(' ')[0].toLowerCase();
    const allBrands = [rdBrand, cassetteBrand, crankBrand];
    
    if (new Set(allBrands).size > 1) {
      const knownCombos = [
        { rd: 'shimano', cassette: 'sram', note: 'Works with proper shifter indexing' },
        { rd: 'sram', cassette: 'shimano', note: 'May need a 1.85mm spacer' }
      ];
      
      const match = knownCombos.find(k => k.rd === rdBrand && k.cassette === cassetteBrand);
      if (match) {
        warnings.push(`Cross-brand setup: ${match.note}`);
      } else {
        warnings.push('Mixed brands may require additional tuning');
      }
    }

    return { errors, warnings, recommendations };
  },

  calculateChainLength(crankset, cassette, chainstayLength = 430, hasClutch = false) {
    // Sheldon Brown chain length formula
    const bigRing = Math.max(...crankset.teeth);
    const bigCog = Math.max(...cassette.teeth);
    
    // Convert chainstay from mm to inches
    const chainstayInches = chainstayLength / 25.4;
    
    // Basic formula: L = 2(C) + (F/4) + (R/4) + 1
    let chainLength = 2 * chainstayInches + (bigRing / 4) + (bigCog / 4) + 1;
    
    // Add extra links for clutch derailleurs
    if (hasClutch) {
      chainLength += 2;
    }
    
    // Round up to nearest even number (chains come in pairs)
    chainLength = Math.ceil(chainLength / 2) * 2;
    
    return {
      links: Math.round(chainLength),
      formula: 'Sheldon Brown method',
      notes: hasClutch ? 'Added 2 links for clutch derailleur' : 'Standard calculation',
      chainstayLength,
      bigRing,
      bigCog
    };
  },

  assessSetupDifficulty(crankset, cassette, rearDerailleur) {
    let difficulty = 'easy';
    let factors = [];
    
    // Electronic components increase complexity
    if (rearDerailleur.isElectronic) {
      difficulty = 'moderate';
      factors.push('Electronic shifting requires programming');
    }
    
    // Wireless adds pairing complexity
    if (rearDerailleur.isWireless) {
      difficulty = 'moderate';
      factors.push('Wireless pairing and battery management');
    }
    
    // Direct mount requires specific frame compatibility
    if (rearDerailleur.isDirectMount) {
      difficulty = 'advanced';
      factors.push('Direct mount requires UDH-compatible frame');
    }
    
    // Cross-brand mixing
    const brands = [
      crankset.model.split(' ')[0].toLowerCase(),
      cassette.model.split(' ')[0].toLowerCase(),
      rearDerailleur.model.split(' ')[0].toLowerCase()
    ];
    
    if (new Set(brands).size > 1) {
      if (difficulty === 'easy') difficulty = 'moderate';
      factors.push('Mixed brands may require indexing adjustments');
    }
    
    // 1x to 2x conversions
    const is1x = crankset.teeth.length === 1;
    const rdIs1x = rearDerailleur.variant?.includes('1x') || false;
    
    if (is1x !== rdIs1x) {
      difficulty = 'moderate';
      factors.push('Changing between 1x and 2x requires cable/housing work');
    }
    
    return {
      level: difficulty,
      factors,
      estimatedTime: difficulty === 'easy' ? '30-60 min' : 
                     difficulty === 'moderate' ? '1-2 hours' : '2+ hours',
      skillLevel: difficulty === 'easy' ? 'Basic bike maintenance' :
                  difficulty === 'moderate' ? 'Intermediate bike mechanic' : 
                  'Advanced or professional mechanic'
    };
  }
};

// CRITICAL: Add this line at the very end of your file to attach the rules
componentDatabaseV2.compatibilityRules = enhancedCompatibilityRules;