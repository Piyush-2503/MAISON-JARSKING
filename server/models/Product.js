const mongoose = require('mongoose');

const TierSchema = new mongoose.Schema({
  min: { type: Number, required: true },
  max: { type: Number, required: true },
  price: { type: Number, required: true }
});

const ProductSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  modelCode: { type: String, required: true },
  name: { type: String, required: true },
  tagline: { type: String, required: true },
  category: { type: String, required: true, enum: ['Minimal', 'Sculptural', 'Classic', 'Luxe'] },
  style: { type: String, required: true },
  capacities: [{ type: String }],
  defaultCapacity: { type: String, default: '50ml' },
  glassColor: { type: String },
  availableColors: [{ type: String }],
  material: { type: String, default: 'Extra Flint Heavy Glass' },
  finish: { type: String },
  capType: { type: String },
  sprayType: { type: String },
  moq: { type: Number, default: 50 },
  basePrice: { type: Number, required: true },
  tiers: [TierSchema],
  customizable: { type: Boolean, default: true },
  description: { type: String },
  specs: {
    neckFinish: { type: String, default: 'FEA 15' },
    height: { type: String },
    width: { type: String },
    weight: { type: String },
    overflowCapacity: { type: String },
    customOptions: [{ type: String }]
  },
  images: [{ type: String }],
  featured: { type: Boolean, default: false },
  badge: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
