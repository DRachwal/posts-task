import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { postsActions } from '../store/post';

// This function returns get posts promise
const getPostsRequest = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
};

function* getPostsRequestHandler() {
    try {
        const response = yield call(getPostsRequest); // Yield get posts requests promise
        const posts = response.data;
        const newPosts = posts.map(post => ({ // add showComments boolean value & comments array
            ...post,
            showComments: false,
            fetchComments: true,
            favourite: false,
            comments: []
        }));

        yield put(postsActions.setPosts(newPosts)); // Yield posts actions to set received posts
    } catch (error) {
        console.log(error);
    }
}

function* postSaga() {
    yield takeLatest('FETCH_POSTS', getPostsRequestHandler);
}

export default postSaga();