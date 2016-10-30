import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

// Your code goes here eventListeners event function add todo grab the value, then clear it, input push value into the todos array, then pass that array into renderview.
var todos = []

var todoItemInput = document.getElementById('inputSearch')
var inputBtn = document.getElementById('inputBtn')
todoItemInput.addEventListener('kepyress', handleEnterKey)
inputBtn.addEventListener('click', addTodoItem)

function handleEnterKey(event) {
    if(event.key === 'Enter') {
        addTodoItem()
    }
}
function addTodoItem() {
    var todoItemValue = todoItemInput.value
    todoItemInput.value = ''    

todos.push({
    description: todoItemValue
})

renderView(todos)
}


 function renderView(data) {
    ReactDOM.render( //for smaller apps, will only need one render point
        <Todos data={data} />, //not valid JS code. webpack understands it so it's okay. data is a prop, not an attribute. Can only mount one component. Top level, homepage view. will connect other pieces later.
         document.getElementById('toDo') // always have to render to an ID. use getElement or queryselector(#idName)
     )
}
