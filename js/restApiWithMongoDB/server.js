const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB= require('./config/db');
connectDB();

const app = express();
app.get('/', (req, res) => {
    res.json({message:'Hello World'});
});

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.json({ success: true, data: "welcome" });
});
const ideaRouter= require ('./routes/ideas');
app.use('/api/ideas', ideaRouter );
app.listen(port,()=>console.log(`Server started on port ${port}`));
