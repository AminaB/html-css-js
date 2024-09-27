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
})

app.listen(port);

