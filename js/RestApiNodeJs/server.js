const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.json({message:'Hello World'});
});

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.json({ success: true, data: ideas });
});
const ideaRouter= require ('./routes/ideas');
app.use('/api/ideas', ideaRouter );
app.listen(port,()=>console.log(`Server started on port ${port}`));
