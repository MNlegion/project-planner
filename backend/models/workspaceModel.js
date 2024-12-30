const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title']
    },
    description: {
        type: String,
        required: true
    },
    projects: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Project',
    },
    users: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
    }
}, {
    timestamps: true
});