import { CATEGORY_THUMBNAILS, PRODUCT_IMAGES } from './productImages.js';

export const CATEGORIES = [
  {
    id: 'aluminium-ladders',
    name: 'Aluminium Ladders',
    description: 'Lightweight, durable, rust-resistant access ladders for general, commercial, and industrial maintenance.',
    image: PRODUCT_IMAGES.aStep1White,
    itemCount: 7
  },
  {
    id: 'frp-ladders',
    name: 'FRP Ladders',
    description: 'Non-conductive fiberglass reinforced plastic ladders engineered for high-voltage and electrical safety.',
    image: null, // FRP photography unavailable in repository
    itemCount: 6
  },
  {
    id: 'tower-ladders',
    name: 'Tower Ladders',
    description: 'Heavy-duty tiltable and telescopic tower systems offering high-reach access up to 50+ feet.',
    image: PRODUCT_IMAGES.tiltTowerFront,
    itemCount: 8
  },
  {
    id: 'trolley-ladders',
    name: 'Trolley Ladders',
    description: 'Mobile platform step ladders with brake wheels and sturdy handles for warehouses and stockrooms.',
    image: PRODUCT_IMAGES.trolleyLadder1,
    itemCount: 3
  },
  {
    id: 'extension-ladders',
    name: 'Extension Ladders',
    description: 'Self-supporting and wall extension ladders featuring smooth rope and telescopic locking mechanisms.',
    image: PRODUCT_IMAGES.extWheelsFull,
    itemCount: 3
  },
  {
    id: 'scissor-lifts',
    name: 'Scissor Lifts',
    description: 'Hydraulic scissor lifting platforms for heavy payload access up to 16m with safety stabilizers.',
    image: null, // Scissor lift photography unavailable in repository
    itemCount: 2
  },
  {
    id: 'lifting-equipment',
    name: 'Lifting Equipment',
    description: 'Electric dual-mast lifts and powered aerial work platforms for vertical access in facilities.',
    image: null, // Lifting equipment photography unavailable in repository
    itemCount: 3
  },
  {
    id: 'material-handling',
    name: 'Material Handling',
    description: 'Hydraulic 360° drum lifters and 500kg heavy-duty steel goods transport platform trolleys.',
    image: null, // Material handling photography unavailable in repository
    itemCount: 2
  },
  {
    id: 'scaffolding',
    name: 'Scaffolding',
    description: 'Mobile aluminium towers and double-width zigzag modular access frames.',
    image: PRODUCT_IMAGES.scaffoldTowerDoubleWidth,
    itemCount: 2
  }
];
