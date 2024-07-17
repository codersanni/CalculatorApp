import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './App.css'; // Add any component-specific styles

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((item) => (
          <Button key={item} value={item} onClick={() => handleClick(item)} />
        ))}
      </div>
    </div>
  );
};

export default App;
