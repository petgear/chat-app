import { useState } from "react";
import MessageList from "./components/MessageList";
import Control from "./components/Control";
import type { Message } from "./components/types";

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  return (
    <div>
      <MessageList messages={messages} />
      <Control messages={messages} setMessages={setMessages}/>
    </div>
  )
}


