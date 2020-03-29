const express = require('express');
const ongController = require('./controllers/ongController');
const incidentsController = require('./controllers/incidentController');
const sessionController = require('./controllers/sessionController');
const profileController = require('./controllers/profileController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/profile', profileController.list);

routes.get('/ongs', ongController.list);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentsController.list);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes;