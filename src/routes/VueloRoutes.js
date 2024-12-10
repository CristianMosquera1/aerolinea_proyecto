const express = require("express");
const { getAllVuelos, createvuelo } = require("../controllers/VueloController");

const router = express.Router();

// Ruta para obtener todos los vuelos
router.get("/", getAllVuelos);

// Ruta para crear un nuevo vuelo
router.post("/", createVuelo);

module.exports = router;
