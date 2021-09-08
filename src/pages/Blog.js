import React from "react";

import Post from "../components/post"

const Blog = (props) => {
    return props.posts.map((post) => <Post post={post} key={post.id}/>)
}

export default Blog