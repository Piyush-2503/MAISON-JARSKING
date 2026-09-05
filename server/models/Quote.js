const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  quoteId: { type: String, required: true, unique: true },
  clientName: { type: String, required: true },
  company: { type: String, default: 'Independent Brand' },
  email: { type: String, required: true },
  phone: { type: String },
  productName: { type: String, required: true },
  quantity: { type: Number, required: true, min: 50 },
  capacity: { type: String, default: '50ml' },
  customization: { type: String, default: 'Standard Specifications' },
  location: { type: String },
  message: { type: String },
  status: { 
    type: String, 
    enum: ['New', 'Reviewing', 'Quoted', 'Accepted', 'Rejected', 'Completed'],
    default: 'New'
  },
  estimatedValue: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Quote', QuoteSchema);
