const asyncHandler = require('express-async-handler');

// get blogs by user
// @route    GET /api/blogs
const getBlogs = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'get blogs'})
});

// create blogs
// @route    POST /api/blogs
const createBlog = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error('Please enter text in the text field.');
    }
    res.status(200).json({message: 'create blog'})
});

// update blogs by user
// @route    PUT /api/blogs/:id
const updateBlog = asyncHandler(async(req, res) => {
    res.status(200).json({message: `update blog ${req.params.id}`})
});

// delete blogs by user
// @route    DELETE /api/blogs
const deleteBlog = asyncHandler(async(req, res) => {
    res.status(200).json({message: `delete blog ${req.params.id}`})
});

// exporting modules
module.exports = {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
}; 