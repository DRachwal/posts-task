import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import PostComment from './PostComment';

const PostComments = ({ postId }) => {
    const dispatch = useDispatch();
    const postComments = useSelector(state => state.posts.postComments);

    useEffect(() => {
        dispatch({ type: 'FETCH_POST_COMMENTS', payload: postId});
    }, [dispatch]);

    return (<ul className="list-group list-group-flush mt-4">
        {postComments.map(comment => <PostComment key={comment.id} name={comment.name} body={comment.body} />)}
    </ul>);
};

PostComments.propTypes = {
    postId: PropTypes.number
};

export default PostComments;