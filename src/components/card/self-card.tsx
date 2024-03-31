import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaDiscord, FaCode, FaGithub, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiCsharp,
  SiGo,
  SiCplusplus,
  SiRust,
} from "react-icons/si";
import SocialCard from "./social-card";
import Image from "next/image";
import avatar from "@/assets/avatar.jpg";
import { env } from "@/lib/env";
import { links } from "@/lib/constants";

const SelfCard = ({ className }: { className?: string }) => {
  const iconSize = 24;
  return (
    <Card className={cn("bg-background shadow-md", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-12">
          <div className="w-[200px]">
            Kori Sama
            <p className="text-sm font-normal text-muted-foreground">
              The smartest, most handsome, and most humble person in the world.
            </p>
          </div>
          <Avatar className="size-24">
            <Image src={avatar} alt="Kori" />
            <AvatarFallback>Kori</AvatarFallback>
          </Avatar>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <SocialCard
            icon={<FaGithub />}
            link={links.GITHUB}
            name="Kori Sama"
          />
          <SocialCard
            icon={<FaCode />}
            link={links.SOURCE_CODE}
            name="Source Code"
          />
          <SocialCard
            icon={<FaDiscord />}
            link={links.DISCORD}
            name="Discord"
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-3 items-center ">
          <p className="mr-8">Good at: </p>
          <SiJavascript size={iconSize} />
          <SiTypescript size={iconSize} />
          <FaReact size={iconSize} />
          <SiCsharp size={iconSize} />
          <SiCplusplus size={iconSize} />
          <SiGo size={iconSize} />
          <SiRust size={iconSize} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default SelfCard;
