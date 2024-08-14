import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Chat from "@/components/ui/ChatContent/Chat";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[500px] relative">
        <CardHeader className="relative">
          <CardTitle>Chat Bot</CardTitle>
          <CardDescription>
            A simple chat bot using OpenAI&apos;s GPT-3.5 Turbo model.
          </CardDescription>
          <ModeToggle className="absolute right-6 top-4" />
        </CardHeader>

        <Chat />
      </Card>
    </div>
  );
}
