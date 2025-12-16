import React from "react";
import "../App.css";
import { useState } from "react";

interface NoteFormProps {
    addNote: (text: string) => void;
}

function NoteForm({ addNote }: NoteFormProps) {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            addNote(text);
            setText("");
        }
    };

    return (
        <>
            <div>
                <h1>
                    Your Note
                </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your note"
                />
                <button type="submit">Add Note</button>
            </form>
        </>
    );
};

export default NoteForm;