import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { postsActions } from '../../store/post';

const AddPostComment = ({ postId }) => {
    const dispatch = useDispatch();

    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        body: ''
    });

    const changeHandler = e => {
        const { name, value } = e.target;

        setInputValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitHandler = e => {
        e.preventDefault();

        const newComment = {
            postId,
            id: Date.now(),
            ...inputValues
        };

        dispatch(postsActions.addPostComment(newComment));
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='mb-3'>
                <label htmlFor='name' className='form-label'>Imię</label>
                <input type='text' name='name' className='form-control' id='name' value={inputValues.name} onChange={changeHandler} />
            </div>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input type='email' name='email' className='form-control' id='email' value={inputValues.email} onChange={changeHandler} />
            </div>
            <div className='mb-3'>
                <label htmlFor='body' className='form-label'>Komentarz</label>
                <textarea className='form-control' name='body' id='body' value={inputValues.body} onChange={changeHandler} />
            </div>
            <button type='submit' className='btn btn-primary'>Dodaj komentarz</button>
        </form>
    );
};

AddPostComment.propTypes = {
    postId: PropTypes.number
};

export default AddPostComment;