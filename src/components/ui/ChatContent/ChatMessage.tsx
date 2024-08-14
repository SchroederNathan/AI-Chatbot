"use client";

import React from "react";
import { CardContent } from "@/components/ui/card";

const ChatMessage = ({
  message,
}: {
  message: any;
}) => {
  return (
    <>
      {message.role === "user" ? (
        <CardContent className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-base ml-auto bg-primary text-primary-foreground whitespace-pre-line">
          {message.content}
        </CardContent>
      ) : (
        <CardContent className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-base bg-muted whitespace-break-spaces">
          {message.content}
        </CardContent>
      )}
    </>
  );
};
export default ChatMessage;
