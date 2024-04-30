import { Separator } from "@/components/ui/separator";
import KawaiiNotFound from "@/assets/NotFound.png";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <div className="text-[40px] flex justify-center items-center gap-12 lg:flex-row flex-col">
        <div className="flex gap-6">
          <p>404</p>
          <Separator
            orientation="vertical"
            className="border-foreground h-auto"
          />
          <p>Not Found</p>
        </div>
        <Image src={KawaiiNotFound} alt="Kawaii" width="400" />
      </div>
      <p className="fixed text-sm bottom-[5%]">
        Logo designed by
        <a
          href="https://twitter.com/sawaratsuki1004"
          target="_blank"
          rel="noopener"
          className="ms-1"
        >
          @sawaratsuki1004
        </a>
      </p>
    </div>
  );
};
export default NotFound;
