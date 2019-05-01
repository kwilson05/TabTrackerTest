const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express();
app.use(morgan('combined'));
//allow bodyParser to easily parse json sent it
app.use(bodyParser.json());

//allow cross origin request from any client
app.use(cors());

require('./routes')(app)

sequelize.sync()
    .then(() => {
        app.listen(config.port);
        console.log(`Server started on port ${config.port}`)
    })
