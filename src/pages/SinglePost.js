import React from "react";

const SinglePost = (props) => {
    const id = parseInt(props.match.params.id)
    const post = props.posts.find((post) => post.id === id)

    // style
    const postStyle ={
        textAlign: "left",
        margin: "1em 0"
    }
    const buttonStyle = {
        display: "flex",
        justifyContent: "space-evenly"
    }

    return(
        <div style={postStyle}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div style={buttonStyle}>
                <button onClick={(event)=>{props.edit(post)}}>Edit</button>
                <button onClick={(event)=>{props.delete(post)}}>Delete</button>
            </div>
        </div>
    )
}

export default SinglePost