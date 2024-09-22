import React, { useState } from 'react';
import { getInitialData, showFormattedDate } from './utils';
import NotesPageTemplate from './components/templates/NotesPageTemplate';

const MAX_TITLE_LENGTH = 25;

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleBodyChange = (e) => setBody(e.target.value);

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
    setTitleCharLimit(MAX_TITLE_LENGTH);
  };

  const toggleArchive = (id) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, archived: !note.archived } : note
    ));
  };

  const deleteNote = (id) => setNotes(notes.filter(note => note.id !== id));

  const activeNotes = notes.filter(note => !note.archived && note.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const archivedNotes = notes.filter(note => note.archived);

  return (
    <NotesPageTemplate
      title={title}
      handleTitleChange={handleTitleChange}
      titleCharLimit={titleCharLimit}
      body={body}
      handleBodyChange={handleBodyChange}
      addNote={addNote}
      searchQuery={searchQuery}
      handleSearchChange={(e) => setSearchQuery(e.target.value)}
      activeNotes={activeNotes}
      archivedNotes={archivedNotes}
      toggleArchive={toggleArchive}
      deleteNote={deleteNote}
    />
  );
}

export default App;
