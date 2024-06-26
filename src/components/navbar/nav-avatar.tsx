"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { logout } from "@/lib/actions";
import { useUser } from "@/store/user";

const NavAvatar = ({ className }: { className?: string }) => {
  const { username } = useUser((state) => state.userInfo);

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
              {username}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/login" className="size-full text-sm font-medium ">
                  Login
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="bg-destructive focus:bg-destructive/60">
              <AlertDialogTrigger className="w-full text-start text-sm font-medium">
                LogOut
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
            <form action={logout}>
              <AlertDialogAction
                className="bg-destructive hover:bg-destructive/60 w-full"
                type="submit"
              >
                Confirm
              </AlertDialogAction>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default NavAvatar;
