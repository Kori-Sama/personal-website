"use client";
import { ModeToggle } from "@/components/button/mode-toggle";
import NavAvatar from "@/components/navbar/nav-avatar";
import NavMenu from "@/components/navbar/nav-menu";
import NavMobile from "@/components/navbar/nav-moblie";
import useMediaQuery from "@/hook/use-media-query";

const Header = () => {
  const isDesktop = useMediaQuery();

  return (
    <nav className="fixed z-50 flex h-16 w-screen items-center justify-between border-b-2 border-white bg-background p-2 px-2 shadow-md dark:border-slate-400 md:px-8">
      {isDesktop ? (
        <>
          <div className="flex items-center space-x-2">
            <ModeToggle />
            <NavAvatar className="pl-2 md:pl-4" />
          </div>
          <NavMenu />
        </>
      ) : (
        <>
          <NavAvatar className="pl-2 md:pl-4" />
          <div className="flex items-center space-x-2">
            <ModeToggle />
            <NavMobile />
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
