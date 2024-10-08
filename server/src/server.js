const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const ebookRoutes = require('./routes/ebookRoutes');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/ebooks', ebookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
