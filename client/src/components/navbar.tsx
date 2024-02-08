import { ModeToggle } from "./mode-toggle";
import { DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="p-3 px-6 flex items-center bg-slate-900/50 backdrop-blur justify-between absolute top-0 left-0 w-full">
      <img
        className="h-12"
        src="https://hack2skill.com/brandguidelines/assets/images/H2S_White_Logo.png"
        alt="logo"
      />
      <div className="flex gap-4">
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <ModeToggle />
        <div className="text-3xl text-blue-500 font-bold">Build For Bharat</div>
      </div>
    </div>
  );
}
