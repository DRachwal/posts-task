import PropTypes from 'prop-types';

const Title = ({ title }) => {
    return <h1 className='text-center mt-4 mb-4'>{title}</h1>;
};

Title.propTypes = {
    title: PropTypes.string
};

export default Title;