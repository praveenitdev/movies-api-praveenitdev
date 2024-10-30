const express = require('express');
const dotenv = require('dotenv');
const moviesRoutes = require('./routes/movies');
dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/movies', moviesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
