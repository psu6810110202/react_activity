import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";
import type { Note } from "./types";
import React, { useState } from "react";

function App() {
    const [notes, setNotes] = useState<Note[]>( []);

    // Function to delete a note by id
    const deleteNote = (id: number) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    const addNote = (text: string) => {
        const newNote: Note = {
            id: notes.length + 1,
            text,
        };
        setNotes([...notes, newNote]);
    };

    const savedNotes = localStorage.getItem("notes");
    React.useEffect(() => {
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
    }, []);

    const saved = localStorage.getItem("notes");
    React.useEffect(() => {
        if (saved) {
            setNotes(JSON.parse(saved));
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
    
    return (
        <div className="App">
            <NoteForm addNote={addNote} />
            <NoteList notes={notes} onDelete={deleteNote} />
        </div>
    );
}

export default App;
