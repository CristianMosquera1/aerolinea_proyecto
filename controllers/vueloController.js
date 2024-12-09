const Vuelo = require('../models/Vuelo');

exports.getAllVuelos = async (req, res) => {
    try {
        const vuelos = await Vuelo.find();
        res.json(vuelos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createVuelo = async (req, res) => {
    try {
        const nuevoVuelo = new Vuelo(req.body);
        const vueloGuardado = await nuevoVuelo.save();
        res.json(vueloGuardado);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
