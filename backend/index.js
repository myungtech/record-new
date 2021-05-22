
const express = require('express');// express라는 module을 사용하겠다.
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const postRoutes = require('./routes/router');
const connectDB = require('./config/database');
const app = express();

dotenv.config();

//mongoDB 연결
connectDB();



app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Router
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('RECORD PROJECT')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
