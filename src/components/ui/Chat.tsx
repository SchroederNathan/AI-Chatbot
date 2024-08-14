"use client";
import React, { use, useEffect, useState } from "react";
import { CardContent } from "./card";
import { ChatInput } from "./ChatInput";
import ChatMessage from "./ChatMessage";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "gpt", content: "I am a chatbot" },
  ]);

  const handleSubmit = (message: string) => {
    setMessages([...messages, { sender: "user", content: message }]);

    // Proccess message to chatGPT (send to server and get response)
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <>
      <CardContent className="space-y-4">
        {messages.map((message) => (
          <ChatMessage message={message} />
        ))}
      </CardContent>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <ChatInput onSubmit={handleSubmit} />
          </div>
        </form>
      </CardContent>
    </>
  );
};

export default Chat;
