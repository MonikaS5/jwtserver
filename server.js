// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
const uri = process.env.DB_CONNECT;

mongoose.connect(uri, { useNewUrlParser: true, 
                                    useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
