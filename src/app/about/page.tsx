import Image from "next/image";
import KawaiiReact from "@/assets/React.png";
import KawaiiNextjs from "@/assets/Next.js.png";
import KawaiiTailwindcss from "@/assets/Tailwindcss6.png";
import KawaiiTs from "@/assets/TypeScript.png";

const AboutPage = () => {
  return (
    <main className="flex flex-col justify-start items-center h-screen">
      <div className="text-lg mx-12 text-center mt-56 mb-20">
        <p className="text-[1.5rem] mb-2">
          This is a simple personal website built with
        </p>
        <p className="flex justify-center items-center gap-3">
          <LinkLabel href="https://www.typescriptlang.org/">
            Typescript
          </LinkLabel>
          <LinkLabel href="https://react.dev/?uwu=true">React</LinkLabel>
          <LinkLabel href="https://nextjs.org/">Next.js</LinkLabel>
          <LinkLabel href="https://tailwindcss.com/">Tailwindcss</LinkLabel>
        </p>
        <p className="flex justify-center items-center gap-3">
          <LinkLabel href="https://ui.shadcn.com/">Shadcn</LinkLabel>
          <LinkLabel href="https://orm.drizzle.team/">Drizzle</LinkLabel>
          <LinkLabel href="https://postgresql.org/">Postgresql</LinkLabel>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row">
        <Image src={KawaiiTs} alt="Typescript" width="400" />
        <Image src={KawaiiReact} alt="React" width="400" />
        <Image src={KawaiiNextjs} alt="Nextjs" width="400" />
        <Image src={KawaiiTailwindcss} alt="Tailwindcss" width="400" />
      </div>
      <p className="fixed text-sm bottom-[5%]">
        Logo designed by
        <a
          href="https://twitter.com/sawaratsuki1004"
          target="_blank"
          rel="noopener"
          className="ms-1 hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          @sawaratsuki1004
        </a>
      </p>
    </main>
  );
};

export default AboutPage;

const LinkLabel = ({ href, children }: { href: string; children: string }) => {
  return (
    <a
      href={href}
      className="text-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out"
      target="_blank"
      rel="noopener"
    >
      {children}
    </a>
  );
};
