import {useState} from 'react'
import {FaEdit} from 'react-icons/fa'

function Note({note}) {



  return (
    <div className="note-container">
        <div className='title-description-container'>
            <h2 className="note-title">Title: {note.name}</h2>
            <h2 className="note-description">Description: {note.description}</h2>
        </div>
        <button><FaEdit/></button>
    </div>
  )
}
export default Note