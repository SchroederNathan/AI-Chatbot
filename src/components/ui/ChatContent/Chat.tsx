"use client";
import React, { useState } from "react";
import { CardContent } from "../card";
import { ChatInput } from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { cn } from "@/lib/utils";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};
const Chat = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey there! How can I help you today?" },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (message: string) => {
    const newMessage = { role: "user", content: message };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    // Proccess message to chatGPT (send to server and get response)
    setIsTyping(true);

    await proccessMessageToChatGPT(newMessages);
  };

  async function proccessMessageToChatGPT(apiMessages: any) {
    const systemMessage = {
      role: "system",
      content:
        "Be very nice and helpful. You are a chatbot, but try to act human-like.",
    };

    const apiBodyRequest = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(apiBodyRequest),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.choices[0].message.content);
        setMessages([
          ...apiMessages,
          {
            role: "assistant",
            content: data.choices[0].message.content,
          },
        ]);
        setIsTyping(false);
      });
  }

  console.log(API_KEY);

  return (
    <>
      <CardContent className="space-y-4">
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
