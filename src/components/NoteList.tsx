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
                <div key={note.id} className="note-item">
                    {/* ส่วนแสดงเนื้อหาโน้ต */}
                    <span className="note-text">{note.text}</span>
                    
                    {/* ปุ่ม DELETE */}
                    <button 
                        className="delete-button"
                        // 💡 เมื่อคลิกปุ่ม ให้เรียกใช้ onDelete พร้อมส่ง ID ของโน้ตตัวนี้
                        onClick={() => onDelete(note.id)} 
                    >
                        Delete
                    </button>
                </div>
            ))}
            
            {/* แสดงข้อความเมื่อไม่มีโน้ต */}
            {notes.length === 0 && (
                <p className="no-notes-message">No notes yet. Start typing above!</p>
            )}
        </div>
    );
};

export default NoteList;