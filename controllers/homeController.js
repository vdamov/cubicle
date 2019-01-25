const Cube = require('../models/cubeModel');

module.exports = {
    home: async (req, res) => {
        let cubes = await Cube.find({}, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
        res.render('index.hbs', {cube: cubes});
    },
    search: async (req, res) => {
        let name = new RegExp('.*' + req.body.search + '.*', 'i');
        let from = req.body.from;
        let to = req.body.to;

        let cubes;


            cubes = await Cube.find({
                Name: {$regex: name},
                Difficulty: {$gte: from, $lte: to}
            });


        res.render('index.hbs', {cube: cubes});
    }
};