const Vuelo = require("../models/Vuelo");

const getAllVuelos = async (req, res) => {
  try {
    const vuelos = await Vuelo.find();
    res.status(200).json(vuelos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createVuelo = async (req, res) => {
  const { fecha, destino, origen, matricula } = req.body;

  try {
    const newVuelo = new Vuelo({
      fecha,
      destino,
      origen,
      matricula,
    });

    await newVuelo.save();
    res.status(201).json(newVuelo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllVuelos, createVuelo };
