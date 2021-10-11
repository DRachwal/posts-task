import PropTypes from 'prop-types';

const Input = ({input, label, error}) => {
    return (
        <div className='mb-3'>
            <label htmlFor={input.id}>{label}</label>
            <input className={`form-control ${error && 'is-invalid'}`} {...input} />
            {error && <div className='invalid-feedback'>{error}</div>}
        </div>
    );
};

Input.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
};

export default Input;