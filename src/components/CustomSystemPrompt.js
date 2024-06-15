import React, { useState } from 'react';

function CustomSystemPrompt({ onChange }) {
  const [customPrompt, setCustomPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customPrompt.trim()) {
      onChange(customPrompt);
      setCustomPrompt('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        id="custom-prompt-input"
        value={customPrompt}
        onChange={(e) => setCustomPrompt(e.target.value)} 
        placeholder="Enter custom prompt" 
      />
      <button type="submit">Set Custom Prompt</button>
    </form>
  );
}

export default CustomSystemPrompt;
