const asyncHandler = require('express-async-handler');

const Project = require('../models/projectModel');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Private
const getProjects = asyncHandler(async (req, res) => {
    // This function will be used to retrieve all projects from the database.
    const projects = await Project.find();

    res.status(200).json(projects);
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
    if(!req.body.title || !req.body.description) {
        res.status(400)
        throw new Error("Please provide project information"); 
    }

    const project = await Project.create({
        title: req.body.title,
        description: req.body.description,
        technologies: req.body.technologies,
        github: req.body.github,
        demo: req.body.demo,
        image: req.body.image
    });

    res.status(200).json(project);
});

// @desc    Update Project
// @route   PUT /api/projects/:id
// @access  Private
const updateProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if(!project) {
        res.status(404)
        throw new Error("Project not found");
    }

    project.title = req.body.title || project.title;
    project.description = req.body.description || project.description;
    project.technologies = req.body.technologies || project.technologies;
    project.github = req.body.github || project.github;
    project.demo = req.body.demo || project.demo;
    project.image = req.body.image || project.image;

    const updatedProject = await project.save();

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