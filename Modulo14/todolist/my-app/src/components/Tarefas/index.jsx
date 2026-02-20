import propTypes from 'prop-types';
import React from 'react';
import { FiDelete, FiEdit } from 'react-icons/fi';

import './Tarefas.css';

const Tarefas = ({
    tarefas,
    indexEdit,
    handleEdit,
    handleDelete,
    handleNewValue,
    editInputRefs,
}) => (
    <ul className="tarefas">
        {tarefas.map((tarefa, index) => (
            <li key={`${tarefa}-${index}`}>
                {index === indexEdit ? (
                    <input
                        className="editInput"
                        defaultValue={tarefa}
                        onKeyDown={(e) => handleNewValue(e, index)}
                        ref={(el) => {
                            if (editInputRefs) {
                                editInputRefs[index] = el;
                            }
                        }}
                        type="text"
                    />
                ) : (
                    <span>{tarefa}</span>
                )}
                <span className="icons">
                    <FiEdit
                        className="edit"
                        onClick={(e) => handleEdit(e, index)}
                    />
                    <FiDelete
                        className="delete"
                        onClick={(e) => handleDelete(e, index)}
                    />
                </span>
            </li>
        ))}
    </ul>
);

Tarefas.propTypes = {
    tarefas: propTypes.array.isRequired,
    indexEdit: propTypes.number.isRequired,
    handleEdit: propTypes.func.isRequired,
    handleDelete: propTypes.func.isRequired,
    handleNewValue: propTypes.func.isRequired,
    editInputRefs: propTypes.object.isRequired,
};

export default Tarefas;