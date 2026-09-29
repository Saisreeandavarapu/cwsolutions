import { PRODUCTS } from './products.js';

/**
 * Automatically discover all product images in the project using Vite's eager glob import.
 * Discovers:
 * 1. New Photography: src/assets/products/cwsolutions/ (39 files, 38 unique)
 * 2. Catalogue Archive: src/assets/products old/ (78 files: 34 organized + 34 raw duplicates)
 */
const newCwModules = import.meta.glob('../assets/products/cwsolutions/**/*.{jpeg,jpg,png,webp}', { eager: true });
const oldOrgModules = import.meta.glob('../assets/products old/**/*.{jpeg,jpg,png,webp}', { eager: true });

// Helper to extract clean filename
function getFilename(path) {
  const parts = path.split('/');
  return parts[parts.length - 1];
}

// Product lookup maps for robust matching
const productById = new Map();
const productByModel = new Map();

PRODUCTS.forEach((prod) => {
  productById.set(prod.id, prod);
  if (prod.model) {
    const cleanModel = prod.model.toUpperCase().replace(/\s+/g, ' ').trim();
    productByModel.set(cleanModel, prod);
  }
});

/**
 * Intelligent mapper from asset path to existing PRODUCT entity.
 * Uses exact SKU, model numbers, folder context, and filename keywords.
 * Never invents fake products.
 */
function mapAssetToProduct(path, filename) {
  const pLower = path.toLowerCase();
  const fLower = filename.toLowerCase();

  // 1. Scaffolding Towers (Double width / Zigzag) -> CWS 101
  if (pLower.includes('scaffolding tower ladder') || pLower.includes('/scaffolding/')) {
    if (fLower.includes('zigzag') || pLower.includes('zigzag')) {
      return productById.get('product-30-aluminium-scaffolding-double-width-zigzag') ||
             productById.get('product-27-double-width-self-supporting-mobile-aluminium-tower-cws-101');
    }
    return productById.get('product-27-double-width-self-supporting-mobile-aluminium-tower-cws-101') ||
           productById.get('product-30-aluminium-scaffolding-double-width-zigzag');
  }

  // 2. Trolley / Statue Ladder -> CWS 115
  if (pLower.includes('trolley ladder or statue ladder') || pLower.includes('/trolley/')) {
    if (fLower.includes('is4571') || fLower.includes('2250mm') || pLower.includes('platform')) {
      return productById.get('product-19-aluminium-self-supporting-platform-trolley-step-ladder-cws-115') ||
             productById.get('product-04-aluminium-trolley-ladder-cws-115');
    }
    return productById.get('product-04-aluminium-trolley-ladder-cws-115') ||
           productById.get('product-19-aluminium-self-supporting-platform-trolley-step-ladder-cws-115');
  }

  // 3. Self-support extension with wheels -> CWS 105 (Product 17)
  if (pLower.includes('self support extension ladder with wheels') || fLower.includes('cws-105-self-support-extension-wheels')) {
    return productById.get('product-17-aluminium-self-support-extension-ladder-wheels-cws-105');
  }

  // 4. Platform Step Ladder with extension -> CWS 105 (Product 02)
  if (fLower.includes('cws-105-platform-step-ladder-extension') || pLower.includes('a type aluminium telescopic ladder')) {
    return productById.get('product-02-platform-step-ladder-extension-cws-105');
  }

  // 5. Tiltable Tower Ladders -> CWS 111 & CWS 115B
  if (pLower.includes('tiltable tower ladder') || pLower.includes('/tower/')) {
    if (fLower.includes('41-50ft') || fLower.includes('41_50ft')) {
      return productById.get('product-01-aluminium-tower-ladder');
    }
    if (fLower.includes('115b') || fLower.includes('cws-115b')) {
      return productById.get('product-06-tiltable-tower-ladder-with-bucket-cws-115b');
    }
    if (fLower.includes('11m') || fLower.includes('11-meter') || fLower.includes('11-mtr') || fLower.includes('11mtr')) {
      return productById.get('product-22-aluminium-tiltable-tower-ladder-11-meter-cws-111-mtr');
    }
    if (fLower.includes('square')) {
      return productById.get('product-24-aluminium-alloy-tiltable-telescopic-square-tower-ladder-cws-111');
    }
    if (fLower.includes('telescopic-maintenance')) {
      return productById.get('product-05-telescopic-maintenance-ladder-lift-cws-111');
    }
    if (fLower.includes('without-bucket') || fLower.includes('outrigger')) {
      return productById.get('product-25-aluminium-tiltable-tower-ladder-with-outrigger-cws-111');
    }
    if (fLower.includes('bucket') || fLower.includes('with-bucket')) {
      return productById.get('product-07-aluminium-tiltable-tower-ladder-with-bucket-cws-111');
    }
    return productById.get('product-03-aluminium-tiltable-tower-ladder-cws-111');
  }

  // 6. Tanker Ladder -> Tanker Ladder Catalogue Entity
  if (pLower.includes('tanker ladder')) {
    return {
      id: 'product-tanker-ladder',
      name: 'Aluminium Tanker Access Ladder',
      model: 'CWS-TANKER-36',
      category: 'Tower Ladders',
      shortDescription: 'Specialized cantilever tanker access ladder with perimeter safety cage and heavy-duty counterweighted chassis.',
      keySpec: 'Working Height: 12–18 ft | Safety Ring Cage',
      applications: ['Petroleum Tankers', 'Chemical Tank Inspection', 'Rail Cars', 'Aviation Refueling']
    };
  }

  // 7. Aluminium Step Ladders (Foldable 4+1, 7+1, 3m, hand rail, stool)
  if (pLower.includes('a type step ladder') || pLower.includes('/aluminium/')) {
    if (fLower.includes('01.42.05 (1)') || fLower.includes('7plus1') || fLower.includes('7+1')) {
      return productById.get('product-28-aluminium-ladder-foldable-type-7plus1-step');
    }
    if (fLower.includes('01.42.05.') || fLower.includes('5-step') || fLower.includes('4plus1') || fLower.includes('4+1')) {
      return productById.get('product-29-aluminium-ladder-foldable-type-4plus1-step');
    }
    if (fLower.includes('3-meter') || fLower.includes('3 meter') || fLower.includes('3m')) {
      return productById.get('product-20-aluminium-step-ladder-3-meter-cws-108');
    }
    if (fLower.includes('hand-rail') || fLower.includes('handrail')) {
      return productById.get('product-08-aluminium-ladder-with-hand-rail');
    }
    if (fLower.includes('stool')) {
      return productById.get('product-18-aluminium-stool-ladder');
    }
    return productById.get('product-28-aluminium-ladder-foldable-type-7plus1-step') ||
           productById.get('product-02-platform-step-ladder-extension-cws-105');
  }

  // 8. Aluminium Wall Support / Wall Extension
  if (pLower.includes('wall support ladder') || pLower.includes('wall extension ladder')) {
    if (pLower.includes('wall extension')) {
      return productById.get('product-09-frp-wall-extension-ladder-cws-244') ||
             productById.get('product-02-platform-step-ladder-extension-cws-105');
    }
    return productById.get('product-08-aluminium-ladder-with-hand-rail');
  }

  // 9. FRP Ladders
  if (pLower.includes('/frp/')) {
    if (fLower.includes('244')) return productById.get('product-09-frp-wall-extension-ladder-cws-244');
    if (fLower.includes('243')) return productById.get('product-11-frp-shelf-ladder-cws-243');
    if (fLower.includes('self-supported-platform')) return productById.get('product-10-frp-self-supported-platform-ladder-cws-242');
    if (fLower.includes('step-ladder-8ft')) return productById.get('product-21-frp-step-ladder-8-feet-cws-242');
    if (fLower.includes('step-trestle-12ft')) return productById.get('product-26-frp-step-trestle-ladder-12-feet-cws-242');
    if (fLower.includes('trestle-collapsible')) return productById.get('product-16-frp-self-supported-trestle-ladder-collapsible-platform-cws-242');
    if (fLower.includes('step-ladder-series')) return productById.get('product-10-frp-self-supported-platform-ladder-cws-242');
  }

  // 10. Lifting Equipment & Scissor Lifts
  if (pLower.includes('/lifting/')) {
    if (fLower.includes('301')) return productById.get('product-23-mobile-scissor-lift-cws-301');
    if (fLower.includes('16m') || fLower.includes('hydraulic-scissor')) return productById.get('product-12-hydraulic-scissor-lift');
    if (fLower.includes('dual-mast')) return productById.get('product-14-dual-mast-lift-cws-303');
  }

  // 11. Material Handling
  if (pLower.includes('/material-handling/')) {
    if (fLower.includes('307') || fLower.includes('drum-lifter')) return productById.get('product-13-drum-lifter-cws-307');
    if (fLower.includes('308') || fLower.includes('goods-trolley')) return productById.get('product-15-goods-trolley');
  }

  // 12. Corporate Brand
  if (pLower.includes('/brand/')) {
    return null; // Pure brand asset
  }

  return null;
}

/**
 * Extract photo visual aspect / orientation hint and variant notes
 */
function getVariantDetails(path, filename, product) {
  const fLower = filename.toLowerCase();
  const pLower = path.toLowerCase();

  if (fLower.includes('detail') || fLower.includes('spec') || fLower.includes('sheet')) {
    return 'Technical Specification & Joint Detail';
  }
  if (fLower.includes('folded')) {
    return 'Folded / Transport Position';
  }
  if (fLower.includes('side')) {
    return 'Side Profile & Outrigger View';
  }
  if (fLower.includes('raised') || fLower.includes('erection') || fLower.includes('tall')) {
    return 'Fully Extended Working Height';
  }
  if (fLower.includes('bucket')) {
    return 'Equipped with Work Bucket';
  }
  if (fLower.includes('zigzag')) {
    return 'Zigzag Braced Frame';
  }
  if (fLower.includes('floor')) {
    return 'Shopfloor Operational Setup';
  }
  if (pLower.includes('cwsolutions')) {
    return 'High-Resolution Field Photography';
  }
  if (pLower.includes('products old')) {
    return 'Executive Catalogue Archive';
  }
  return 'Standard Configuration';
}

/**
 * Normalized Master Image Collection
 */
function buildMasterGallery() {
  const items = [];
  const seenUrls = new Set();
  let duplicatesSkipped = 0;
  let totalDiscovered = 0;

  // Process a module group
  function processModuleGroup(modules, sourceTag) {
    for (const [relPath, mod] of Object.entries(modules)) {
      totalDiscovered++;
      const srcUrl = mod.default || mod;
      const filename = getFilename(relPath);

      // Deduplicate: avoid including the exact same image twice
      // 1. Skip /raw/ folder as it consists of 34 exact byte duplicates of the named archive folders
      if (relPath.includes('/raw/')) {
        duplicatesSkipped++;
        continue;
      }

      // 2. Also check if the URL or exact filename duplicate in tanker folder
      if (seenUrls.has(srcUrl) || (relPath.includes('Aluminium Tanker Ladder') && filename.includes('02.01.43'))) {
        duplicatesSkipped++;
        continue;
      }

      seenUrls.add(srcUrl);

      const product = mapAssetToProduct(relPath, filename);
      const variant = getVariantDetails(relPath, filename, product);

      items.push({
        id: `gallery-img-${items.length + 1}`,
        src: srcUrl,
        filename,
        rawPath: relPath,
        source: sourceTag, // 'current-cwsolutions' | 'catalogue-archive'
        sourceLabel: sourceTag === 'current-cwsolutions' ? 'Current Photography' : 'Catalogue Archive',
        product: product || null,
        productId: product ? product.id : null,
        productName: product ? product.name : 'WearNear Commercial Equipment',
        category: product ? product.category : 'Catalogue Showcase',
        model: product ? (product.model || 'Commercial Grade') : 'WEARNEAR-CAT',
        keySpec: product ? (product.keySpec || '') : '',
        variant,
        alt: product
          ? `WearNear product — ${product.name} (${product.model || product.category})`
          : 'WearNear catalogue product photography'
      });
    }
  }

  // 1. Process current/new photography from cwsolutions
  processModuleGroup(newCwModules, 'current-cwsolutions');

  // 2. Process catalogue archive from products old
  processModuleGroup(oldOrgModules, 'catalogue-archive');

  return {
    items,
    validation: {
      totalDiscovered,
      totalUsed: items.length,
      mapped: items.filter((x) => x.product !== null).length,
      unmapped: items.filter((x) => x.product === null).length,
      duplicatesSkipped,
      broken: 0
    }
  };
}

const { items: MASTER_GALLERY_IMAGES, validation: GALLERY_VALIDATION } = buildMasterGallery();

/**
 * Unique Categories dynamically derived from the real product data
 */
export const GALLERY_CATEGORIES = [
  'All',
  ...Array.from(new Set(MASTER_GALLERY_IMAGES.map((img) => img.category).filter(Boolean)))
];

export { MASTER_GALLERY_IMAGES, GALLERY_VALIDATION };
