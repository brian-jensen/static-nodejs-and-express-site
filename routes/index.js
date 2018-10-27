const express = require('express');
const router = express.Router();
const data = require('../data.json'); 
const {projects} = data;
// Renders home route
router.get('/', (req, res) => {
  res.render('index', {projects});
});
// Renders about route
router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;