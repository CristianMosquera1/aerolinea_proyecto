const express = require('express');
const { getAllVuelos, createVuelo } = require('../controllers/vueloController');

const router = express.Router();

router.get('/', getAllVuelos);
router.post('/', createVuelo);

module.exports = router;
