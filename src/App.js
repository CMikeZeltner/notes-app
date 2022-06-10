import Header from "./components/Header";
import NoteFeed from "./components/NoteFeed";
import {NoteProvider} from './context/NoteContext'



function App() {
  return (
    <NoteProvider>
      <Header />
      <NoteFeed/>
    </NoteProvider>
  );
}

export default App;
