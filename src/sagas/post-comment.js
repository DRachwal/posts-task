import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { postsActions } from '../store/post';

const getPostCommentRequest = (id) => {
    console.log('getPostCommentRequest', id);
    return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
};

function* getPostCommentsRequestHandler(action) {
    try {
        const response = yield call(() => getPostCommentRequest(action.payload));
        const postComments = response.data;
        yield put(postsActions.setPostComments({ postId: action.payload, postComments }));
    } catch (error) {
        console.log(error);
    }
}

function* postCommentSaga() {
    yield takeLatest('FETCH_POST_COMMENTS', getPostCommentsRequestHandler);
}

export default postCommentSaga();