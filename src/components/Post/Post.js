import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { postsActions } from '../../store/post';

import PostComments from './PostComments';

import styles from './Post.module.css';

const Post = ({ id, title, body, showComments, fetchComments, favourite, comments, name }) => {
    const dispatch = useDispatch();

    const toggleCommentsHandler = () => {
        dispatch(postsActions.toggleComments(id));
    };

    const toggleFavourite = () => {
        dispatch(postsActions.toggleFavourite(id));
    };

    const buttonText = `${showComments ? 'Ukryj' : 'Pokaż'} Komentarze`;
    const favouriteIconStyle = `${styles.favourite} ${favourite && 'text-primary'} float-right`;

    return (
        <div className='col-lg-12'>
            <div className='card mb-4'>
                <h4 className='card-header d-flex justify-content-between align-items-center'>
                    {title} 
                    <span className={favouriteIconStyle} onClick={toggleFavourite}>&#9829;</span></h4>
                <div className='card-body'>
                    <p className='card-text'>{body}</p>
                    <p className='card-text'><small className='text-muted'>{name}</small></p>
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
    comments: PropTypes.array,
    favourite: PropTypes.bool,
    name: PropTypes.string
};

export default Post;