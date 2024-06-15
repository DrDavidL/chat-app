import React from 'react';

function ChatMessage({ message }) {
  return (
    <div>
      <strong>{message.sender}:</strong> {message.text}
    </div>
  );
}

export default ChatMessage;
