const express= require('express');
const bodyParser= require('body-parser');
const app= express();
const port= process.env.PORT || 3000;
app.use('/assets', express.static(__dirname+'/public'));
app.use('/', (req, res, next)=>{
    console.log('Request Url : ' +req.url);
    next();
});
app.get('/', (req, res) => {
    res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet"></head><body><h1>Hello World!</h1></body></html>');
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

// ejs
app.set('view engine', 'ejs');
app.get('/ejs', (req, res) => {
    res.render('index');
});
app.get('/personEjs/:id', (req, res) => {
    res.render('person',{ID: req.params.id});
})


//querystring
app.get('/personQstr/:id', (req, res) => {
    res.render('person',{ID: req.params.id, Qstr: req.query.qstr});
})

// body Parser
app.get('/parser', (req, res) => {
    res.render('indexParser');
});
const urlencoded = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

app.post('/person', urlencoded,(req, res) => {
    res.send('Thank You');
    console.log(req.body.firstname + ' ' + req.body.lastname);
});

app.post('/personJson', jsonParser,(req, res) => {
    res.send('Thank You for the json data');
    console.log(req.body.firstname + ' ' + req.body.lastname);
})


app.listen(port);
