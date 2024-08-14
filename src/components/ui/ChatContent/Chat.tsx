"use client";
import React, { useEffect, useRef, useState } from "react";
import { CardContent } from "../card";
import { ChatInput } from "./ChatInput";
import ChatMessage from "./ChatMessage";

const Chat = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey there! How can I help you today?" },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Effect to scroll to the bottom of chat messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSubmit = async (message: string) => {
    const newMessage = { role: "user", content: message };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    // Process message to chatGPT (send to server and get response)
    setIsTyping(true);

    await proccessMessageToChatGPT(newMessages);
  };

  async function proccessMessageToChatGPT(apiMessages: any) {
    await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: apiMessages }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessages([
          ...apiMessages,
          {
            role: "assistant",
            content: data.message,
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <>
      <CardContent className=" max-h-[100vdh] max-sm:pt-40 max-sm:pb-32">
        <div className="overflow-y-auto flex flex-col-reverse max-h-[500px] max-sm:max-h-full">
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage message={message} key={message.content} />
            ))}
            {isTyping ? (
              <div className="flex gap-1">
                <span className="size-1.5 rounded-full bg-slate-700 motion-safe:animate-[bounce_1s_ease-in-out_infinite] dark:bg-slate-300"></span>
                <span className="size-1.5 rounded-full bg-slate-700 motion-safe:animate-[bounce_0.5s_ease-in-out_infinite] dark:bg-slate-300"></span>
                <span className="size-1.5 rounded-full bg-slate-700 motion-safe:animate-[bounce_1s_ease-in-out_infinite] dark:bg-slate-300"></span>
              </div>
            ) : null}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </CardContent>

      <CardContent className="max-sm:fixed max-sm:pt-6 max-sm:border-t bg-background max-sm:bottom-0 max-sm:left-0 max-sm:right-0">
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
