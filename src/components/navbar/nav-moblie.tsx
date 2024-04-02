import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import NavItems from "./nav-items";
import { useState } from "react";

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="text-start mb-8">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Menu</SheetDescription>
        </SheetHeader>
        <nav className="flex gap-2 flex-col-reverse">
          <NavItems className="justify-start" onOpenChange={setOpen} />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
