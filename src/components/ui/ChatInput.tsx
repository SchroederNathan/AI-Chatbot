import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PaperPlaneIcon } from "@radix-ui/react-icons"

export function ChatInput() {
  // Grab the messaghe from some sort of state.
  // This is a server component, so we'll need to fetch the message from the server.

  return (
    <div className="flex w-full items-center space-x-2">
      <Input type="text" placeholder="Ask me anything"  />
      <Button type="submit">
       <PaperPlaneIcon style={{transform: 'rotate(-45git deg)' }}/>
      </Button>
    </div>
  )
}
