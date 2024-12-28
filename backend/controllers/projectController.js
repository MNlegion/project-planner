
// @desc    Get all projects
// @route   GET /api/projects
// @access  Private
const getProjects = (req, res) => {
    res.status(200).json({ message: "Projects retrieved successfully!" });
};

// @desc    Create New Project
// @route   POST /api/projects
// @access  Private
const createProject = (req, res) => {
    res.status(200).json({ message: "Project created successfully!" });
};

// @desc    Update Project
// @route   PUT /api/projects/:id
// @access  Private
const updateProject = (req, res) => {
    res.status(200).json({ message: `Project ${req.params.id} Updated Successfully!` });
};

// @desc    Delete Project
// @route   DELETE /api/projects/:id
// @access  Private
const deleteProject = (req, res) => {
    res.status(200).json({ message: `Project ${req.params.id} Deleted Successfully!`  });
};


module.exports = { 
    getProjects,
    createProject,
    updateProject,
    deleteProject
};