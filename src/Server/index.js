const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(express.static('dist'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.listen(8080, function () {
    console.log('Example app listening on port 8080');
})

app.post('/api', (req,res) => {
    const val = req.body;
    console.log(val);
    res.send(val);
})
