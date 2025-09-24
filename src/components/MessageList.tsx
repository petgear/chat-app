import type { Message } from "./types";
import { useRef, useLayoutEffect } from 'react';

type MessageListProps = {
  messages: Message[];
}

export default function MessageList({messages}: MessageListProps) {
  const listRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
      <ul
      ref={listRef}
      className="messages-list"
      >
        {messages.map(message => (
          <li key={message.id} className={message.sender === 'bot' ? "bot-style" : 'human-style'}>
            {message.text}
          </li>
      ))}
    </ul>
  );
}
