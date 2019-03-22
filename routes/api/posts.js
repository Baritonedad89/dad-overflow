const router = require("express").Router();
const postsController = require("../../controllers/postsController");
const commentsController = require("../../controllers/commentsController");

// Posts routes
//api/posts/
router
  .route("/")
  .get(postsController.findAll)
  .post(postsController.create);

 // api/posts/id
router.route("/:id")
  .get(postsController.findOne);

// Comments routes
// api/posts/id/comments
router
  .route("/:id/comments")
  .get(commentsController.getCommentsByPostId)
  .post(commentsController.createComment);


module.exports = router;
  