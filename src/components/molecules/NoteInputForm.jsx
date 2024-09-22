import React from 'react';
import Input from '../atoms/Input';
import Textarea from '../atoms/Textarea';
import Button from '../atoms/Button';
import TitleLimitIndicator from '../atoms/TitleLimitIndicator';

const NoteInputForm = ({ title, handleTitleChange, titleCharLimit, body, handleBodyChange, onSubmit }) => {
  return (
    <form className="note-input" onSubmit={onSubmit}>
      <h2>Buat Catatan</h2>
      <Input
        type="text"
        placeholder="Ini adalah judul ..."
        value={title}
        onChange={handleTitleChange}
        required
      />
      {titleCharLimit <= 24 && <TitleLimitIndicator limit={titleCharLimit} />}
      <Textarea
        placeholder="Tuliskan catatanmu di sini ..."
        value={body}
        onChange={handleBodyChange}
        required
      />
      <Button type="submit">Buat</Button>
    </form>
  );
};

export default NoteInputForm;
