import Note from "./Note"

function NoteFeed({notes}) {
  return (
    <div className="notefeed-container">
        {notes.map((note, index) => (
            <Note note={note} key={index} />
        ))}

    </div>
  )
}
export default NoteFeed