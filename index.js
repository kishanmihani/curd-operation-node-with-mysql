const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

require('dotenv').config();

const app = express();
app.use(cors())
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/employees', todoRoutes);

// Error middleware
app.use(errorMiddleware);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});