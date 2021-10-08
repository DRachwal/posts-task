import { all } from 'redux-saga/effects';

import postSaga from './post';
import postCommentSaga from './post-comment';

export default function* rootSaga() {
    yield all([
        postSaga,
        postCommentSaga
    ]);
}