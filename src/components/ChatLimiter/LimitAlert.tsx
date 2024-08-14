import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const LimitAlert = () => {
  return (
    <Alert className="absolute w-[95%] top-5 left-0 right-0 mx-auto">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You have reached the limit of 10 chats.
      </AlertDescription>
    </Alert>
  );
};

export default LimitAlert;
