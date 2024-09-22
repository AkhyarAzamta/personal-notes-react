import React from 'react';

const TitleLimitIndicator = ({ limit }) => {
  return (
    <p className="note-input__title__char-limit">
      Sisa karakter: {limit}
    </p>
  );
};

export default TitleLimitIndicator;
