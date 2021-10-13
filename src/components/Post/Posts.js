import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postsActions } from '../../store/post';

import Title from '../Title';
import Post from './Post';
import Pagination from '../Pagination';
import Filter from '../Filter';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    // Fetch posts
    useEffect(() => {
        dispatch({ type: 'FETCH_POSTS' });
    }, [dispatch]);

    // Change the number of the page in pagination
    const changePageNumber = pageNumber => {
        dispatch(postsActions.setCurrentPageNo(pageNumber));
    };

    // Handle filter data
    const filterDataHandler = (filters) => {
        dispatch(postsActions.setPostFilters(filters));
    };

    // Filter posts by multiple values
    const filterPosts = (posts, filters) => {
        const filterKeys = Object.keys(filters);
        const filtered = posts.filter(item => {
            return filterKeys.every(key => {
                if(key === 'favourite')
                    return !filters[key] || item[key] === filters[key];

                return item[key].toLowerCase().includes(filters[key].toLowerCase());
            });
        });

        return filtered;
    };

    // Get filtered posts
    const filteredPosts = filterPosts(posts.posts, posts.filters);

    // Pagination variables
    const lastPostId = posts.currentPageNo * posts.pageRange;
    const firstPostId = lastPostId - posts.pageRange;
    const paginatedPosts = filteredPosts.slice(firstPostId, lastPostId);
    const numberOfPages = Math.ceil(filteredPosts.length / posts.pageRange);

    // Filter variables
    const filterBy = [{
        id: 'title',
        type: 'text',
        label: 'Nazwa'
    }, {
        id: 'body',
        type: 'text',
        label: 'Komentarz'
    }
    ,
    {
        id: 'favourite',
        type: 'checkbox',
        label: 'Ulubione'
    }];

    return (
        <section>
            <Title title="Posty" />
            <Filter
                filterBy={filterBy}
                filterDataHandler={filterDataHandler} />
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