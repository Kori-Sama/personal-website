"use client";
import NavAvatar from "@/components/navbar/nav-avatar";
import NavMenu from "@/components/navbar/nav-menu";

const Header = () => {
  return (
    <nav className="fixed z-50 flex h-16 w-screen items-center justify-end border-b-2 border-white bg-background p-2 px-2 shadow-md dark:border-slate-400 md:px-8">
      <NavMenu />
      <NavAvatar className="pl-2 md:pl-4" />
    </nav>
  );
};

export default Header;
