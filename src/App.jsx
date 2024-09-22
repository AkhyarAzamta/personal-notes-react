import React, { useState } from 'react';
import { getInitialData, showFormattedDate } from './utils';

const MAX_TITLE_LENGTH = 25;

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState('');  // State untuk query pencarian
  const [title, setTitle] = useState('');
  const [titleCharLimit, setTitleCharLimit] = useState(MAX_TITLE_LENGTH);
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => {
    const input = e.target.value;
    if (input.length <= MAX_TITLE_LENGTH) {
      setTitle(input);
      setTitleCharLimit(MAX_TITLE_LENGTH - input.length);
    }
  };

  const addNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
    setTitle('');
    setBody('');
    setTitleCharLimit(25);
  };

  const toggleArchive = (id) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, archived: !note.archived } : note
    ));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const activeNotes = notes.filter(note => !note.archived && note.title.toLowerCase().includes(searchQuery.toLowerCase()));  // Filter pencarian
  const archivedNotes = notes.filter(note => note.archived);

  return (
    <div>
      <header className="note-app__header">
        <h1>Notes</h1>
        <input
          type="text"
          placeholder="Cari catatan ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}  // Mengubah state pencarian
        />
      </header>

      <div className="note-app__body">
      <form className="note-input" onSubmit={addNote}>
        <h2>Buat Catatan</h2>
        <input
          type="text"
          placeholder="Ini adalah judul ..."
          value={title}
          onChange={handleTitleChange}
          required
        />
        {titleCharLimit <= 24 && <p className="note-input__title__char-limit">Sisa karakter: {titleCharLimit}</p>}
        
          <textarea
            placeholder="Tuliskan catatanmu di sini ..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
          <button type="submit">Buat</button>
        </form>

        <h2>Catatan Aktif</h2>
        <div className="notes-list">
          {activeNotes.length > 0 ? (
            activeNotes.map((note) => (
              <div key={note.id} className="note-item">
                <div className="note-item__content">
                  <h3 className="note-item__title">{note.title}</h3>
                  <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                  <p className="note-item__body">{note.body}</p>
                </div>
                <div className="note-item__action">
                  <button className="note-item__archive-button" onClick={() => toggleArchive(note.id)}>Arsipkan</button>
                  <button className="note-item__delete-button" onClick={() => deleteNote(note.id)}>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
          )}
        </div>

        <h2>Catatan Diarsipkan</h2>
        <div className="notes-list">
          {archivedNotes.length > 0 ? (
            archivedNotes.map((note) => (
              <div key={note.id} className="note-item">
                <div className="note-item__content">
                  <h3 className="note-item__title">{note.title}</h3>
                  <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                  <p className="note-item__body">{note.body}</p>
                </div>
                <div className="note-item__action">
                  <button className="note-item__archive-button" onClick={() => toggleArchive(note.id)}>Pindahkan ke Aktif</button>
                  <button className="note-item__delete-button" onClick={() => deleteNote(note.id)}>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p className="notes-list__empty-message">Tidak ada catatan yang diarsipkan</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
