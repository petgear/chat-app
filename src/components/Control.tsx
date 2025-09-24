import { useState, useRef } from "react";

type ControlProps = {
  addMessage: (text: string) => void;
}

export default function Control({addMessage}: ControlProps) {
  const [message, setMessage] = useState('');
  const focusRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!message) return;
      focusRef.current?.focus();
    addMessage(message);
    setMessage('');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  const handleEnterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <div className="control-div">
      <input 
        ref={focusRef}
        onChange={handleChange}
        value={message}
        className="message-input"
        onKeyDown= {handleEnterDown}
      />
      <button 
      onClick={handleClick}
      className="send-btn"
      >Send</button>
    </div>
  );
}

// Привет! Я - сообщение в чате!