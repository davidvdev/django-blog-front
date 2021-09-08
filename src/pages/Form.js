import React, { useState } from "react";

const Form = ({ initialPost, handleSubmit, buttonLabel, history}) => {

    const [formData, setFormData] = useState(initialPost)

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        history.push("/")
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={handleSubmission}>
            <label for="title" value="title" style={{textAlign: "left"}}>Title</label>
            <input 
                type="text"
                onChange={handleChange}
                value={formData.title}
                name="title"
            />
            <label for="body" value="body" style={{textAlign: "left"}}>Body</label>
            <input 
                type="text"
                onChange={handleChange}
                value={formData.body}
                name="body"
            />
            <input type="submit" value={buttonLabel}/>
        </form>
    )
}

export default Form