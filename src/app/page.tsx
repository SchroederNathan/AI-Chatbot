import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChatWithProgress from "@/components/ui/ChatContent/ChatWithProgress";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[100dvh]">
      <Card className="w-[500px] relative border max-sm:border-none max-sm:flex-none max-sm:w-screen max-sm:h-[100dvh]">
        <ChatWithProgress />
      </Card>
    </div>
  );
}
