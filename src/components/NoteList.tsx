import React from "react";
import type { Note } from "../types";

interface NoteListProps {
    notes: Note[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
    return (
        <div>
            {notes.map((note) => (
                <div key={note.id}>{note.text}</div>
            ))}
        </div>
    );
};

export default NoteList;