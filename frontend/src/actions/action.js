import { FETCH_ALL, CREATE, UPDATE, DELETE, STAR } from '../constants/actionType';
import * as api from '../api/api';

// ACTION 생성
//게시물 소환
export const getPosts = () => async (dispatch) => {

    try {
        //데이터들을 가져와라
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });

    } catch (error) {

        console.log(error.message);
        console.log("getPosts구역 데이터 가져오기 실패!");
    }
}

// 게시물 생성
export const createPost = (post) => async (dispatch) => {
    try {
        // 데이터들을 보내겠다.
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(`createPost구역 데이터 가져오기 실패! >>${error.message}`);
    }
};

//게시물 업데이트
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(`updatePost구역 데이터 가져오기 실패! >>${error.message}`);
    }
}

//게시물 삭제
export const deletePost = (id) => async (dispatch) => {
    // console.log(id);
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
}

//게시물 즐겨찾기

export const starPost = (id, star) => async (dispatch) => {
    // console.log(`starPost 구역 action ***********`);
    const starPost = { star: star };
    // console.log(starPost);
    try {
        const { data } = await api.starPost(id, starPost);
        // console.log({ data });
        dispatch({ type: STAR, payload: data })
    } catch (error) {
        console.log(`starPost 데이터 가져오기 실패! >>${error.message}`);
    }
}
