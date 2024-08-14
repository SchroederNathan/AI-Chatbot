"use client";
import React, { useState, useEffect } from "react";
import LimitProgress from "./LimitProgress";
import Chat from "./ChatContent/Chat";
import { CardDescription, CardHeader, CardTitle } from "./card";
import { ModeToggle } from "./ModeToggle";

const ChatWithProgress = () => {
  const [chatCount, setChatCount] = useState<number>(0);

  useEffect(() => {
    const storedChatCount = window.localStorage.getItem("limitProgress");
    if (storedChatCount) {
      setChatCount(Number(storedChatCount));
    }
  }, []);

  const incrementChatCount = () => {
    if (chatCount < 10) {
      const newCount = chatCount + 1;
      setChatCount(newCount);
      window.localStorage.setItem("limitProgress", newCount.toString());
    }
  };

  return (
    <>
      <LimitProgress chatCount={chatCount} />
      <CardHeader className="relative max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:right-0 bg-background max-sm:border-b">
        <CardTitle className="text-3xl">Chat Bot</CardTitle>
        <CardDescription className="text-base">
          A simple chat bot using OpenAI&apos;s GPT-3.5 Turbo model.
        </CardDescription>
        <ModeToggle className="absolute right-6 top-4" />
      </CardHeader>
      <Chat onChat={incrementChatCount} />
    </>
  );
};

export default ChatWithProgress;
