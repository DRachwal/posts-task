import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { postsActions } from '../../store/post';
import PostComments from './PostComments';

const Post = ({ id, title, body, showComments }) => {
    const dispatch = useDispatch();

    const showCommentsHandler = () => {
        dispatch(postsActions.toggleComments(id));
    };

    return (
        <div className='col-lg-12'>
            <div className='card mt-4'>
                <h4 className='card-header'>{title}</h4>
                <div className='card-body'>
                    <p className='card-text'>{body}</p>
                    <button onClick={showCommentsHandler} className='btn btn-primary'>Pokaż komentarze</button>
                    {showComments && <PostComments postId={id}/>}
                </div>
            </div>
        </div>
    );
};

Post.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    showComments: PropTypes.bool
};

export default Post;