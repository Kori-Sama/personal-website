"use client";
import { RefObject, useEffect, useRef } from "react";
import { set } from "zod";

const TypewriterInner = ({
  callback,
}: {
  callback: (w: TypeWriter) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  let w: TypeWriter | null = null;

  useEffect(() => {
    if (w) return;
    w = new TypeWriter(ref);
    callback(w);
  }, []);

  return (
    <div className="flex items-center justify-center gap-0.5">
      <h1 ref={ref} className="text-[40px] border-r-2 animate-blink">
        {"> "}
      </h1>
    </div>
  );
};

export default TypewriterInner;

interface WriterItem {
  type: "type" | "delete" | "pause";
}

interface TypeItem extends WriterItem {
  type: "type";
  text: string;
  speed: number;
}

interface DeleteItem extends WriterItem {
  type: "delete";
  length: number;
  speed: number;
}

interface PauseItem extends WriterItem {
  type: "pause";
  duration: number;
}

class TypeWriter {
  private typeSpeed = 300;
  private deleteSpeed = 150;
  private element: HTMLElement;
  private index = 0;
  private queue = [] as Array<TypeItem | DeleteItem | PauseItem>;
  private isLoop = false;

  constructor(element: RefObject<HTMLElement>) {
    this.element = element.current!;
  }

  type(text: string, speed: number = this.typeSpeed) {
    this.queue.push({ type: "type", text, speed });
    return this;
  }

  delete(length: number = 100, speed: number = this.deleteSpeed) {
    this.queue.push({ type: "delete", length, speed });
    return this;
  }

  pause(duration: number = 1000) {
    this.queue.push({ type: "pause", duration });
    return this;
  }

  combine(
    text: string,
    speed: number = this.typeSpeed,
    duration: number = 1000
  ) {
    this.type(text, speed)
      .pause(duration)
      .delete(text.length, speed)
      .pause(duration);
    return this;
  }

  go() {
    this.next();
  }

  loop(loopGap: number = 0) {
    this.isLoop = true;
    this.queue.push({ type: "pause", duration: loopGap });
    this.index = 0;
    this.next();
  }

  private next() {
    if (this.index >= this.queue.length) {
      if (this.isLoop) {
        this.index = 0;
        this.next();
      }
      return;
    }
    const task = this.queue[this.index];
    switch (task.type) {
      case "type":
        this.typeText(task.text, task.speed, () => {
          this.index++;
          this.next();
        });
        break;
      case "delete":
        this.deleteText(task.length, task.speed, () => {
          this.index++;
          this.next();
        });
        break;
      case "pause":
        setTimeout(() => {
          this.index++;
          this.next();
        }, task.duration);
        break;
    }
  }

  private typeText(text: string, speed: number, callback: () => void) {
    let idx = 0;
    const typeNextChar = () => {
      if (idx >= text.length) {
        callback();
        return;
      }
      console.log("idx", idx);
      this.element.textContent += text.charAt(idx);
      idx++;
      setTimeout(() => typeNextChar(), speed);
    };
    typeNextChar();
  }

  private deleteText(length: number, speed: number, callback: () => void) {
    let idx = this.element.textContent!.length;
    const deleteNextChar = () => {
      if (idx <= 0 || length <= 0) {
        callback();
        return;
      }
      this.element.textContent = this.element.textContent!.slice(0, idx - 1);
      idx--;
      length--;
      setTimeout(() => deleteNextChar(), speed);
    };
    deleteNextChar();
  }
}
