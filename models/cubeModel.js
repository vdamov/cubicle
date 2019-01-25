const mongoose = require('mongoose');

let cubeSchema = new mongoose.Schema({
    Name: {type: String, min: 3, max: 15},
    Description: {type: String, min: 20, max: 300},
    ImageURL: {
        type: String, validate: {
            validator: (url) => {
                return url.startsWith('https://') && (url.endsWith('.jpg') || url.endsWith('.png'))
            }
        }
    },
    Difficulty: {type: Number}

});

module.exports = mongoose.model('Cube', cubeSchema);