import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";
import type { Note } from "./types";
import React, { useState } from "react";

function App() {
    const [notes, setNotes] = useState<Note[]>([]);
    const addNote = (text: string) => {
        const newNote: Note = {
            id: notes.length + 1,
            text,
        };
        setNotes([...notes, newNote]);
    };
    
    return (
        <div className="App">
            <NoteForm addNote={addNote} />
            <NoteList notes={notes} />
        </div>
    );
}

export default App;
