import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { postsActions } from '../store/post';

const SAMPLE_NAMES = [
    'Alishba Fenton',
    'Alessandro Hogg',
    'Haniya Robinson',
    'Tolga Cabrera',
    'Luci Hogan',
    'Ayomide Mckenzie',
    'Gracie-May Mullins',
    'Alayna Ramos',
    'Lucy Kearney',
    'Phillip Hardy'
];

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
            name: SAMPLE_NAMES[Math.floor(Math.random() * 9)],
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