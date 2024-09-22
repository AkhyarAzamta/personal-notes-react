import React from 'react';
import Input from '../atoms/Input';

const Header = ({ searchQuery, handleSearchChange }) => {
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <Input
        type="text"
        placeholder="Cari catatan ..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </header>
  );
};

export default Header;
