// routes/apiRoutes.js
const express = require('express');
const { getData, postData } = require('../controllers/apiController');

const router = express.Router();

// Define routes
router.get('/data', getData);
router.post('/data', postData);

module.exports = router;