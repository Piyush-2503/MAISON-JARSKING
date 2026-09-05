const Product = require('../models/Product');
const Quote = require('../models/Quote');
const User = require('../models/User');

const seedProducts = [
  {
    id: "jx-n005",
    modelCode: "JX-N005",
    name: "Angel Wings",
    tagline: "Sculpted Wings & Ribbed Crystal Elegance",
    category: "Sculptural",
    style: "Luxury / Statement",
    capacities: ["30ml", "50ml", "100ml"],
    defaultCapacity: "50ml",
    glassColor: "Amber Cognac",
    availableColors: ["Amber Cognac", "Emerald Shimmer", "Deep Sapphire", "Magenta Gradient"],
    material: "Extra Flint Heavy Glass",
    finish: "Ribbed Vertical Facets",
    capType: "Sculpted Wings Metal Crown",
    sprayType: "FEA 15 Anodized Aluminum Micro-Mist",
    moq: 50,
    basePrice: 480,
    tiers: [
      { min: 50, max: 99, price: 480 },
      { min: 100, max: 249, price: 450 },
      { min: 250, max: 499, price: 420 },
      { min: 500, max: 99999, price: 390 }
    ],
    customizable: true,
    description: "Designed with architectural vertical facets and crowned with an intricate wings-inspired sculpted metal cap. Angel Wings provides immediate luxury shelf presence for niche and high-end fragrance houses.",
    specs: {
      neckFinish: "FEA 15",
      height: "128 mm",
      width: "46 mm",
      weight: "280 g",
      overflowCapacity: "54 ml",
      customOptions: ["Gold Foil Stamping", "Silk Screen Printing", "Custom Gradient Spray", "Engraved Cap Collar"]
    },
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000&auto=format&fit=crop"
    ],
    featured: true,
    badge: "Bestseller"
  },
  {
    id: "jx-n015",
    modelCode: "JX-N015",
    name: "Brilliant",
    tagline: "Geometric Faceted Prism Silhouette",
    category: "Minimal",
    style: "Architectural Contemporary",
    capacities: ["50ml", "100ml"],
    defaultCapacity: "100ml",
    glassColor: "Deep Azure",
    availableColors: ["Deep Azure", "Emerald Jade", "Frosted Smoke", "Crystal Clear"],
    material: "High-Clarity Optical Glass",
    finish: "Diamond Cut Geometric Facets",
    capType: "Anodized Matte Black Cylinder",
    sprayType: "Precision Crimped Spray Engine",
    moq: 50,
    basePrice: 520,
    tiers: [
      { min: 50, max: 99, price: 520 },
      { min: 100, max: 249, price: 485 },
      { min: 250, max: 499, price: 450 },
      { min: 500, max: 99999, price: 410 }
    ],
    customizable: true,
    description: "Features precision-cut geometric facets that catch light at every angle. Paired with a minimalist matte black cylindrical closure, Brilliant embodies bold modern perfumery.",
    specs: {
      neckFinish: "FEA 15",
      height: "135 mm",
      width: "52 mm",
      weight: "310 g",
      overflowCapacity: "106 ml",
      customOptions: ["Frosted Sandblasting", "Laser Logo Engraving", "Metallic Base Electroplating"]
    },
    images: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop"
    ],
    featured: true,
    badge: "Editorial Pick"
  },
  {
    id: "jx-n013",
    modelCode: "JX-N013",
    name: "Radiant",
    tagline: "Monolithic Form with Pyramidal Relief Base",
    category: "Luxe",
    style: "Ultra Luxury",
    capacities: ["100ml"],
    defaultCapacity: "100ml",
    glassColor: "Obsidian Amber Gold",
    availableColors: ["Obsidian Amber Gold", "Crystal Clear", "Sunlit Topaz"],
    material: "Heavy Weight Monolithic Glass",
    finish: "Studded Diamond Base Texture",
    capType: "Square Sculpted Crown Cap",
    sprayType: "Ultra-Fine Atomizing Pump",
    moq: 50,
    basePrice: 560,
    tiers: [
      { min: 50, max: 99, price: 560 },
      { min: 100, max: 249, price: 520 },
      { min: 250, max: 499, price: 480 },
      { min: 500, max: 99999, price: 440 }
    ],
    customizable: true,
    description: "A commanding square monolith with heavy glass distribution and a intricate diamond studded lower relief. Features gold metallic hot-stamped branding zones.",
    specs: {
      neckFinish: "FEA 15",
      height: "140 mm",
      width: "60 mm",
      weight: "420 g",
      overflowCapacity: "108 ml",
      customOptions: ["Gold Leaf Stamping", "Custom Leather Label Collar", "UV Color Spray"]
    },
    images: [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000&auto=format&fit=crop"
    ],
    featured: true,
    badge: "Iconic Form"
  },
  {
    id: "jx-n003",
    modelCode: "JX-N003",
    name: "Dreamer",
    tagline: "Regal Curved Form with Filigree Gold Collar",
    category: "Classic",
    style: "Heritage Luxury",
    capacities: ["50ml", "100ml"],
    defaultCapacity: "100ml",
    glassColor: "Royal Sapphire",
    availableColors: ["Royal Sapphire", "Forest Emerald", "Crimson Ruby"],
    material: "High Density Flint Glass",
    finish: "Polished Curved Facets",
    capType: "Ornamental Gold Filigree Dome",
    sprayType: "Gold Anodized Atomizer",
    moq: 50,
    basePrice: 490,
    tiers: [
      { min: 50, max: 99, price: 490 },
      { min: 100, max: 249, price: 455 },
      { min: 250, max: 499, price: 420 },
      { min: 500, max: 99999, price: 385 }
    ],
    customizable: true,
    description: "Inspired by classical perfumery heritage, Dreamer features swooping curved shoulders highlighted by a baroque filigree gold collar and heavy weighted base.",
    specs: {
      neckFinish: "FEA 15",
      height: "132 mm",
      width: "55 mm",
      weight: "340 g",
      overflowCapacity: "105 ml",
      customOptions: ["Custom Metallic Plating", "Engraved Crest Logo", "Frosted Finish"]
    },
    images: [
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop"
    ],
    featured: false,
    badge: "Heritage"
  },
  {
    id: "jx-n012",
    modelCode: "JX-N012",
    name: "Temptation",
    tagline: "Geometric Asymmetric Prism & Gold Metal Shield",
    category: "Contemporary",
    style: "Avant-Garde Architectural",
    capacities: ["100ml"],
    defaultCapacity: "100ml",
    glassColor: "Midnight Sapphire & Rose Tint",
    availableColors: ["Midnight Sapphire & Rose Tint", "Frosted Quartz", "Ice Blue"],
    material: "Optical Grade Crystal Glass",
    finish: "Asymmetric Diagonal Cut",
    capType: "Sculpted Rose Gold Prism Cap",
    sprayType: "Silver Anodized FEA 15 Spray",
    moq: 50,
    basePrice: 540,
    tiers: [
      { min: 50, max: 99, price: 540 },
      { min: 100, max: 249, price: 500 },
      { min: 250, max: 499, price: 465 },
      { min: 500, max: 99999, price: 425 }
    ],
    customizable: true,
    description: "Temptation combines sharp diagonal glass cuts with an inlaid metallic black shield panel. A true statement bottle built for high-impact unisex fragrances.",
    specs: {
      neckFinish: "FEA 15",
      height: "138 mm",
      width: "58 mm",
      weight: "380 g",
      overflowCapacity: "104 ml",
      customOptions: ["Laser Etched Metal Plaque", "Custom Tinting", "Magnetic Cap Closure"]
    },
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000&auto=format&fit=crop"
    ],
    featured: true,
    badge: "New Release"
  },
  {
    id: "jx-n021",
    modelCode: "JX-N021",
    name: "Secret Arabian",
    tagline: "Disc Silhouette with Arabic Calligraphy Shield",
    category: "Luxe",
    style: "Middle Eastern Luxury",
    capacities: ["100ml"],
    defaultCapacity: "100ml",
    glassColor: "Deep Plum & Gold Foil",
    availableColors: ["Deep Plum & Gold Foil", "Royal Cobalt Blue", "Amber Glow"],
    material: "Heavy Monolithic Disc Glass",
    finish: "Polished Circular Disc with Gold Inlay",
    capType: "Octagonal Gold Pillar Cap",
    sprayType: "Heavy Duty Metallic Pump",
    moq: 50,
    basePrice: 650,
    tiers: [
      { min: 50, max: 99, price: 650 },
      { min: 100, max: 249, price: 600 },
      { min: 250, max: 499, price: 550 },
      { min: 500, max: 99999, price: 490 }
    ],
    customizable: true,
    description: "A tribute to Oriental and Oud perfumery. Features a bold circular disc glass form with metallic gold hot-stamped oriental artwork and heavy gold octagonal cap.",
    specs: {
      neckFinish: "FEA 15",
      height: "145 mm",
      width: "68 mm",
      weight: "440 g",
      overflowCapacity: "109 ml",
      customOptions: ["Custom Calligraphy Foil", "Internal Dip Tube Tint", "Magnetic Heavy Base"]
    },
    images: [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1000&auto=format&fit=crop"
    ],
    featured: true,
    badge: "Oud Luxury"
  }
];

const seedQuotes = [
  {
    quoteId: "QT-2026-8801",
    clientName: "Elena Rostova",
    company: "Maison de L’Aura Perfumes",
    email: "elena@lauraperfumes.com",
    phone: "+33 6 45 89 12 00",
    productName: "Angel Wings JX-N005",
    quantity: 500,
    capacity: "50ml",
    customization: "24K Gold Foil Logo + Amber Coating",
    location: "Paris, France",
    message: "Targeting launch for Paris Fashion Week.",
    status: "Reviewing",
    estimatedValue: "₹1,95,000"
  },
  {
    quoteId: "QT-2026-8802",
    clientName: "Marcus Vance",
    company: "Vance & Co Botanicals",
    email: "m.vance@vancebotanicals.co.uk",
    phone: "+44 7700 900077",
    productName: "Brilliant JX-N015",
    quantity: 250,
    capacity: "100ml",
    customization: "Matte Obsidian Black + Laser Engraved Logo",
    location: "London, UK",
    message: "Need sample bottles sent to London studio.",
    status: "Quoted",
    estimatedValue: "₹1,12,500"
  }
];

const seedData = async () => {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      await Product.insertMany(seedProducts);
      console.log('[Seed]: Products initialized successfully.');
    }

    const quoteCount = await Quote.countDocuments();
    if (quoteCount === 0) {
      await Quote.insertMany(seedQuotes);
      console.log('[Seed]: Quotes pipeline initialized successfully.');
    }

    const userCount = await User.countDocuments();
    if (userCount === 0) {
      const adminUser = new User({
        name: 'Master Admin',
        email: 'admin@jarsking.com',
        password: 'adminpassword123',
        role: 'admin'
      });
      await adminUser.save();
      console.log('[Seed]: Admin user initialized (admin@jarsking.com / adminpassword123).');
    }
  } catch (err) {
    console.error(`[Seed Error]: ${err.message}`);
  }
};

module.exports = seedData;
