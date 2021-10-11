import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { postsActions } from '../../store/post';
import PostComments from './PostComments';

const Post = ({ id, title, body, showComments, fetchComments, comments }) => {
    const dispatch = useDispatch();

    const toggleCommentsHandler = () => {
        dispatch(postsActions.toggleComments(id));
    };

    const buttonText = `${showComments ? 'Ukryj' : 'Pokaż'} Komentarze`;

    return (
        <div className='col-lg-12'>
            <div className='card mt-4'>
                <h4 className='card-header'>{title}</h4>
                <div className='card-body'>
                    <p className='card-text'>{body}</p>
                    <button onClick={toggleCommentsHandler} className='btn btn-primary'>{buttonText}</button>
                    {showComments && <PostComments postId={id} fetchComments={fetchComments} comments={comments} />}
                </div>
            </div>
        </div>
    );
};

Post.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    showComments: PropTypes.bool,
    fetchComments: PropTypes.bool,
    comments: PropTypes.array
};

export default Post;