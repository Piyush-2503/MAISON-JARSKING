const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const seedData = require('./seed/seedData');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database & Seed Initial Jarsking Data
connectDB().then(() => {
  seedData();
});

// API Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/quotes', require('./routes/quoteRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Maison Jarsking Packaging MERN Server', timestamp: new Date() });
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[Express Backend Running]: http://localhost:${PORT}`);
});
