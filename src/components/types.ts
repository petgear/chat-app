export type MessageListProps = {
  messages: Message[];
}

export type ControlProps = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  messages: Message[];
}

export type Message = {
  sender: string;
  id: number;
  text: string;
}