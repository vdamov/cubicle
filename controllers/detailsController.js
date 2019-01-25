const Cube = require('../models/cubeModel');

module.exports = async (req, res) => {
    let cube = await Cube.findById(req.params.id);
    res.render('details.hbs', cube);
};