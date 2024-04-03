import { useEffect, useState } from "react";

const useMediaQuery = (width: number = 1024): boolean => {
  const [isDesktop, setDesktop] = useState(false);
  const checkWidth = () => setDesktop(window.innerWidth > width);

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  });
  return isDesktop;
};

export default useMediaQuery;
