import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

const Filter = ({ filterBy, filterDataHandler }) => {
    const [inputValues, setInputValues] = useState(null);

    useEffect(() => {
        const initialInputValues = {};
        filterBy.forEach(filter => initialInputValues[filter.id] = filter.type === 'checkbox' ? false : '');

        setInputValues(initialInputValues);
    }, []);

    useEffect(() => {
        inputValues && filterDataHandler(inputValues);
    }, [inputValues]);

    const changeHandler = e => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setInputValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        inputValues && <div className='card mb-4'>
            <h5 className='card-header'>Filtrowanie</h5>
            <div className='card-body'>
                <div className='row'>
                    {filterBy.map(filter => <div key={filter.id} className='col-md-4'>
                        <Input
                            label={filter.type === 'checkbox' ? filter.label : null}
                            input={{
                                type: filter.type,
                                name: filter.id,
                                id: filter.name,
                                placeholder: filter.label,
                                value: inputValues[filter.id],
                                onChange: changeHandler
                            }} />
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

Filter.propTypes = {
    filterBy: PropTypes.array,
    filterDataHandler: PropTypes.func
};

export default Filter;