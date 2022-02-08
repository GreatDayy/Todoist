const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res) => {
    console.log('Im working');
    res.sendFile(__dirname + '/index.html')
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})