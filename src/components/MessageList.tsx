import type { MessageListProps } from "./types";

export default function MessageList({messages}: MessageListProps) {
  return (
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            {message.text}
          </li>
      ))}
    </ul>
  );
}
