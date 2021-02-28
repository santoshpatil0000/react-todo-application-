import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props
        return (
            <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
            {title}
            <div className='todo-icons'>
            <span className='mx-2 text-success' onClick={handleEdit}>
            <i className="fas fa-pencil-alt"/>
            </span>
            <span className='mx-2 text-danger' onClick={handleDelete}>
            <i className="fas fa-trash-alt"/>
            </span>
            </div>
            </li>
        )
    }
}

export default TodoItem
