import React from "react";

const SinglePost = (props) => {
    const id = parseInt(props.match.params.id)
    const post = props.posts.find((post) => post.id === id)

    return(
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={(event)=>{props.edit(post)}}>Edit</button>
            <button onClick={(event)=>{props.delete(post)}}>Delete</button>
        </div>
    )
}

export default SinglePost