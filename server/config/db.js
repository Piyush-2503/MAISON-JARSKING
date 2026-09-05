const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connStr = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/jarsking_db';
    const conn = await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 2000
    });
    console.log(`[MongoDB Connected]: ${conn.connection.host}`);
  } catch (error) {
    console.log(`[MongoDB Local Connect Warning]: ${error.message}`);
    console.log('[MongoDB Fallback]: Spinning up in-memory MongoDB server...');
    try {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();
      const conn = await mongoose.connect(uri);
      console.log(`[MongoDB In-Memory Connected]: ${conn.connection.host}`);
    } catch (fallbackErr) {
      console.error(`[MongoDB Connection Error]: ${fallbackErr.message}`);
    }
  }
};

module.exports = connectDB;
