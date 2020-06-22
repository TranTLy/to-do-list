import React from 'react';


const TodoItem = ({ id, name, isChecked, toggleCheck, deleteItem }) => {
    const handleToggleCheck = (e) => {
        e.preventDefault()
        toggleCheck(id)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        deleteItem(id)
    }

    return ( 
        <div className="to-do-item">
            <div className="to-do-item__left">
                <span className={`lnr lnr-checkmark-circle to-do-item__check ${isChecked? 'checked': ''}`}
                onClick= {handleToggleCheck}
                />
            </div>
            <span className="to-do-item__name">{name}</span>
            <span className="lnr lnr-trash"
                onClick={handleDelete}
            />
        </div>
     );
}
 
export default TodoItem;