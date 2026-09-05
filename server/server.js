const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve(__dirname, './.env') });

const connectDB = require('./config/db');
const seedData = require('./seed/seedData');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// CORS configuration driven by Environment Variables
const allowedOrigins = process.env.CLIENT_URL 
  ? process.env.CLIENT_URL.split(',') 
  : ['http://localhost:5173', 'http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS configuration'));
    }
  },
  credentials: true
}));

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
  res.json({ 
    status: 'ok', 
    service: 'Maison Jarsking Packaging MERN Server',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date() 
  });
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[Express Backend Running]: http://localhost:${PORT} (${process.env.NODE_ENV || 'development'} mode)`);
});
