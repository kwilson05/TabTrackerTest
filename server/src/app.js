const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


const app = express();
app.use(morgan('combined'));
//allow bodyParser to easily parse json sent it
app.use(bodyParser.json());

//allow cross origin request from any client
app.use(cors());

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world'
    });
});
app.listen(process.env.PORT || 8081);
