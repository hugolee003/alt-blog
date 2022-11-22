// require modules
const express = require('express');
const router = express.Router();
const {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/userController')


router.route('/').get(getBlogs).post(createBlog);

router.route('/:id').delete(deleteBlog).put(updateBlog);

  
// export modules
module.exports = router;