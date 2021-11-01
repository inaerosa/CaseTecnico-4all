const express = require('express');
const app = express();
const data = require('./data.json')

app.get('/', (req, res) => {
    res.json(data);
})

app.listen(3000, () => {
    console.log("Running on port 3000")
})