// Product Images Imports
import imgTower1 from '../assets/products/tower/cws-tower-ladder-41-50ft.jpeg';
import img105Ext from '../assets/products/aluminium/cws-105-platform-step-ladder-extension.jpeg';
import img111Tower from '../assets/products/tower/cws-111-aluminium-tiltable-tower-ladder.jpeg';
import img115Trolley14ft from '../assets/products/trolley/cws-115-aluminium-trolley-ladder-14ft.jpeg';
import img111Telescopic from '../assets/products/tower/cws-111-telescopic-maintenance-ladder-lift.jpeg';
import img115bBucket from '../assets/products/tower/cws-115b-tiltable-tower-ladder-bucket.jpeg';
import img111Bucket from '../assets/products/tower/cws-111-aluminium-tiltable-tower-bucket.jpeg';
import img111Sheet from '../assets/products/tower/cws-111-tiltable-tower-catalog-sheet.jpeg';
import img108Handrail from '../assets/products/aluminium/cws-108-ladder-hand-rail.jpeg';
import img244Extension from '../assets/products/frp/cws-244-frp-wall-extension-ladder.jpeg';
import img242Platform from '../assets/products/frp/cws-242-frp-self-supported-platform-ladder.jpeg';
import img243Shelf from '../assets/products/frp/cws-243-frp-shelf-ladder.jpeg';
import img303Scissor from '../assets/products/lifting/cws-303-16m-hydraulic-scissor-lift.jpeg';
import img307Drum from '../assets/products/material-handling/cws-307-hydraulic-drum-lifter.jpeg';
import img303Mast from '../assets/products/lifting/cws-303-dual-mast-lift-12m.jpeg';
import img308Trolley from '../assets/products/material-handling/cws-308-heavy-duty-goods-trolley.jpeg';
import img242Trestle from '../assets/products/frp/cws-242-frp-trestle-collapsible-platform.jpeg';
import img242Series from '../assets/products/frp/cws-242-frp-step-ladder-series.jpeg';
import img105Wheels from '../assets/products/aluminium/cws-105-self-support-extension-wheels.jpeg';
import img130Stool from '../assets/products/aluminium/cws-130-stool-ladder.jpeg';
import img115Step2250 from '../assets/products/trolley/cws-115-platform-trolley-step-ladder-2250mm.jpeg';
import img115StepIS4571 from '../assets/products/trolley/cws-115-platform-trolley-step-is4571.jpeg';
import img108Step3m from '../assets/products/aluminium/cws-108-step-ladder-3-meter.jpeg';
import img242Step8ft from '../assets/products/frp/cws-242-frp-step-ladder-8ft.jpeg';
import img111Mtr from '../assets/products/tower/cws-111-mtr-tiltable-tower-11m.jpeg';
import img301Scissor from '../assets/products/lifting/cws-301-mobile-scissor-lift.jpeg';
import img111Square from '../assets/products/tower/cws-111-telescopic-square-tower-ladder.jpeg';
import img111NoBucket from '../assets/products/tower/cws-111-tiltable-tower-without-bucket.jpeg';
import img242Trestle12ft from '../assets/products/frp/cws-242-frp-step-trestle-12ft.jpeg';
import img101Tower14m from '../assets/products/scaffolding/cws-101-double-width-mobile-aluminium-tower-14m.jpeg';
import img108Foldable7 from '../assets/products/aluminium/cws-108-foldable-7plus1-step.jpeg';
import img108Foldable5 from '../assets/products/aluminium/cws-108-foldable-5-step.jpeg';
import img101Scaffolding from '../assets/products/scaffolding/cws-101-aluminium-scaffolding-zigzag-double-width.jpeg';

export const PRODUCTS = [
  {
    id: 'product-01-aluminium-tower-ladder',
    slug: 'aluminium-tower-ladder',
    name: 'Aluminium Tower Ladder',
    model: 'Model: Not specified',
    category: 'Tower Ladders',
    material: 'Aluminium',
    keySpec: 'Reach Height: 41–50 ft | Load: 120–150 kg',
    shortDescription: 'High-reach access aluminium tower ladder with adjustable height, secure platform, and special locking mechanism.',
    image: imgTower1,
    gallery: [imgTower1],
    specifications: {
      'Model': 'Not specified',
      'Reach Height': '41–50 ft',
      'Open Height': '39–45 ft',
      'Closed Height': '8–12 ft',
      'Load Capacity': '120–150 kg',
      'Number of Steps': '31–40',
      'Railing Height': '3–4 ft',
      'Adjustable Height': 'Yes',
      'Locking System': 'Special locking arrangement',
      'Platform': 'Secure platform with guard rails',
      'Base Wheels': 'Equipped with brake wheels'
    },
    applications: ['Industrial Maintenance', 'Construction', 'Facility Management', 'High-Reach Installations'],
    features: [
      'Adjustable height extension mechanism',
      'Special locking arrangement for dual-side security',
      '3–4 ft perimeter safety railing on platform',
      'Wheels equipped with parking brakes'
    ],
    isFeatured: true
  },
  {
    id: 'product-02-platform-step-ladder-extension-cws-105',
    slug: 'platform-step-ladder-with-extension-cws-105',
    name: 'Platform Step Ladder with Extension',
    model: 'CWS 105',
    category: 'Aluminium Ladders',
    material: 'Aluminium',
    keySpec: 'Total Height: ~13 ft | Load: 150 kg',
    shortDescription: 'Dual-purpose platform step ladder with smooth extension mechanism, wide work platform, and rugged anti-slip feet.',
    image: img105Ext,
    gallery: [img105Ext],
    specifications: {
      'Model': 'CWS 105',
      'Type': 'Platform Step Ladder with Extension',
      'Material': 'Aluminium',
      'Total Height': 'Approximately 13 ft',
      'Platform Height': 'Approximately 8.5 ft',
      'Load Capacity': 'Approximately 150 kg',
      'Number of Steps': '5+5 (Both sides)',
      'Item Weight': 'Approximately 16.5 kg',
      'Usage Type': 'Industrial, Commercial & Domestic'
    },
    applications: ['Industrial', 'Commercial', 'Domestic', 'Maintenance'],
    features: [
      'Smooth and reliable extension system for flexible height',
      'Wide and sturdy platform for comfortable working',
      'Rugged non-slip rubber feet on all surfaces',
      'Lightweight high-strength aluminium construction'
    ],
    isFeatured: false
  },
  {
    id: 'product-03-aluminium-tiltable-tower-ladder-cws-111',
    slug: 'aluminium-tiltable-tower-ladder-cws-111',
    name: 'Aluminium Tiltable Tower Ladder',
    model: 'CWS 111',
    category: 'Tower Ladders',
    material: 'High-grade aluminium with steel base',
    keySpec: 'Working Height: up to ~36 ft | Load: 150 kg',
    shortDescription: 'Heavy-duty tiltable tower ladder with manual tilting mechanism, robust steel base, and solid rubber/PU mobility wheels.',
    image: img111Tower,
    gallery: [img111Tower, img111Sheet],
    specifications: {
      'Model': 'CWS 111',
      'Type': 'Aluminium Tiltable Tower Ladder',
      'Material': 'High-Grade Aluminium with Steel Base',
      'Platform Height (Max)': 'Up to 30 ft (Customizable)',
      'Working Height (Max)': 'Up to approximately 36 ft',
      'Load Capacity': '150 kg',
      'Base Dimensions (L x W)': 'Approximately 10 ft × 5 ft',
      'Wheels': 'Solid Rubber / PU Wheels',
      'Tilting Mechanism': 'Manual with Safety Lock',
      'Finish': 'Powder Coated Base with Aluminium Structure',
      'Usage': 'Indoor / Outdoor'
    },
    applications: ['Industrial Maintenance', 'Electrical Work', 'Construction', 'Warehousing', 'Facility Management'],
    features: [
      'Easy manual tilting mechanism for safe raising and compact transport',
      'Heavy-duty steel base structure for maximum stability',
      'Anti-slip platform with guard rails and secure locking',
      'Solid wheels and jacks for easy positioning'
    ],
    isFeatured: true
  },
  {
    id: 'product-04-aluminium-trolley-ladder-cws-115',
    slug: 'aluminium-trolley-ladder-cws-115',
    name: 'Aluminium Trolley Ladder',
    model: 'CWS 115',
    category: 'Trolley Ladders',
    material: 'Aluminium with MS trolley frame',
    keySpec: '14 ft Ladder | Load Capacity: 120 kg',
    shortDescription: 'Mobile warehouse trolley ladder featuring 11 minimum steps, 508×508mm platform, nylon wheels with brakes, and MS support frame.',
    image: img115Trolley14ft,
    gallery: [img115Trolley14ft, img115Step2250, img115StepIS4571],
    specifications: {
      'Model': 'CWS 115',
      'Ladder Length': 'Approximately 14 ft',
      'Steps': 'Minimum 11 steps (457.2 mm L × 66.04 mm W)',
      'Platform Size': '508 mm × 508 mm (20" × 20")',
      'C-Channel Size': '66 mm × 31 mm × 3 mm',
      'Nylon Wheel Size': '152.4 mm × 50.8 mm (6" × 2")',
      'Wheels Count': '04 or more (including 2 brake wheels)',
      'Base of Trolley': '1828.8 mm × 1066.8 mm (6 ft × 3.5 ft)',
      'Base MS C-Channel': '76.2 mm × 38.1 mm (3" × 1.5")',
      'Load Capacity': '120 kg',
      'Supporting Strips': '04 nos or more in both handles, 01 backside strip (25×5mm)'
    },
    applications: ['Warehouses', 'Factories', 'Stores', 'Supermarkets', 'Stock Rooms'],
    features: [
      'Large 508×508 mm platform with perimeter handrails',
      'Wide anti-slip ribbed steps for secure footing',
      'Dual safety locking arrangement for extra rigidity',
      'Brake wheels for stable parking during stock picking'
    ],
    isFeatured: true
  },
  {
    id: 'product-05-telescopic-maintenance-ladder-lift-cws-111',
    slug: 'telescopic-maintenance-ladder-lift-cws-111',
    name: 'Telescopic Maintenance Ladder Lift',
    model: 'CWS 111',
    category: 'Tower Ladders',
    material: 'Mild steel & aluminium',
    keySpec: 'Max Working Height: ~50 ft | Load: 150 kg',
    shortDescription: 'Telescopic maintenance ladder lift engineered with adjustable working heights up to 50 feet and 4 adjustable support stabilizer legs.',
    image: img111Telescopic,
    gallery: [img111Telescopic],
    specifications: {
      'Model': 'CWS 111',
      'Type': 'Telescopic Ladder Lift',
      'Material': 'Mild Steel & Aluminium',
      'Maximum Working Height': 'Up to approximately 50 ft',
      'Platform Size': 'Approximately 24" × 24"',
      'Base Dimensions (L x W)': 'Approximately 6.5 ft × 4.5 ft',
      'Load Capacity': 'Approximately 150 kg',
      'Mobility': '4 Heavy-Duty Wheels with Manual Handling',
      'Stabilizers': '4 Adjustable Support Legs'
    },
    applications: ['Electrical Maintenance', 'Lighting Installation', 'Signboard Fitting', 'General Maintenance'],
    features: [
      'Multiple locking positions for variable working heights up to 50 ft',
      'Strong and stable mild steel base with aluminium upper ladder sections',
      '4 adjustable support outriggers for secure leveling',
      'Smooth mobility via heavy-duty castors'
    ],
    isFeatured: false
  },
  {
    id: 'product-06-tiltable-tower-ladder-with-bucket-cws-115b',
    slug: 'tiltable-tower-ladder-with-bucket-cws-115b',
    name: 'Tiltable Tower Ladder with Bucket',
    model: 'CWS 115B',
    category: 'Tower Ladders',
    material: 'Mild steel & aluminium',
    keySpec: 'Working Height: ~50 ft | Platform: ~48 ft',
    shortDescription: 'High-reach tiltable tower ladder with dedicated personnel & tool bucket, 4 heavy-duty wheels, and 4 adjustable stabilizers.',
    image: img115bBucket,
    gallery: [img115bBucket],
    specifications: {
      'Model': 'CWS 115B',
      'Type': 'Tiltable Tower Ladder with Bucket',
      'Material': 'Mild Steel & Aluminium',
      'Maximum Working Height': 'Up to approximately 50 ft',
      'Platform Height': 'Up to approximately 48 ft',
      'Platform Size': 'Approximately 24" × 24"',
      'Bucket Size': 'Approximately 24" × 24" × 36"',
      'Base Dimensions (L x W)': 'Approximately 6.5 ft × 4.5 ft',
      'Load Capacity': 'Approximately 150 kg',
      'Mobility': '4 Heavy-Duty Wheels with Manual Handling',
      'Stabilizers': '4 Adjustable Support Legs'
    },
    applications: ['Electrical Maintenance', 'Street Lighting', 'Signboards', 'Plant Maintenance'],
    features: [
      'Secure 24"×24"×36" bucket for technician and tools',
      'Smooth tilting mechanism for easy transit through standard gates',
      '4 adjustable outrigger legs for solid ground anchorage',
      'Engineered for safety at elevated heights'
    ],
    isFeatured: true
  },
  {
    id: 'product-07-aluminium-tiltable-tower-ladder-with-bucket-cws-111',
    slug: 'aluminium-tiltable-tower-ladder-with-bucket-cws-111',
    name: 'Aluminium Tiltable Tower Ladder with Bucket',
    model: 'CWS 111',
    category: 'Tower Ladders',
    material: 'Aluminium ladder with MS industrial trolley frame',
    keySpec: 'Manual Winch Operation | Mobile Trolley Base',
    shortDescription: 'Aluminium ladder with MS industrial trolley frame, manual winch operation, work basket, and safety stabilizers.',
    image: img111Bucket,
    gallery: [img111Bucket, img111Sheet],
    specifications: {
      'Model': 'CWS 111',
      'Type': 'Aluminium Tiltable Tower Ladder with Bucket',
      'Material': 'Aluminium Ladder with MS Trolley Frame',
      'Operation': 'Manual (Winch Operated)',
      'Platform': 'Bucket / Work Basket',
      'Mobility': '4 Heavy Duty Castor Wheels',
      'Tilting': 'Tiltable with Manual Control',
      'Safety': 'Stabilizers / Jacks for Extra Safety',
      'Usage': 'Indoor & Outdoor Industrial Use'
    },
    applications: [
      'Industrial Maintenance',
      'Electrical Maintenance',
      'Building Maintenance',
      'Cleaning & Glass Work',
      'Warehouse Operations',
      'Street Light Maintenance',
      'Factory & Plant Installations',
      'Airport Installations'
    ],
    features: [
      'Manual winch and wire rope lifting system',
      'Tiltable tower mechanism for rapid positioning',
      'Enclosed bucket/work platform for tool safety',
      'Stabilizer jacks for uneven terrain positioning'
    ],
    isFeatured: false
  },
  {
    id: 'product-08-aluminium-ladder-with-hand-rail',
    slug: 'aluminium-ladder-with-hand-rail',
    name: 'Aluminium Ladder with Hand Rail',
    model: 'Model: Not specified',
    category: 'Aluminium Ladders',
    material: 'Aluminium (FRP also available)',
    keySpec: 'Safety Hand Rail | Ribbed Steps & Anti-Slip Shoes',
    shortDescription: 'A-type high-strength ladder with ergonomic safety hand rail, corrosion-resistant build, and ribbed non-slip steps.',
    image: img108Handrail,
    gallery: [img108Handrail],
    specifications: {
      'Model': 'Not specified',
      'Material': 'High-quality aluminium (FRP available upon request)',
      'Design': 'A-Type ladder with hand rail',
      'Safety Feature': 'Safety hand rail for extra support and balance',
      'Rungs': 'Ribbed anti-slip steps',
      'Feet': 'Anti-slip rubber shoes',
      'Corrosion Resistance': 'Rust-proof aluminium finish'
    },
    applications: ['Industrial', 'Commercial', 'General Facility Maintenance', 'Warehouse Picking'],
    features: [
      'Sturdy safety hand rail providing upper body support',
      'High load capacity engineered for continuous heavy-duty use',
      'Anti-slip ribbed steps preventing accidental foot slippage',
      'Corrosion resistant for indoor and outdoor environments'
    ],
    isFeatured: false
  },
  {
    id: 'product-09-frp-wall-extension-ladder-cws-244',
    slug: 'frp-wall-extension-ladder-cws-244',
    name: 'FRP Wall Extension Ladder',
    model: 'CWS 244',
    category: 'FRP Ladders',
    material: 'Non-conductive fibreglass',
    keySpec: 'Total Length: ~24 ft | Weight: < 40 kg',
    shortDescription: 'Non-conductive fibreglass wall extension ladder with round fully serrated tempered rungs and rope-operated locking system.',
    image: img244Extension,
    gallery: [img244Extension],
    specifications: {
      'Model': 'CWS 244',
      'Material': 'Non-conductive Fibreglass side rails with tempered rungs',
      'Total Length': 'Approximately 24 ft',
      'Length of Section': '12 ft',
      'Extension Height': '21 ft',
      'Weight': 'Below 40 kg',
      'Rail Depth': '4 inches',
      'Approximate Inside Width': 'Base: 15 in, Fly: 14 in',
      'Approximate Outside Width': 'Base: 18 in, Fly: 16.5 in',
      'Rungs': 'Round fully serrated tempered rungs directly riveted',
      'Locking System': 'Rope-operated locking system'
    },
    applications: ['Electrical Maintenance', 'Power Sub-stations', 'Industrial Facilities', 'Utility Work'],
    features: [
      '100% non-conductive fibreglass channel rails for electrical safety',
      'Fully serrated round tempered aluminium rungs with direct riveting',
      'Smooth rope-operated pulley and dual rung lock system',
      'High strength-to-weight ratio'
    ],
    isFeatured: true
  },
  {
    id: 'product-10-frp-self-supported-platform-ladder-cws-242',
    slug: 'frp-self-supported-platform-ladder-cws-242',
    name: 'FRP Self-Supported Platform Ladder',
    model: 'CWS 242',
    category: 'FRP Ladders',
    material: 'FRP with aluminium steps',
    keySpec: 'Total Length: 14 ft | Step Size: 4 in',
    shortDescription: 'Self-supported fiberglass platform ladder featuring heavy bottom gusset bracing, rubber bumpers, and slip-resistant aluminium feet.',
    image: img242Platform,
    gallery: [img242Platform, img242Trestle],
    specifications: {
      'Model': 'CWS 242',
      'Material': 'FRP with aluminium steps',
      'Total Length': '14 ft',
      'Step Size': '4 inches wide',
      'Width': '17 inches',
      'Weight': 'Below 20 kg',
      'Rubber Bumper': 'Thick rubber bumper of at least 6" parallel to ladder sides',
      'Gusset Bracing': 'Two pairs of heavy-duty steel gusset support at bottom step',
      'Feet': 'Aluminium feet with thick rubber tread'
    },
    applications: ['Industrial', 'Commercial', 'Maintenance', 'Electrical Facilities'],
    features: [
      'Non-conductive FRP rails protect against live line hazards',
      'Heavy-duty steel gusset braces prevent foot spreading',
      'Thick rubber bumper protects structural walls and equipment',
      'Wide 4-inch serrated steps for fatigue-free standing'
    ],
    isFeatured: false
  },
  {
    id: 'product-11-frp-shelf-ladder-cws-243',
    slug: 'frp-shelf-ladder-cws-243',
    name: 'FRP Shelf Ladder',
    model: 'CWS 243',
    category: 'FRP Ladders',
    material: 'FRP',
    keySpec: 'Total Length: 14 ft | Weight: < 20 kg',
    shortDescription: 'Specialized 14 ft fiberglass shelf ladder designed for narrow aisle and electrical stockroom access with heavy gusset bracing.',
    image: img243Shelf,
    gallery: [img243Shelf],
    specifications: {
      'Model': 'CWS 243',
      'Material': 'FRP (Fiberglass Reinforced Plastic)',
      'Total Length': '14 ft',
      'Step Size': '4 inches wide',
      'Width': '17 inches',
      'Weight': 'Below 20 kg',
      'Rubber Bumper': 'Thick rubber of at least 6" length parallel to ladder sides',
      'Gusset Bracing': 'Two pairs of gusset support at bottom step (heavy-duty steel)',
      'Feet': 'Aluminium feet with thick slip-resistant rubber tread'
    },
    applications: ['Industrial Stockrooms', 'Electrical Panels', 'Narrow Aisle Maintenance', 'Control Rooms'],
    features: [
      'Specifically profiled for leaning securely against shelving',
      'Non-conductive fibreglass construction protects operators',
      'Protective rubber bumpers safeguard shelf finishes',
      'Dual bottom gusset steel reinforcement'
    ],
    isFeatured: false
  },
  {
    id: 'product-12-hydraulic-scissor-lift',
    slug: 'hydraulic-scissor-lift-16m',
    name: 'Hydraulic Scissor Lift',
    model: 'CWS 303',
    category: 'Scissor Lifts',
    material: 'Heavy-Duty Mild Steel',
    keySpec: 'Max Working Height: 16 m | Safe Load: 500–1000 kg',
    shortDescription: '16-meter hydraulic scissor lift with a massive 1500×2500 mm working deck engineered for heavy industrial installation and maintenance.',
    image: img303Scissor,
    gallery: [img303Scissor],
    specifications: {
      'Model': 'CWS 303',
      'Maximum Working Height': '16 Meter',
      'Safe Working Load': '500 – 1000 kg',
      'Platform Size': '1500 mm × 2500 mm',
      'Operation': 'Smooth Hydraulic Operation',
      'Construction': 'Sturdy & Durable Heavy-Gauge Mild Steel',
      'Guard Railing': 'Perimeter industrial safety railing'
    },
    applications: ['Industrial Plant Maintenance', 'High-Bay Warehousing', 'HVAC & Piping', 'Structural Construction'],
    features: [
      'Large 1500×2500 mm work deck accommodating multiple technicians & equipment',
      'Up to 1000 kg safe payload capacity',
      'Smooth hydraulic cylinder lift mechanism',
      'Heavy-duty scissor arms with reinforced pivot pins'
    ],
    isFeatured: true
  },
  {
    id: 'product-13-drum-lifter-cws-307',
    slug: 'drum-lifter-cws-307',
    name: 'Drum Lifter',
    model: 'CWS 307',
    category: 'Material Handling',
    material: 'Powder-coated mild steel frame',
    keySpec: 'SWL: 350 kg | 210 L Drums | 360° Rotation',
    shortDescription: 'Hand-operated hydraulic drum lifter with 360° gear rotation and positive locking for standard 210L steel drums.',
    image: img307Drum,
    gallery: [img307Drum],
    specifications: {
      'Model': 'CWS 307',
      'Safe Working Load (SWL)': '350 kg',
      'Drum Capacity': '210 L steel drum',
      'Maximum Lift Height': '1425 mm',
      'Minimum Fork Height': '85 mm',
      'Drum Rotation': '360° with locking positions',
      'Front Wheels': '150 mm PU wheels',
      'Hydraulic System': 'Hand-operated hydraulic pump',
      'Frame Material': 'Powder-coated mild steel'
    },
    applications: ['Drum Lifting', 'Drum Transportation', 'Drum Rotation & Decanting', 'Chemical & Oil Facilities'],
    features: [
      '360° manual gear rotation with multi-angle locking positions',
      'Effortless lifting via heavy-duty hand-pump hydraulic cylinder',
      '150mm non-marking polyurethane front wheels',
      'Sturdy clamp mechanism securely gripping 210L steel drums'
    ],
    isFeatured: true
  },
  {
    id: 'product-14-dual-mast-lift-cws-303',
    slug: 'dual-mast-lift-cws-303',
    name: 'Dual Mast Lift',
    model: 'CWS 303',
    category: 'Lifting Equipment',
    material: 'High-strength Aluminium Mast & Steel Chassis',
    keySpec: 'Working Height: 12 m | Load: 200 kg | 1.1 kW Motor',
    shortDescription: 'Dual-mast powered vertical personnel lift with 12m working height, 1.1 kW electric motor, and outrigger stabilizers.',
    image: img303Mast,
    gallery: [img303Mast],
    specifications: {
      'Model': 'CWS 303',
      'Lifting Height': '10,000 mm / 10.0 m',
      'Working Height': '12,000 mm / 12.0 m',
      'Load Capacity': '200 kg',
      'Platform Size': '1380 mm × 620 mm',
      'Storage Size (L x W x H)': '1580 mm × 950 mm × 1980 mm',
      'Power Source': 'AC 220 V / 50 Hz',
      'Lifting Electric Motor': '1.1 kW',
      'Machine Colours': 'Orange / Red',
      'Net Weight': '610 kg',
      'Stabilizers': 'Interlocked outriggers with leveling jacks'
    },
    applications: ['Warehouse Racking Maintenance', 'Factory Overhead Works', 'Commercial Facility Lighting', 'Industrial Cleanrooms'],
    features: [
      'Dual-mast structure offering superior rigidity and minimal platform deflection',
      '1.1 kW precision electric lifting motor with emergency lowering valve',
      'Compact stowed dimensions (1580×950×1980mm) fits standard double doors',
      'Heavy-duty leveling outriggers for secure high-reach operations'
    ],
    isFeatured: true
  },
  {
    id: 'product-15-goods-trolley',
    slug: 'goods-trolley',
    name: 'Goods Trolley',
    model: 'CWS 308',
    category: 'Material Handling',
    material: 'Mild steel with chequered plate',
    keySpec: 'Capacity: Min 500 kg | 1200 × 800 mm Deck',
    shortDescription: 'Heavy-duty industrial platform transport trolley with 3mm minimum chequered steel deck and 200mm solid rubber/PU castors.',
    image: img308Trolley,
    gallery: [img308Trolley],
    specifications: {
      'Model': 'CWS 308',
      'Load Capacity': 'Minimum 500 kg',
      'Platform Size (L x W)': '1200 mm × 800 mm (Overall Height: 950 mm)',
      'Platform Deck': 'Heavy-duty MS chequered plate, minimum 3 mm thick',
      'Frame Construction': 'Robust welded MS tubular construction',
      'Handle': 'Ergonomically designed fixed tubular push handle',
      'Wheels': '4 heavy-duty wheels, 200 mm diameter, non-marking solid rubber/PU',
      'Wheel Arrangement': 'Two fixed and two swivel castors',
      'Bearings': 'Sealed ball bearings',
      'Finish': 'Powder coated industrial grey'
    },
    applications: ['Industrial Plants', 'Commercial Stores', 'Warehouses', 'Manufacturing Assembly Lines'],
    features: [
      '3mm heavy-gauge non-slip MS chequered plate platform',
      '500 kg rated safe working payload',
      '2 fixed + 2 swivel 200mm non-marking wheels with sealed bearings',
      'All-welded tubular steel structure built for arduous shop-floor use'
    ],
    isFeatured: false
  },
  {
    id: 'product-16-frp-self-supported-trestle-ladder-collapsible-platform-cws-242',
    slug: 'frp-self-supported-trestle-ladder-collapsible-platform-cws-242',
    name: 'FRP Self-Supported Trestle Ladder with Collapsible Platform',
    model: 'CWS 242',
    category: 'FRP Ladders',
    material: 'FRP with serrated aluminium steps',
    keySpec: 'Models: CWS 242-2 to 242-10 | ANSI A14.5 & IS 3696',
    shortDescription: 'Self-supported fiberglass trestle ladder with collapsible lockable platform, rail guards, and lockable castor wheels.',
    image: img242Trestle,
    gallery: [img242Trestle, img242Series],
    specifications: {
      'Model Series': 'CWS 242-2 / CWS 242-6 / CWS 242-8 / CWS 242-10',
      'Material': 'Non-conductive FRP C-Section (80x30x3mm) with serrated aluminium steps (78x37x1.4mm)',
      'Step Distance': '300 mm',
      'Load Rating': 'Type 1A (300 lbs / 150 kg)',
      'Closed Heights': '542 mm / 1826 mm / 2426 mm / 3026 mm',
      'Maximum Standing Heights': '300 mm / 1100 mm / 1650 mm / 2200 mm',
      'Ladder Weights': '2.8 kg / 8.85 kg / 11.8 kg / 14.9 kg',
      'Maximum Reach': '1500 mm / 2700 mm / 3200 mm / 3700 mm',
      'Base Dimensions': '460×400mm / 1190×645mm / 1480×710mm / 1770×780mm',
      'Referenced Standards': 'Source documents reference ANSI A14.5 & IS 3696 specifications'
    },
    applications: ['Electrical Contracting', 'Industrial Maintenance', 'Power Distribution', 'Substation Work'],
    features: [
      'Lockable work platform with integral safety guard railings',
      'Lockable castor wheels for rapid site relocation',
      'Integrated top tool tray to store fasteners and equipment',
      'Internal heavy spreader braces for effortless opening and closing'
    ],
    isFeatured: false
  },
  {
    id: 'product-17-aluminium-self-support-extension-ladder-wheels-cws-105',
    slug: 'aluminium-self-support-extension-ladder-with-wheels-cws-105',
    name: 'Aluminium Self-Support Extension Ladder with Wheels',
    model: 'CWS 105',
    category: 'Extension Ladders',
    material: 'Aluminium',
    keySpec: 'Self-Supporting | Telescopic Extension | Mobility Wheels',
    shortDescription: 'Free-standing telescopic aluminium extension ladder with heavy-duty mobility wheels and dual-side safety locking arrangement.',
    image: img105Wheels,
    gallery: [img105Wheels],
    specifications: {
      'Model': 'CWS 105',
      'Type': 'Self Support Extension Ladder',
      'Material': 'Aluminium',
      'Extension Type': 'Telescopic',
      'Mobility': 'Equipped with Heavy-Duty Wheels',
      'Design': 'Self-supporting without needing wall anchorage',
      'Locking': 'Heavy-duty safety locking mechanism'
    },
    applications: ['Industrial', 'Commercial', 'Facility Maintenance', 'Electrical Contracting'],
    features: [
      'Requires no wall backing – stands independently in open floor areas',
      'Heavy-duty transport wheels allow effortless repositioning by one operator',
      'Corrosion resistant structural aluminium alloy',
      'Positive rung locks keep extended sections completely rigid'
    ],
    isFeatured: false
  },
  {
    id: 'product-18-aluminium-stool-ladder',
    slug: 'aluminium-stool-ladder',
    name: 'Aluminium Stool Ladder',
    model: 'CWS 130',
    category: 'Aluminium Ladders',
    material: 'Aluminium',
    keySpec: '200 × 200 × 300 mm | Load: 150 kg | IS 3696',
    shortDescription: 'Compact, ultra-lightweight aluminium industrial stool ladder built to IS 3696 specifications for low-level tasks.',
    image: img130Stool,
    gallery: [img130Stool],
    specifications: {
      'Model': 'CWS 130',
      'Material': 'Aluminium',
      'Dimensions': '200 mm × 200 mm × 300 mm',
      'Height': '300 mm',
      'Seating/Standing Area': '200 mm × 200 mm',
      'Load Capacity': '150 kg',
      'Referenced Standard': 'IS 3696 specification'
    },
    applications: ['Shop Floor Low Tasks', 'Assembly Stations', 'Inspection Areas', 'Laboratories'],
    features: [
      'Ultra lightweight yet sustains up to 150 kg working load',
      'Fully corrosion-resistant and easy to store',
      'Stable wide stance with anti-slip feet',
      'Referenced to IS 3696 design codes'
    ],
    isFeatured: false
  },
  {
    id: 'product-19-aluminium-self-supporting-platform-trolley-step-ladder-cws-115',
    slug: 'aluminium-self-supporting-platform-trolley-step-ladder-cws-115',
    name: 'Aluminium Self-Supporting Platform Trolley Step Ladder',
    model: 'CWS 115',
    category: 'Trolley Ladders',
    material: 'Aluminium with MS support frame',
    keySpec: 'Height: 2250 mm | Platform: 540 mm | Parking Jacks',
    shortDescription: 'Heavy-duty 2250mm platform trolley step ladder with 3mm chequered plate, brake/swivel castors, and parking jacks.',
    image: img115Step2250,
    gallery: [img115Step2250, img115StepIS4571],
    specifications: {
      'Model': 'CWS 115',
      'Height': '2250 mm',
      'Upper Platform Size': '540 mm (3mm Aluminium chequered sheet)',
      'Overall Base Size': '1520 mm',
      'Handle': 'Aluminium slotted pipe handle',
      'Base Frame': 'MS (Mild Steel) heavy support frame',
      'Structural Support': '3 mm MS plate support for platform and foot steps',
      'Mobility & Stability': 'Heavy-duty castor wheels with brakes and swivel',
      'Stationary Lock': 'Equipped with parking jacks for firm ground immobilization'
    },
    applications: ['Warehouse Picking', 'Aviation Line Maintenance', 'Heavy Manufacturing', 'Store Operations'],
    features: [
      'Dual immobilization: Castor brakes plus mechanical parking jacks',
      '3mm thick aluminium chequered plate platform and tread steps',
      'Aluminium slotted pipe guard rails for operator confidence',
      'Welded MS base chassis preventing structural torsion'
    ],
    isFeatured: false
  },
  {
    id: 'product-20-aluminium-step-ladder-3-meter-cws-108',
    slug: 'aluminium-step-ladder-3-meter-cws-108',
    name: 'Aluminium Step Ladder – 3 Meter',
    model: 'CWS 108',
    category: 'Aluminium Ladders',
    material: 'Aluminium',
    keySpec: '3 Meter Height | CWS Branded Top Cap Tray',
    shortDescription: '3-meter industrial step ladder with grooved non-slip steps, sturdy side spreaders, and utility tool tray top cap.',
    image: img108Step3m,
    gallery: [img108Step3m],
    specifications: {
      'Model': 'CWS 108',
      'Height': '3 Meter',
      'Material': 'High-Quality Aluminium',
      'Rungs': 'Anti-slip grooved extruded steps',
      'Feet': 'Non-slip molded rubber feet',
      'Bracing': 'Sturdy side spreaders for secure locking',
      'Top Feature': 'CWS branded top cap / tool tray'
    },
    applications: ['Facility Maintenance', 'Commercial Installations', 'Warehousing', 'HVAC Service'],
    features: [
      'Integrated top tray holds power tools, screwdrivers, and fasteners',
      'Anti-slip grooved steps provide high traction under dusty or damp boots',
      'Sturdy heavy-gauge metal spreaders prevent accidental folding',
      'High strength-to-weight ratio'
    ],
    isFeatured: false
  },
  {
    id: 'product-21-frp-step-ladder-8-feet-cws-242',
    slug: 'frp-step-ladder-8-feet-cws-242',
    name: 'FRP Step Ladder – 8 Feet',
    model: 'CWS 242',
    category: 'FRP Ladders',
    material: 'FRP / fibreglass',
    keySpec: 'Height: 8 ft | Non-Conductive | Slip-Resistant Steps',
    shortDescription: '8-foot heavy-duty fiberglass step ladder designed for certified electrical safety, wide steps, and rugged rubber shoes.',
    image: img242Step8ft,
    gallery: [img242Step8ft],
    specifications: {
      'Model': 'CWS 242',
      'Height': '8 ft',
      'Material': 'Non-conductive FRP (Fiberglass Reinforced Plastic)',
      'Steps': 'Slip-resistant, wide, and comfortable steps',
      'Construction': 'Heavy-duty industrial channel construction',
      'Feet': 'Durable rubber feet for anti-skid floor contact',
      'Primary Application': 'Electrical work and high-voltage maintenance'
    },
    applications: ['Electrical Maintenance', 'Switchgear Servicing', 'Power Plant Work', 'Commercial Contracting'],
    features: [
      'Non-conductive fibreglass side rails eliminate electric shock risk',
      'Wide slip-resistant steps reduce leg fatigue during long shifts',
      'Heavy-duty hardware and internal spreader bars',
      'Anti-skid rubber feet provide firm traction on polished concrete'
    ],
    isFeatured: false
  },
  {
    id: 'product-22-aluminium-tiltable-tower-ladder-11-meter-cws-111-mtr',
    slug: 'aluminium-tiltable-tower-ladder-11-meter-cws-111-mtr',
    name: 'Aluminium Tiltable Tower Ladder – 11 Meter',
    model: 'CWS 111-MTR',
    category: 'Tower Ladders',
    material: 'Aluminium',
    keySpec: 'Open Height: 33–39 ft | 4 Parking Jacks | 24×24" Deck',
    shortDescription: '11-meter aluminium tiltable tower ladder with 4 heavy parking jacks, fluted pipe rungs, and steel-wire-rope dual-side locks.',
    image: img111Mtr,
    gallery: [img111Mtr],
    specifications: {
      'Model': 'CWS 111-MTR',
      'Ladder Open Height': '33–39 feet',
      'Ladder Closed Height': '18–24 feet',
      'Bottom Width': '33–40 inches',
      'Platform Size': '24 × 24 inches',
      'Rung Diameter': '25–27 mm aluminium fluted pipe rungs',
      'Adjustable Height': 'Yes',
      'Parking Jacks': '4 Nos. heavy-duty screw jacks',
      'Trolley Base Size': '7–9 feet',
      'Top Support': 'Yes',
      'Fitting': 'Side plug',
      'Wheels': '4 Nos. rubber casted wheels (291–310 mm diameter)',
      'Locking System': 'Special steel-wire-rope locking arrangement at each running foot'
    },
    applications: ['Street Light Maintenance', 'Factory Overhead Cranes', 'Warehouse Roofing', 'Substation Work'],
    features: [
      'Steel wire rope mechanism locks ladder securely at each running foot on both sides',
      '4 mechanical parking screw jacks level the trolley on uneven soil or tarmac',
      'Large 291–310 mm rubber casted wheels absorb rough outdoor terrain',
      '24" × 24" work platform with protective perimeter railing'
    ],
    isFeatured: true
  },
  {
    id: 'product-23-mobile-scissor-lift-cws-301',
    slug: 'mobile-scissor-lift-cws-301',
    name: 'Mobile Scissor Lift',
    model: 'CWS 301',
    category: 'Scissor Lifts',
    material: 'Mild Steel',
    keySpec: 'Load: 150–500 kg | Min 6 m Height | 150 Ah Battery',
    shortDescription: 'Battery & manual operated mobile hydraulic scissor lift with minimum 6m height, 2ft deck extension, and stabilizer outriggers.',
    image: img301Scissor,
    gallery: [img301Scissor],
    specifications: {
      'Model': 'CWS 301',
      'Lift Type': 'Mobile Scissor Lift',
      'Load Capacity': '150 – 500 kg',
      'Max Working / Platform Height': 'Minimum 6 m',
      'Operation': 'Indoor & Outdoor',
      'Power Source': 'Manual / Battery (150 Ah, 12-24V with charger provided)',
      'Lifting System': 'Hydraulic Cylinder',
      'Deck Extension': 'Yes (Minimum 2 ft, 100 kg extension capacity)',
      'Stowed Drive Speed': '≤ 2 km/h',
      'Turning Radius': '≥ 2 m',
      'Safety Controls': 'Emergency stop button, Joystick / Push-button controls',
      'Stabilizers': 'Heavy-duty outrigger stabilizers',
      'Platform Size': 'Minimum 1000 × 1000 mm with safety railing',
      'Source Mentions': '1-year warranty and test certificate reference from Govt/NABL/NALC lab'
    },
    applications: ['Industrial Plant Overhauls', 'Warehouse Racks', 'Indoor Mall Maintenance', 'Airport Hangars'],
    features: [
      'Extendable deck provides additional 2 ft cantilever reach over obstacles',
      'Dual battery / manual operation ensuring lowering capability even during power outage',
      'Emergency stop button with precision joystick controls',
      'Full perimeter safety railings and stabilizer leveling outriggers'
    ],
    isFeatured: true
  },
  {
    id: 'product-24-aluminium-alloy-tiltable-telescopic-square-tower-ladder-cws-111',
    slug: 'aluminium-alloy-tiltable-telescopic-square-tower-ladder-cws-111',
    name: 'Aluminium Alloy Tiltable Telescopic Square Tower Ladder',
    model: 'CWS 111',
    category: 'Tower Ladders',
    material: 'Aluminium alloy with mild-steel support structure',
    keySpec: 'Extendable: 15.24 m (50 ft) | 300 kg Max Load',
    shortDescription: 'Heavy-duty square section tower ladder extending to 15.24m (closed: 6.14m) with winch self-locking, designed for 220kV switchyard operations.',
    image: img111Square,
    gallery: [img111Square],
    specifications: {
      'Model': 'CWS 111',
      'Closed Height': '6.14 m',
      'Extendable / Open Height': '15.24 m',
      'Platform Size': '22" × 16" (559 mm × 406 mm)',
      'Rungs': 'I-beam with D-rung steps',
      'Locking & Tilting': 'Winch-operated self-locking and winch-operated tilting mechanism',
      'Materials': 'Aluminium alloy ladder with mild-steel support chassis',
      'Platform Load Capacity': '300 kg at maximum height',
      'Wheel Setup': 'Additional 2 sets (04 Numbers) wheels supplied with ladder',
      'Stabilizers': 'Outriggers provided at base',
      'Application Note': 'Engineered for movement in 220 kV switchyards adhering to electrical clearance standards'
    },
    applications: ['220 kV Switchyards', 'Substations', 'High-Mast Stadium Lighting', 'Transmission Towers'],
    features: [
      'High platform capacity rated at 300 kg even at full 15.24m extension',
      'Dual winch mechanism: one for telescoping extension, one for 90° tilting',
      'D-rung non-skid steps preventing foot fatigue',
      'Outrigger stabilizing feet ensure wind and tipping resistance'
    ],
    isFeatured: false
  },
  {
    id: 'product-25-aluminium-tiltable-tower-ladder-with-outrigger-cws-111',
    slug: 'aluminium-tiltable-tower-ladder-with-outrigger-cws-111',
    name: 'Aluminium Tiltable Tower Ladder with Outrigger',
    model: 'CWS 111',
    category: 'Tower Ladders',
    material: 'Aluminium',
    keySpec: 'Reach: 51–67 ft | Load: 301–400 kg',
    shortDescription: 'High-elevation tiltable tower ladder reaching 51–67 feet with side-lock fittings, steel wire rope locks, and 301–400 kg load capacity.',
    image: img111NoBucket,
    gallery: [img111NoBucket],
    specifications: {
      'Model': 'CWS 111',
      'Reach Height': '51–67 feet',
      'Ladder Open Height': '46–51 feet',
      'Ladder Closed Height': '18–24 feet',
      'Bottom Width': '18–25 inches',
      'Platform Size': '18 × 18 inches',
      'Wheel Diameter': '271–290 mm',
      'Adjustable Height': 'Yes',
      'Load Capacity': '301–400 kg',
      'Trolley Base Size': '8 × 5 feet',
      'Fitting': 'Side lock',
      'Locking Mechanism': 'Special steel-wire-rope locking arrangements at each running foot',
      'Color Finish': 'Silver and Blue industrial finish'
    },
    applications: ['Industrial Plant Infrastructure', 'Power Generation Plants', 'Aircraft Maintenance', 'High-Rise Facades'],
    features: [
      'Massive 301–400 kg load rating accommodating multiple operators and heavy tools',
      'Steel wire rope dual-pawl locks at every 1-foot pitch',
      '8 × 5 ft wide trolley base preventing roll-over moments',
      'Adjustable height mechanism with smooth mechanical winch'
    ],
    isFeatured: false
  },
  {
    id: 'product-26-frp-step-trestle-ladder-12-feet-cws-242',
    slug: 'frp-step-trestle-ladder-12-feet-cws-242',
    name: 'FRP Step Trestle Ladder – 12 Feet',
    model: 'CWS 242',
    category: 'FRP Ladders',
    material: 'Non-conductive fibreglass with aluminium steps',
    keySpec: 'Height: 12 ft | Non-Conductive | Slip-Resistant Steps',
    shortDescription: '12-foot tall non-conductive fiberglass step trestle ladder with slip-resistant aluminium steps for heavy industrial electrical maintenance.',
    image: img242Trestle12ft,
    gallery: [img242Trestle12ft],
    specifications: {
      'Model': 'CWS 242',
      'Height': '12 ft tall',
      'Material': 'Non-conductive fiberglass rails with slip-resistant aluminium steps',
      'Design': 'Step trestle ladder with wide stance',
      'Steps': 'Slip-resistant serrated steps',
      'Safety Duty': 'Designed for high-voltage industrial electrical tasks'
    },
    applications: ['High-Ceiling Electrical Work', 'Overhead Cable Trays', 'Industrial Automation', 'Substations'],
    features: [
      '12 ft elevated working reach without electrical conductivity hazards',
      'Wide flanged aluminium steps securely riveted to fibreglass channels',
      'Durable hinge spreaders with positive locking',
      'Heavy rubber foot pads resisting oil, grease, and ozone degradation'
    ],
    isFeatured: false
  },
  {
    id: 'product-27-double-width-self-supporting-mobile-aluminium-tower-cws-101',
    slug: 'double-width-self-supporting-mobile-aluminium-tower-cws-101',
    name: 'Double Width Self-Supporting Mobile Aluminium Tower',
    model: 'CWS 101',
    category: 'Scaffolding',
    material: 'Aluminium',
    keySpec: 'Height: 14 m | 1.4 × 1.8–2 m Base | EN 1004 Ref',
    shortDescription: '14-meter double width self-supporting mobile aluminium tower with internal stairway ladders referenced to EN 1004.',
    image: img101Tower14m,
    gallery: [img101Tower14m, img101Scaffolding],
    specifications: {
      'Model': 'CWS 101',
      'Height': '14 Meter',
      'Width': '1.4 Meter (Double Width)',
      'Length': '1.8 – 2.0 Meter',
      'Structure': 'Self-supporting mobile aluminium tower',
      'Access': 'Inbuilt ladder / stairways system',
      'Referenced Standard': 'Document references compliance with EN 1004 specifications'
    },
    applications: ['High Building Facades', 'Auditorium & Stadium Ceilings', 'Industrial Warehouses', 'Architectural Glazing'],
    features: [
      'Modular lightweight aluminium frames allow rapid erection without specialized tools',
      'Safe internal ladder / stairway access directly inside the tower footprint',
      'Self-supporting geometry with high structural rigidity',
      'Referenced to EN 1004 standard specifications'
    ],
    isFeatured: true
  },
  {
    id: 'product-28-aluminium-ladder-foldable-type-7plus1-step',
    slug: 'aluminium-ladder-foldable-type-7-plus-1-step',
    name: 'Aluminium Ladder – Foldable Type (7+1 Step)',
    model: 'CWS 108',
    category: 'Aluminium Ladders',
    material: 'High grade light-weight Aluminium',
    keySpec: '7 Steps + 1 Platform | Load: 150 kg | Weight: 5–7 kg',
    shortDescription: 'Foldable 7 step + 1 platform aluminium ladder with 58×242cm dimensions and 150kg safe load capacity.',
    image: img108Foldable7,
    gallery: [img108Foldable7],
    specifications: {
      'Model': 'CWS 108',
      'Steps': '7 Steps + 1 Platform',
      'Material': 'High grade lightweight aluminium',
      'Item Weight': 'Approximately 5 – 7 kg',
      'Item Dimensions (W x H)': 'Approximately 58 × 242 cm',
      'Load Capacity': 'Approximately 150 kg',
      'Design': 'Foldable space-saving design with top working platform'
    },
    applications: ['Commercial Outlets', 'Domestic Maintenance', 'Office Archives', 'Light Industrial Facilities'],
    features: [
      'Folds flat in seconds for compact storage behind doors or inside vehicle vans',
      'Dedicated top standing platform with safety handrail support',
      'Weighs only 5–7 kg for effortless carrying by one person',
      'Ribbed extruded rungs ensure firm foothold'
    ],
    isFeatured: false
  },
  {
    id: 'product-29-aluminium-ladder-foldable-type-4plus1-step',
    slug: 'aluminium-ladder-foldable-type-4-plus-1-step',
    name: 'Aluminium Ladder – Foldable Type (4+1 Step)',
    model: 'CWS 108',
    category: 'Aluminium Ladders',
    material: 'High grade light-weight Aluminium',
    keySpec: '4 Steps + 1 Platform | Height: 173 cm | Load: 150 kg',
    shortDescription: 'Foldable 4 step + 1 platform aluminium ladder with 110cm platform height, 50×172cm dimensions, and 150kg capacity.',
    image: img108Foldable5,
    gallery: [img108Foldable5],
    specifications: {
      'Model': 'CWS 108',
      'Steps': '4 Steps + 1 Platform (5 Step series)',
      'Material': 'High grade lightweight aluminium',
      'Item Weight': 'Approximately 5 – 6 kg',
      'Item Dimensions (W x H)': 'Approximately 50 × 172 cm',
      'Maximum Height': 'Approximately 173 cm',
      'Platform Height (Open)': '110 cm from ground level',
      'Load Capacity': 'Approximately 150 kg'
    },
    applications: ['Retail Shelving', 'Stockrooms', 'Office Archives', 'Home Maintenance'],
    features: [
      '110 cm platform height gives ideal reach for standard 9-10 ft ceilings',
      'Wide anti-slip standing platform with ribbed tread',
      'Non-marring floor feet protect marble, epoxy, or tile floors',
      'High strength aluminium frame certified for 150 kg working load'
    ],
    isFeatured: false
  },
  {
    id: 'product-30-aluminium-scaffolding-double-width-zigzag',
    slug: 'aluminium-scaffolding-double-width-zigzag-cws-101',
    name: 'Aluminium Scaffolding – Double Width Zigzag',
    model: 'CWS 101',
    category: 'Scaffolding',
    material: 'Aluminium',
    keySpec: '1.4 m × 2 m | 12 H-Frames | 8" Jack Wheels',
    shortDescription: 'Complete double-width modular aluminium scaffolding with 12 H-frames, 14 straight braces, 12 cross braces, and 5m side outriggers.',
    image: img101Scaffolding,
    gallery: [img101Scaffolding, img101Tower14m],
    specifications: {
      'Model': 'CWS 101 Zigzag Model',
      'Dimensions': 'Double Width: 1.4 m × 2.0 m',
      'H-Frames': '2 Meter – 12 nos',
      'Straight Braces': '14 nos',
      'Cross Braces': '12 nos',
      'Ladders': '6 nos',
      'Work Platforms': '2 nos',
      'Wheels': '8-inch wheels – 4 nos with brake and jack facility',
      'Locking Pins': '24 nos',
      'Side Supports (Outriggers)': '4 Big and 4 Small (5 Meter length)',
      'Material': 'High-strength structural aluminium alloy'
    },
    applications: ['Industrial Plant Overhauls', 'Construction Facades', 'Refinery Maintenance', 'Airport Hangars'],
    features: [
      'Comprehensive modular set with heavy 8" castor wheels featuring both brake and jack leveling',
      'Includes 8 stabilizing outriggers (4 large + 4 small, 5m) for maximum lateral stability',
      'Complete safety locking with 24 high-tensile locking pins',
      'Double width 1.4m × 2.0m working deck allows two operators to work side-by-side'
    ],
    isFeatured: true
  }
];

export const getProductBySlug = (slug) => {
  return PRODUCTS.find((p) => p.slug === slug);
};

export const getProductsByCategory = (category) => {
  return PRODUCTS.filter((p) => p.category.toLowerCase() === category.toLowerCase());
};

export const getRelatedProducts = (currentProduct, limit = 4) => {
  return PRODUCTS
    .filter((p) => p.id !== currentProduct.id && (p.category === currentProduct.category || p.material === currentProduct.material))
    .slice(0, limit);
};
