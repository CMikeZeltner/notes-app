import Header from "./components/Header";
import Note from "./components/Note";
import NoteFeed from "./components/NoteFeed";

const notes = [
  {
  name: 'Do Laundry',
  description: 'Collect laundry then wash it.',
  isComplete: false
  },
  {
  name: 'Update Registration',
  description: 'Its 4 months overdue',
  isComplete: false
  },
]


function App() {
  return (
    <>
      <Header />
      <NoteFeed notes={notes}/>
    </>
  );
}

export default App;
