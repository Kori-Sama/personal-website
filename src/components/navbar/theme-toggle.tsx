import { useState } from "react";
import {
  DropdownMenuSub,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState(theme as string);
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <div className="flex h-full cursor-pointer flex-row gap-10 p-0 text-start text-sm font-medium">
          <p>Theme</p>
          <div className="">
            {mode === "light" ? (
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            )}
          </div>
        </div>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup value={mode} onValueChange={setMode}>
            <DropdownMenuRadioItem
              value="light"
              onClick={() => setTheme("light")}
            >
              Light
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="dark"
              onClick={() => setTheme("dark")}
            >
              Dark
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="system"
              onClick={() => setTheme("system")}
            >
              System
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

export default ThemeToggle;
