import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import saga from '../sagas/saga';

import postsReducer from './post';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        posts: postsReducer
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(saga);

export default store;