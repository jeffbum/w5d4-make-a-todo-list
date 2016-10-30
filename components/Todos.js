import React, { Component } from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => { //const is an immutable object. cannot retroactively modfy, will always render the changes.  Post is a function.
    const TodoItems = props.data.map((todo, i) => {
        return <TodoItem description={todo.description} key={i} />
    })

    return  <ul className="list-group">
        <h1>{TodoItems}</h1>
    </ul>

}

export default Todos
