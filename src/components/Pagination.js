import PropTypes from 'prop-types';

const Pagination = ({ numberOfPages, onChangePageNumber }) => {
    let pages = [];

    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
    }

    return (
        <nav>
            <ul className='pagination justify-content-center'>
                {pages.map(page => <li key={page} className='page-item'><button className='page-link' onClick={() => onChangePageNumber(page)}>{page}</button></li>)}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    numberOfPages: PropTypes.number,
    onChangePageNumber: PropTypes.func
};

export default Pagination;