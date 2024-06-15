import React from 'react';

const prompts = ["Default system prompt", "Friendly bot", "Professional bot"];

function SystemPromptSelector({ onChange }) {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {prompts.map((prompt, index) => (
        <option key={index} value={prompt}>{prompt}</option>
      ))}
    </select>
  );
}

export default SystemPromptSelector;
