import PropTypes from 'prop-types';

const PostComment = ({name, body}) => {
    return (
        <li className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
                <h6>{name}</h6>
            </div>
            <p>{body}</p>
        </li>
    );
};

PostComment.propTypes = {
    name: PropTypes.string,
    body: PropTypes.string
};

export default PostComment;