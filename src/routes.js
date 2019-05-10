const express = require('express');
const routes = express.Router();

const AlbumController = require('./controllers/AlbumController');

routes.get('/albums', AlbumController.index);
routes.post('/albums', AlbumController.store);

module.exports = routes;
