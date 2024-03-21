"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import NavAvatar from "./nav-avatar";
import { Home, Newspaper, Bolt } from "lucide-react";
import Link from "next/link";

const NavMenu = () => {
  const icon = "flex items-center gap-1 md:gap-2";

  return (
    <nav className="fixed z-50 flex h-16 w-screen items-center justify-end border-b-2 border-white bg-background p-2 px-2 shadow-md dark:border-slate-400 md:px-8">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-0 md:gap-2">
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <Link href="/about" className={icon}>
                <Bolt />
                <p>About</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <Link href="/blog" className={icon}>
                <Newspaper />
                <p>Blog</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <Link href="/" className={icon}>
                <Home />
                <p>Home</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavAvatar className="pl-2 md:pl-4" />
    </nav>
  );
};

export default NavMenu;
