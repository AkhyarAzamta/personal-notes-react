import React from 'react';
import Button from '../atoms/Button';

const NoteItem = ({ note, toggleArchive, deleteNote }) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{note.title}</h3>
        <p className="note-item__date">{note.date}</p>
        <p className="note-item__body">{note.body}</p>
      </div>
      <div className="note-item__action">
        <Button className="note-item__archive-button" onClick={() => toggleArchive(note.id)}>{note.archived ? 'Pindahkan' : 'Arsipkan'}</Button>
        <Button className="note-item__delete-button" onClick={() => deleteNote(note.id)} style={{ color: 'red' }}>Delete</Button>
      </div>
    </div>
  );
};

export default NoteItem;
