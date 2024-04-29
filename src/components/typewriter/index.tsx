"use client";
import TypewriterInner from "./typewriter-inner";

const Typewriter = () => {
  return (
    <TypewriterInner
      callback={(w) => {
        w.type("I'm Kori Sama")
          .pause()
          .delete(12)
          .pause()
          .type(" can write JS/TS")
          .pause()
          .delete(5)
          .pause()
          .type("Go")
          .pause(400)
          .type("lang")
          .pause(400)
          .delete(6)
          .pause(400)
          .type("C#")
          .pause()
          .delete(2)
          .pause()
          .type("C++")
          .pause()
          .type(" or C")
          .pause()
          .delete(8)
          .pause()
          .type("Python")
          .pause()
          .delete(6)
          .type("Rust")
          .pause()
          .delete()
          .type("I can also use ")
          .pause()
          .combine("React")
          .combine("Next.js")
          .combine(".NET")
          .combine("GIN")
          .combine("Postgresql")
          .type(" and more")
          .delete()
          .loop(500);
      }}
    />
  );
};

export default Typewriter;
