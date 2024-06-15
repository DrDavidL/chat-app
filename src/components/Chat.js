import React, { useState } from 'react';
import ChatMessage from './ChatMessage';

function Chat({ messages, onSend }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          id="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)} 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
