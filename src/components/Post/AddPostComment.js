import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { postsActions } from '../../store/post';

import Input from '../Input';

const INITIAL_INPUT_VALUES = {
    name: '',
    email: '',
    body: ''
};

const INITIAL_INPUT_ERRORS = {
    name: false,
    email: false,
    body: false
};

const AddPostComment = ({ postId }) => {
    const dispatch = useDispatch();

    const [inputValues, setInputValues] = useState(INITIAL_INPUT_VALUES);
    const [inputErrors, setInputErrors] = useState(INITIAL_INPUT_ERRORS);

    const changeHandler = e => {
        const { name, value } = e.target;

        setInputValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitHandler = e => {
        e.preventDefault();

        // Check inputs validity
        const regName = /^[\s\p{L}]/u;
        const regEmail = /^\S+@\S+$/;

        const errors = {
            name: !regName.test(inputValues.name) && 'Wprowadź prawidłowe imię',
            email: !regEmail.test(inputValues.email) && 'Wprowadź prawidłowy adres email',
            body: inputValues.body.trim().length === 0 && 'Pole nie może być puste'
        };

        if (errors.name || errors.email || errors.body) {
            setInputErrors(errors);
            return;
        } else {
            // Validation success
            const newComment = {
                postId,
                id: Date.now(),
                ...inputValues
            };

            dispatch(postsActions.addPostComment(newComment));
            setInputValues(INITIAL_INPUT_VALUES);
            setInputErrors(INITIAL_INPUT_ERRORS);
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <Input
                label='Imię'
                input={{
                    type: 'text',
                    name: 'name',
                    id: 'name',
                    value: inputValues.name,
                    onChange: changeHandler
                }}
                error={inputErrors.name} />
            <Input
                label='Email'
                input={{
                    type: 'email',
                    name: 'email',
                    id: 'email',
                    value: inputValues.email,
                    onChange: changeHandler
                }}
                error={inputErrors.email} />
            <div className='mb-3'>
                <label htmlFor='body' className='form-label'>Komentarz</label>
                <textarea 
                    className={`form-control ${inputErrors.body && 'is-invalid'}`}
                    name='body' 
                    id='body'
                    maxLength={100}
                    value={inputValues.body} 
                    onChange={changeHandler} />
                {inputErrors.body && <div className='invalid-feedback'>{inputErrors.body}</div>}
            </div>
            <button type='submit' className='btn btn-primary'>Dodaj komentarz</button>
        </form>
    );
};

AddPostComment.propTypes = {
    postId: PropTypes.number
};

export default AddPostComment;