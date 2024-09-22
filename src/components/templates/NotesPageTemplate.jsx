import React from 'react';
import Header from '../organisms/Header';
import NoteInputForm from '../molecules/NoteInputForm';
import NotesList from '../organisms/NotesList';

const NotesPageTemplate = ({
  title, handleTitleChange, titleCharLimit, body, handleBodyChange,
  addNote, searchQuery, handleSearchChange, activeNotes, archivedNotes,
  toggleArchive, deleteNote
}) => {
  return (
    <div>
      <Header searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      <div className="note-app__body">
        <NoteInputForm
          title={title}
          handleTitleChange={handleTitleChange}
          titleCharLimit={titleCharLimit}
          body={body}
          handleBodyChange={handleBodyChange}
          onSubmit={addNote}
        />
        <h2>Catatan Aktif</h2>
        <NotesList notes={activeNotes} toggleArchive={toggleArchive} deleteNote={deleteNote} />
        <h2>Catatan Diarsipkan</h2>
        <NotesList notes={archivedNotes} toggleArchive={toggleArchive} deleteNote={deleteNote} />
      </div>
    </div>
  );
};

export default NotesPageTemplate;
