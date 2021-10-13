import PropTypes from 'prop-types';

const Input = ({input, label, error}) => {
    const wrapperClassName = `mb-3 ${input.type === 'checkbox' ? 'form-check' : ''}`;
    const labelClassName = input.type === 'checkbox' ? 'form-check-label': '';
    const inputClassName = `${input.type === 'checkbox' ? 'form-check-input' :'form-control'} ${error && 'is-invalid'}`;

    return (
        <div className={wrapperClassName}>
            {label && <label className={labelClassName} htmlFor={input.id}>{label}</label>}
            <input className={inputClassName} {...input} />
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