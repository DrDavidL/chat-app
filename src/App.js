import React, { useState, useEffect } from 'react';
import Chat from './components/Chat';
import SystemPromptSelector from './components/SystemPromptSelector';
import CustomSystemPrompt from './components/CustomSystemPrompt';
import { saveChat, loadChat, clearChat } from './utils/storage';
import { fetchChatbotResponse } from './utils/openai';

function App() {
  const [messages, setMessages] = useState(loadChat());
  const [systemPrompt, setSystemPrompt] = useState("You are a helpful assistant.");

  useEffect(() => {
    saveChat(messages);
  }, [messages]);

  const handleSend = async (text) => {
    const userMessage = { sender: 'user', text };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const fullPrompt = `${systemPrompt}\nUser: ${text}\nBot:`;
    const botResponse = await fetchChatbotResponse(fullPrompt);

    const botMessage = { sender: 'bot', text: botResponse };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  const handleClear = () => {
    clearChat();
    setMessages([]);
  };

  const handleSystemPromptChange = (newPrompt) => {
    setSystemPrompt(newPrompt);
    setMessages([{ sender: 'system', text: newPrompt }, ...messages]);
  };

  return (
    <div>
      <SystemPromptSelector onChange={handleSystemPromptChange} />
      <CustomSystemPrompt onChange={handleSystemPromptChange} />
      <button onClick={handleClear}>Clear Memory</button>
      <Chat messages={messages} onSend={handleSend} />
      <button onClick={() => saveChat(messages)}>Download Chat</button>
    </div>
  );
}

export default App;
