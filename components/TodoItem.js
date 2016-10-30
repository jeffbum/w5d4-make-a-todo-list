import React, { Component } from 'react' //what is {Component} doing?

const TodoItem = (props) => {
    return <li className="list-group-item text-center" style={{color: 'red'}}>{props.description}</li>
}

export default TodoItem
