import { Add } from '@material-ui/icons';
import React, { useState } from 'react'
import './CreateArea.css'

const CreateArea = ({ onAdd }) => {

    const [ note, setNote ] = useState({
        title: "",
        content: ""
    }) 

    const [ expand, setExpand ] = useState(false);

    const handleChange = e =>{
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    const handleSubmit = e =>{
        e.preventDefault();
        onAdd(note);
        setNote({
            title: "",
            content: ""
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                {expand && 
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={note.title}
                        onChange={e=>handleChange(e)}
                    />
                }
                <p>
                    <textarea 
                        name="content" 
                        onClick={()=>setExpand(true)}
                        placeholder="Write a note..." 
                        value={note.content} 
                        onChange={e=>handleChange(e)}
                        rows={expand? 3: 1}
                    ></textarea>
                </p>
                <button type="submit"><Add/></button>
            </form>
        </div>
    )
}

export default CreateArea