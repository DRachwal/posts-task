import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postsActions } from '../../store/post';

import Title from '../Title';
import Post from './Post';
import Pagination from '../Pagination';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    useEffect(() => {
        dispatch({ type: 'FETCH_POSTS' });
    }, [dispatch]);

    const changePageNumber = pageNumber => {
        dispatch(postsActions.setCurrentPageNo(pageNumber));
    };

    // Pagination
    const lastPostId = posts.currentPageNo * posts.pageRange;
    const firstPostId = lastPostId - posts.pageRange;
    const paginatedPosts = posts.posts.slice(firstPostId, lastPostId);
    const numberOfPages = Math.ceil(posts.posts.length / posts.pageRange);
    
    return (
        <section>
            <Title title="Posty" />
            <div className="row">
                <Pagination 
                    numberOfPages={numberOfPages}
                    onChangePageNumber={changePageNumber} />
                {paginatedPosts.map((post) => (
                    <Post
                        key={post.id}
                        {...post} />
                ))}
            </div>
        </section>
    );
};

export default Posts;