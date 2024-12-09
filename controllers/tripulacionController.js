const Tripulacion = require('../models/Tripulacion');

exports.getAllTripulacion = async (req, res) => {
    try {
        const tripulacion = await Tripulacion.find().populate('id_vuelo');
        res.json(tripulacion);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createTripulacion = async (req, res) => {
    try {
        const nuevaTripulacion = new Tripulacion(req.body);
        const tripulacionGuardada = await nuevaTripulacion.save();
        res.json(tripulacionGuardada);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
