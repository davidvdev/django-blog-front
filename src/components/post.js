import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    // style
    const postStyle = {
        textAlign: "left",
        margin: "1em 0"
    }
    return (
        <div style={postStyle}>
            <Link to={`/post/${post.id}`}>
                <h3>{post.title}</h3>
            </Link>
            <p>{post.body}</p>
        </div>
    )
}

export default Post