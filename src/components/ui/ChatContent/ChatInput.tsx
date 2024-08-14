"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export function ChatInput({
  onSubmit,
}: {
  onSubmit: (message: string) => void;
}) {
  // Grab the messaghe from some sort of state.
  // This is a server component, so we'll need to fetch the message from the server.

  const [message, setMessage] = useState("");

  const handleClick = (event: any) => {
    event.preventDefault();
    onSubmit(message);
    setMessage("");
  };

  return (
    <div className="flex w-full items-center space-x-2">
      <Input
        type="text"
        placeholder="Ask me anything"
        value={message}
        className="text-base"
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit" onClick={(event) => handleClick(event)}>
        <PaperPlaneIcon style={{ transform: "rotate(-45git deg)" }} />
      </Button>
    </div>
  );
}
