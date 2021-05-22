import axios from 'axios';

// backEnd ROUTE
// const url = 'https://record-new.herokuapp.com/posts';
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

// 새로운 게시물 추가 api request ( 서버에 연결된 데이터베이스에 ) 
export const createPost = (newPost) => axios.post(url, newPost);

// 게시물 update
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

// 게시물 delete
export const deletePost = (id) => axios.delete(`${url}/${id}`);

// 게시물 즐겨찾기
export const starPost = (id, star) => axios.patch(`${url}/${id}/starPost`, star);