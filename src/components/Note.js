import { Button } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import React from 'react'
import './Note.css'

const Note = ({ title, content, onDelete, id }) => {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <Button onClick={()=>onDelete(id)} > <Delete/> Delete</Button>
        </div>
    )
}

export default Note