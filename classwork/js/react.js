//loading other libraries
import React from 'react'
import ReactDOM from 'react-dom'
import Posts from '../components/Posts'

window.renderView = function(data) {
    ReactDOM.render( //for smaller apps, will only need one render point
        <Posts data={data} />, //not valid JS code. webpack understands it so it's okay. data is a prop, not an attribute. Can only mount one component. Top level, homepage view. will connect other pieces later.
         document.getElementById('posts') // always have to render to an ID. use getElement or queryselector(#idName)
     )
}
renderView(posts)
