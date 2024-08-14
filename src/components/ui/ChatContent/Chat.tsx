"use client";
import React, { use, useEffect, useState } from "react";
import { CardContent } from "../card";
import { ChatInput } from "./ChatInput";
import ChatMessage from "./ChatMessage";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Chat = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "I am a chatbot" },
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
      content: "Be very nice and helpful. You are a chatbot, but try to act human-like.",
    };

    const apiBodyRequest = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage,
        ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(apiBodyRequest),
    }).then((response) => response.json()).then((data) => {

      console.log(data);
    });
  }

  return (
    <>
      <CardContent className="space-y-4">
        {messages.map((message) => (
          <ChatMessage message={message} isTyping={isTyping} />
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
