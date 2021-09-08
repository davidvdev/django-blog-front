import React, {useState, useEffect} from "react";
import {Route, Switch, Link} from "react-router-dom"

import Blog from "./pages/Blog";
import Form from "./pages/Form";
import SinglePost from "./pages/SinglePost";

function App(props) {
  // globabl variables 
  const url = "https://django-blog-dv.herokuapp.com/blog/"
  const nullPost = {
    title: "",
    body: ""
  }

  // states
  const [posts, setPosts] = useState([])
  const [targetPost, setTargetPost] = useState(nullPost)


  // functions
  const getPosts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPosts(data)
  }

  const addPost = async (post) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
    getPosts()
  }

  const selectPost = (post) => {
    setTargetPost(post)
    props.history.push("/edit")
  }

  const updatePost = async (post) => {
    const response = await fetch(url + post.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
    getPosts()
  }

  const deletePost = async (post) => {
    const response = await fetch(url + post.id + "/", {
      method: "delete"
    })
    getPosts()
    props.history.push("/")
  }

  // use effects
  useEffect(() => {getPosts()}, [])

  return (
    <div className="App">
      <Link to="/">
        <h1>My Blog</h1>
      </Link>
      <Link to="/newpost">
        <button>Create New Blog</button>
      </Link>
      <Switch>
        <Route 
          exact path="/"
          render={(routerprops) => 
            <Blog 
              {...routerprops}
              posts={posts}
            />
          } 
        />
        <Route 
          path="/post/:id"
          render={(routerprops) => 
            <SinglePost 
              {...routerprops}
              posts={posts}
              edit={selectPost}
              delete={deletePost}
            />
          } 
        />
        <Route 
          path="/newpost"
          render={(routerprops) => 
            <Form 
              {...routerprops}
              initialPost={nullPost}
              handleSubmit={addPost}
              buttonLabel="Create Blog"
            />
          } 
        />
        <Route 
          path="/edit"
          render={(routerprops) => 
            <Form 
              {...routerprops}
              initialPost={targetPost}
              handleSubmit={updatePost}
              buttonLabel="Update Blog"
            />
          } 
        />
      </Switch>
    </div>
  );
}

export default App;
