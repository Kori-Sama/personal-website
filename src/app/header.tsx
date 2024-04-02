"use client";
import NavAvatar from "@/components/navbar/nav-avatar";
import NavMenu from "@/components/navbar/nav-menu";
import NavMobile from "@/components/navbar/nav-moblie";
import { useEffect, useState } from "react";

const Header = () => {
  const [isDesktop, setDesktop] = useState(false);
  const checkWidth = () => setDesktop(window.innerWidth > 1024);
  useEffect(checkWidth, []);
  window.addEventListener("resize", checkWidth);
  return (
    <nav className="fixed z-50 flex h-16 w-screen items-center justify-between border-b-2 border-white bg-background p-2 px-2 shadow-md dark:border-slate-400 md:px-8">
      <NavAvatar className="pl-2 md:pl-4" />
      {isDesktop ? <NavMenu /> : <NavMobile />}
    </nav>
  );
};

export default Header;
