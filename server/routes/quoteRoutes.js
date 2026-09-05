const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

// POST /api/quotes — Submit a new B2B quotation request
router.post('/', async (req, res) => {
  try {
    const { clientName, company, email, phone, productName, quantity, capacity, customization, location, message } = req.body;
    
    const quoteId = `QT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const estimatedValue = `₹${((quantity || 50) * 450).toLocaleString()}`;

    const newQuote = new Quote({
      quoteId,
      clientName,
      company: company || 'Independent Brand',
      email,
      phone,
      productName: productName || 'Custom Bulk Request',
      quantity: quantity || 50,
      capacity: capacity || '50ml',
      customization: customization || 'Standard Specifications',
      location,
      message,
      status: 'New',
      estimatedValue
    });

    const savedQuote = await newQuote.save();
    res.status(201).json(savedQuote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /api/quotes — Retrieve all quotes (for Admin Pipeline)
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find({}).sort({ createdAt: -1 });
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PATCH /api/quotes/:id/status — Update status in pipeline
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const quote = await Quote.findOne({ quoteId: req.params.id }) || await Quote.findById(req.params.id);
    
    if (quote) {
      quote.status = status;
      const updatedQuote = await quote.save();
      res.json(updatedQuote);
    } else {
      res.status(404).json({ message: 'Quote request not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
