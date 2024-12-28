const asyncHandler = require('express-async-handler');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Private
const getProjects = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Projects retrieved successfully!" });
});

// @desc    Create New Project
// @route   POST /api/projects
// @access  Private

// This function will be used to create a new project. It will check if 
// the request body contains the project information. 
// If not, it will return a 400 status code with an error message. 
// If the request body contains the project information, it will return a 200 status code with a success message.
// New Projects contain a title, text description of project etc. TBD in the future.
const createProject = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please provide project information"); 
    }

    res.status(200).json({ message: "Project created successfully!" });
});

// @desc    Update Project
// @route   PUT /api/projects/:id
// @access  Private
const updateProject = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Project ${req.params.id} Updated Successfully!` });
});

// @desc    Delete Project
// @route   DELETE /api/projects/:id
// @access  Private
const deleteProject = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Project ${req.params.id} Deleted Successfully!`  });
});


module.exports = { 
    getProjects,
    createProject,
    updateProject,
    deleteProject
};