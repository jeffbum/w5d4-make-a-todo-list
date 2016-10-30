import React, { Component } from 'react'
import Post from './Post'

const Posts = (props) => { //const is an immutable object. cannot retroactively modfy, will always render the changes.  Post is a function.
    const PostItems = props.data.map((post, i) => {
        return <Post post={post} key={i} />
    })

    return <div>
        <h1>Blog Posts</h1>
        {PostItems}
    </div>
}

export default Posts
