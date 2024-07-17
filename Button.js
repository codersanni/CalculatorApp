import React from 'react';
import './Button.css'; // Adjust the path based on the file structure

const Button = ({ value, onClick }) => {
  return (
    <button className="button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Button;
