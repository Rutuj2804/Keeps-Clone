import React, { useState } from 'react'
import Header from './components/Header';
import './App.css'
import CreateArea from './components/CreateArea';
import Note from './components/Note';

const App = () => {

    const [ notes, setNotes ] = useState([]);

    const addNote = (newNote) =>{
        setNotes([ ...notes, newNote ]);
    }

    const handleDelete = (id) =>{
        setNotes(prev=>{
            return [...prev.filter((note,index)=>{
                return index!== id
            })]
        });
    }

    return (
        <div>
            <Header/>
            <CreateArea onAdd={addNote} />
            {notes.map((raw, index)=>{
                return <Note title={raw.title} content={raw.content} key={index} id={index} onDelete={handleDelete} />
            })}
        </div>
    )
}

export default App
