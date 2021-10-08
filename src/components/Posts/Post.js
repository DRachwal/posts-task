import PropTypes from 'prop-types';

const Post = ({ title, body }) => {
    return (
        <div className='col-lg-12'>
            <div className='card mt-4'>
                <h5 className='card-header'>{title}</h5>
                <div className='card-body'>
                    <p className='card-text'>{body}</p>
                    <a href='#' className='btn btn-primary'>Pokaż komentarze</a>
                </div>
            </div>
        </div>
    );
};

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
};

export default Post;