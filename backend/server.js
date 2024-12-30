const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;


// Connect to MongoDB 
connectDB();

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Error Handler Middleware
app.use(errorHandler);

// Routes
app.use('/api/projects', require('./routes/projectRoutes'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
