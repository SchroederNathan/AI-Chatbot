import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChatInput } from "@/components/ui/ChatInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[500px] relative">
        <CardHeader className="relative">
          <CardTitle>Chat Bot</CardTitle>
          <CardDescription>
            A simple chat bot using OpenAI's GPT-TBA model.
          </CardDescription>
          <ModeToggle className="absolute right-6 top-4" />
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <ChatInput />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
