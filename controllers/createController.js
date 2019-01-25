const Cube = require('../models/cubeModel');

function validation(data) {
    let name = data.name;
    let description = data.description;
    let image = data.image;
    console.log(description.length);
    if (name.length < 3) {
        return 'Name must be at least 3 symbols!';
    } else if (description.length < 20 || description.length > 300) {
        return 'Description must be between 20 and 300 symbols!';
    } else if (!image.startsWith('https://')) {
        return 'Image URL must start with https://!';
    } else if (!image.endsWith('.jpg') && !image.endsWith('.png')) {
        return 'Image URL must end with .jpg or .png!';
    } else {
        return 'success';
    }
}

module.exports = {
    createGet: (req, res) => {
        res.render('create.hbs')
    },
    createPost: async (req, res) => {
        if (validation(req.body) === 'success') {
            let cube = new Cube({
                Name: req.body.name,
                Description: req.body.description,
                ImageURL: req.body.image,
                Difficulty: req.body.difficulty
            });
            await cube.save();
            res.redirect('/');
        } else {
            res.locals.globalError = validation(req.body);
            res.render('create.hbs');
        }
    }
}