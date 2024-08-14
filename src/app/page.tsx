import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Chat from "@/components/ui/ChatContent/Chat";
import { ModeToggle } from "@/components/ui/ModeToggle";
import dynamic from "next/dynamic";


export default function Home() {
  return (
    <div className="flex justify-center items-center h-[100dvh] ">

      <Card className="w-[500px]  relative border max-sm:border-none max-sm:flex-none max-sm:w-screen max-sm:h-[100dvh]">
        <CardHeader className="relative max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:right-0 bg-background max-sm:border-b">
          <CardTitle className="text-3xl">Chat Bot</CardTitle>
          <CardDescription className="text-base">
            A simple chat bot using OpenAI&apos;s GPT-3.5 Turbo model.
          </CardDescription>
          <ModeToggle className="absolute right-6 top-4" />
        </CardHeader>

        <Chat />
      </Card>
    </div>
  );
}
