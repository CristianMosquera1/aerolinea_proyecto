const express = require("express");
const { getAllvuelos, createVuelo } = require("../controllers/vueloController");

const router = express.Router();

// Ruta para obtener todos los vuelos
router.get("/", getAllvuelos);

// Ruta para crear un nuevo vuelo
router.post("/", createvuelo);

module.exports = router;
