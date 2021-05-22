const express = require('express');

const router = express.Router();

const { getPosts, createPosts, updatePost, deletePost, likePost, starPost } = require('../controllers/controller');

// http://localhost:5000/posts

// '/' 일때 데이터 가져옴
router.get('/', getPosts);

// '/' 일때 Resource 생성 (create)
router.post('/', createPosts);

// '/:id' 일때 자원을 일부만 update
router.patch('/:id', updatePost);

//delete 
router.delete('/:id', deletePost);

router.patch('/:id/starPost', starPost);

module.exports = router;