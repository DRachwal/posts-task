import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { postsActions } from '../../store/post';

import PostComment from './PostComment';
import AddPostComment from './AddPostComment';

const PostComments = ({ postId, fetchComments, comments }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchComments) { // Fetch post comments onlu when fetchComments is true
            dispatch({ type: 'FETCH_POST_COMMENTS', payload: postId }); // Dispatch action to fetch post comments
            dispatch(postsActions.disableFetchComments(postId)); // Disable fetching comments for current post
        }
    }, [dispatch]);

    return (<ul className="list-group list-group-flush mt-4">
        {comments.map(comment => <PostComment key={comment.id} name={comment.name} body={comment.body} />)}
        <li className="list-group-item">
            <AddPostComment postId={postId} />
        </li>
    </ul>);
};

PostComments.propTypes = {
    postId: PropTypes.number,
    fetchComments: PropTypes.bool,
    comments: PropTypes.array
};

export default PostComments;