import Note from "./Note"
import {useState, useContext} from 'react'
import NoteContext from "../context/NoteContext"
import Modal from 'react-modal'
import { v4 as uuidv4 } from "uuid"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    }

    Modal.setAppElement('#root')

function NoteFeed() {
    const {notes} = useContext(NoteContext)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const {addNotes} = useContext(NoteContext)
  
    const handleSubmit = (e) =>{
       e.preventDefault()
        const newNote = {
            id: uuidv4(),
            title,
            description
        }

        addNotes(newNote)
        closeModal()
        
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }




  return (
      <>
      <button onClick={openModal}>Add Note</button>
        <div className="notefeed-container">
            {notes.map((note) => (
                <Note key={note.id} note={note}/>
            ))} 

        </div>

        <div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            >
                <form>
                    <label htmlFor="title">Title</label>
                    <input onChange={handleTitleChange} 
                    type="text" 
                    id='title'
                    value={title} />
                    <label htmlFor="description">Description</label>
                    <input onChange={handleDescriptionChange} type="description" 
                    id='description'
                    value={description} />
                    <button type='submit' 
                    onClick={handleSubmit}>Submit</button>
                </form>
            </Modal>
        </div>
    </>
  )
}
export default NoteFeed