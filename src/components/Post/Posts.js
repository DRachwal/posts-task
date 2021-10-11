import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Title from '../Title';
import Post from './Post';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        dispatch({ type: 'FETCH_POSTS' });
    }, [dispatch]);

    return (
        <section>
            <Title title="Posty" />
            <div className="row">
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        {...post} />
                ))}
            </div>
        </section>
    );
};

export default Posts;
