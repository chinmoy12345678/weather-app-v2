const express = require('express');
const path = require('path');   
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");



app.set('view engine', 'hbs');
app.set('views', path.join(__dirname , 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function(req,res){
    res.render("weather");
})

app.listen(port , ()=>{
    console.log(`Listening on port ${port}`);
})