import { useState } from "react";
import MessageList from "./components/MessageList";
import Control from "./components/Control";
import type { Message } from "./components/types";
import './App.css'

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const addMessage = (text: string) => {
    setMessages(prev => [
      ...prev,
      {sender: 'human', id: Date.now(), text }
    ]);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {sender: 'bot', id: Date.now(), text }
      ]);
    }, 1000)
  }

  return (
    <div className="app-div">
      <MessageList messages={messages} />
      <Control addMessage={addMessage}/>
    </div>
  )
}


