import propTypes from 'prop-types';
import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import './Form.css';

const Form = ({ handleChange, handleSubmit, novaTarefa }) => (
    <form action="#" className="form" onSubmit={handleSubmit}>
        <input
            onChange={handleChange}
            type="text"
            value={novaTarefa}
        />
        <button type="submit"><FiPlusCircle/></button>
    </form>
);

export default Form;

Form.propTypes = {
    handleChange: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired,
    novaTarefa: propTypes.string.isRequired,
};