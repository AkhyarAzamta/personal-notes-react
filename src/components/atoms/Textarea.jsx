import React from 'react';

const Textarea = ({ value, onChange, placeholder, ...props }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Textarea;
