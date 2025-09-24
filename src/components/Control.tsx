import { useState } from "react";
import type { ControlProps } from "./types";

export default function Control({messages, setMessages}: ControlProps) {
  const [message, setMessage] = useState<string>('');

  function handleClick() {
    const newMessages = [...messages, {
      sender: 'human',
      id: Date.now(),
      text: message,
    }];

    setMessages(newMessages);
    setMessage('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        {
          sender: 'bot',
          id: Date.now(),
          text: message,
        }
      ]);
    }, 1000)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

  return (
    <>
      <input 
        onChange={handleChange}
        value={message}
      />
      <button onClick={handleClick}>Send</button>
    </>
  );
}