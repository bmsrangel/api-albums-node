const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

const server = require('http').Server(app);

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@api-albums-08jou.mongodb.net/albums?retryWrites=true', {
	useNewUrlParser: true,
	useFindAndModify: false
});

requireDir('./src/models');

app.use('/api', require('./src/routes'));

server.listen(process.env.PORT || 3001);
