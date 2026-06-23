import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Notes from "./pages/Notes";
import NoteDetails from "./pages/NoteDetails";

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Notes/>}/>
                <Route path={'/detail'} element={<NoteDetails/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
