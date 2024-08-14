"use client";
import React, { use, useEffect, useState } from "react";
import { CardContent } from "./card";
import { ChatInput } from "./ChatInput";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "gpt", content: "I am a chatbot" },
  ]);

  const handleSubmit = (message: string) => {
    setMessages([...messages, { sender: "user", content: message }]);
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <>
      <CardContent>
        These will be the messages to and from the server.
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
