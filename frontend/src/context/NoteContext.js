import {createContext, useState, } from 'react'


const NoteContext = createContext()

export const NoteProvider = ({children}) =>{

    const [notes, setNotes] = useState([{
        id: 1,
        title: 'note',
        description: 'this is from context'
    }])


    const [noteEdit, setNoteEdit] = useState({
        note: {},
        edit: false
    })

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id))    
    }

    const addNote = (newNote) => {
        setNotes([...notes, newNote])   
    }

    const editNote = (note) => {
        setNoteEdit({
            note,
            edit: true
        })
    }


    return <NoteContext.Provider 
    value={{
        notes,
        deleteNote,
        addNote,
        editNote,
        noteEdit,
    }}>
    {children}
</NoteContext.Provider>
}

export default NoteContext
