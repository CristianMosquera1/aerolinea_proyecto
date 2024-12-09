const express = require("express");
const {
  getAllTripulacion,
  createTripulacion,
} = require("../../controllers/tripulacionController");

const router = express.Router();

router.get("/", getAllTripulacion);
router.post("/", createTripulacion);

module.exports = router;
