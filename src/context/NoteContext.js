import {createContext, useState, } from 'react'


const NoteContext = createContext()

export const NoteProvider = ({children}) =>{

    const [notes, setNotes] = useState([{
        id: 1,
        title: 'note',
        description: 'this is from context'
    }])

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id))
    }

    const addNotes = (newNote) => {
        setNotes([...notes, newNote])
        
    }


    return <NoteContext.Provider 
    value={{
        notes,
        deleteNote,
        addNotes
    }}>
    {children}
</NoteContext.Provider>
}

export default NoteContext
