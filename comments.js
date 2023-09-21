// Create web server
var express = require('express');
var router = express.Router();

// Require controller modules
var comment_controller = require('../controllers/commentController');
var post_controller = require('../controllers/postController');

// GET request for creating a Comment. NOTE This must come before route for id (i.e. display comment).
router.get('/comment/create', comment_controller.comment_create_get);

// POST request for creating Comment.
router.post('/comment/create', comment_controller.comment_create_post);

// GET request to delete Comment.
router.get('/comment/:id/delete', comment_controller.comment_delete_get);

// POST request to delete Comment.
router.post('/comment/:id/delete', comment_controller.comment_delete_post);

// GET request to update Comment.
router.get('/comment/:id/update', comment_controller.comment_update_get);

// POST request to update Comment.
router.post('/comment/:id/update', comment_controller.comment_update_post);

// GET request for one Comment.
router.get('/comment/:id', comment_controller.comment_detail);

// GET request for list of all Comments.
router.get('/comments', comment_controller.comment_list);

// GET request for list of all Comments for a Post.
router.get('/comments/:post_id', comment_controller.comment_list_post);

// GET request for list of all Comments for a User.
router.get('/comments/user/:user_id', comment_controller.comment_list_user);

module.exports = router;