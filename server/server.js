const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
// this is for deploying on heroku
const port = process.env.PORT || 50001;
var app = express();

app.use(express.static(publicPath));

app.listen(port, () => { 
    console.log(`server starts at port ${port}`)
});