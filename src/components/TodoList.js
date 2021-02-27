import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        return (
            <div>
                <h3>Hello todo list</h3>
                <TodoItem/>
                
            </div>
        )
    }
}

export default TodoList
