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
            <nav className="Navbar">
                <div>
                    <h1>
                        Your Note
                    </h1>
                </div>
            </nav>
            <form onSubmit={handleSubmit}>
                <input
                    className="EnterYourNote"
                    type="text"
                    value={text}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                    placeholder="Enter your note"
                />
                <button type="submit" style={{ marginTop: "10px"}}>Add Note</button>
            </form>
        </>
    );
};

export default NoteForm;