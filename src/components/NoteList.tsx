import React from "react";
import type { Note } from "../types";

interface NoteListProps {
    notes: Note[];
    onDelete: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
    return (
        <div className="note-list-container">
            {notes.map((note) => (
                <nav className="Navbar-message" key={note.id}>
                    <div className="note-item">
                        <span className="note-text">{note.text}</span>
                        <button 
                            className="delete-button"
                            onClick={() => onDelete(note.id)} 
                        >
                            Delete
                        </button>
                    </div>
                </nav>
            ))}
            {notes.length === 0 && (
                <p className="no-notes-message">No notes yet. Start typing above!</p>
            )}
        </div>
    );
};

export default NoteList;