const express= require('express');
const app= express();
const port= process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('<html lang="en"><body><h1>Hello World!</h1></body></html>');
});
app.get('/about', (req, res) => {
    res.json({
        firstname: "hello",
        lastname: "world",
    })
});

// get Params
app.get('/person/:id', (req, res) => {
    res.send(`<html lang="en"><body><h1>Person ${req.params.id}</h1></body></html>`);
})


app.listen(port);
