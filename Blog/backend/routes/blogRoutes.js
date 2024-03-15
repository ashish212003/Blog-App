const express=require('express')
const { getAllBlogsController, createBlogController, deleteBlogController, updateBlogController, getBlogByIdController, userBlogControlller } = require('../controllers/blogControllers')

//router Object
const router=express.Router()

///routes
//GET || ALL BLOGS
router.get('/all-blog',getAllBlogsController)

// POST|| create blog
router.post('/create-blog',createBlogController)

//PUT || update blog
router.put('/update-blog/:id',updateBlogController)

// GET || Single BLog Details
router.get('/get-blog/:id',getBlogByIdController)

// DELETE || delete blog
router.delete('/delete-blog/:id',deleteBlogController)

//GET || user blog
router.get("/user-blog/:id", userBlogControlller);
module.exports=router

