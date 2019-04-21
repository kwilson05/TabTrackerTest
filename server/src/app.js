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

app.post('/register', (req, res) => {
    res.send({
        message: `${req.body.email}! Your user was registered have fun`
    });
});
app.listen(process.env.PORT || 8081);
