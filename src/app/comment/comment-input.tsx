"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { sendComment } from "./action";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { useState } from "react";
import { DrawerClose } from "@/components/ui/drawer";
import Link from "next/link";
import SubmitButton from "@/components/button/submit-button";

const CommentInput = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState("");
  const [value, setValue] = useState("");
  const [submitting, setSubmitting] = useState(false);

  return (
    <div
      className={cn(
        "lg:w-[400px] border-2 w-full shadow-md p-4 rounded-lg",
        className
      )}
    >
      <Dialog open={open}>
        <form
          onSubmit={() => {
            setSubmitting(true);
            setErr("");
            setValue("");
          }}
          action={async (formData) => {
            const comment = formData.get("comment") as string;
            if (!comment) {
              setErr("Comment cannot be empty");
              setSubmitting(false);
              return;
            }
            const msg = await sendComment(comment);
            if (msg === "NoLogin") {
              setOpen(true);
              setErr("You are not logged in");
            } else if (msg === "NoUser") {
              setErr("User not found");
            }
            setSubmitting(false);
          }}
          className="flex flex-col gap-4 items-end"
        >
          <Textarea
            placeholder="comment"
            name="comment"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="h-28"
          />
          <div className="flex justify-between w-full">
            {err ? <p className="text-red-500">{err}</p> : <div />}
            <DrawerClose asChild>
              <SubmitButton className="lg:w-auto w-1/3" pending={submitting} />
            </DrawerClose>
          </div>
        </form>
        <DialogContent>
          <DialogHeader>
            You are not logged in. Please log in to comment.
          </DialogHeader>
          <DrawerClose asChild>
            <DialogFooter>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                No, thanks
              </Button>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className={buttonVariants()}
              >
                Login
              </Link>
            </DialogFooter>
          </DrawerClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CommentInput;
