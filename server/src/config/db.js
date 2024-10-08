const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/your_database_name';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

module.exports = mongoose;
