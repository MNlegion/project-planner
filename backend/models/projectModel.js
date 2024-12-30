const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title or project number']
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: [String],
    },
    github: {
        type: String,
    },
    // demo: {
    //     type: String,
    //     required: true
    // },
    // image: {
    //     type: String,
    //     required: true
    // }
}, {
    timestamps: true
});


module.exports = mongoose.model('Project', projectSchema);