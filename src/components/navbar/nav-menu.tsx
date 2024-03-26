import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Home, Newspaper, Bolt, MessageSquareMore } from "lucide-react";
import Link from "next/link";

const NavMenu = () => {
  const icon = "flex items-center gap-1 md:gap-2";

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-0 md:gap-2">
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href="/about" className={icon}>
              <Bolt />
              <p>About</p>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href="/comment" className={icon}>
              <MessageSquareMore />
              <p>Comment</p>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href="/blog" className={icon}>
              <Newspaper />
              <p>Blog</p>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href="/" className={icon}>
              <Home />
              <p>Home</p>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
