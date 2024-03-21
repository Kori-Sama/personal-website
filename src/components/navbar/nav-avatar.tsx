import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import ThemeToggle from "./theme-toggle";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import avatar from "@/assets/avatar.jpg";
import Image from "next/image";
import Link from "next/link";

const NavAvatar = ({ className }: { className?: string }) => {
  const handleLogout = () => {
    console.log("logout");
  };
  return (
    <div className={cn("flex items-center", className)}>
      <AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full border-2 hover:border-foreground">
            <Avatar>
              <Image src={avatar} alt="Kori" />
              <AvatarFallback>Kori</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="cursor-default">
              Kori Sama
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/login" className="size-full text-sm font-medium ">
                  Login
                </Link>
              </DropdownMenuItem>

              <ThemeToggle />
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="bg-destructive">
              <AlertDialogTrigger className="w-full text-start text-sm font-medium">
                Logout
              </AlertDialogTrigger>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to logout?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleLogout}
              className="bg-destructive"
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default NavAvatar;
