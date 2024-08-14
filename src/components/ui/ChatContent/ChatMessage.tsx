import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ChatMessage = ({
  message,
  isTyping,
}: {
  message: any;
  isTyping: boolean;
}) => {
  return (
    <>
      {message.role === "user" ? (
        <CardContent className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
          {message.content}
        </CardContent>
      ) : (
        <CardContent className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
          {isTyping ? "typing..." : null}
          {message.content}
        </CardContent>
      )}
    </>
  );
};
export default ChatMessage;
