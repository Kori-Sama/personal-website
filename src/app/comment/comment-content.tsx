"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import CommentCard from "./comment-card";
import { CommentType, useComments } from "@/store/comments";
import { useEffect } from "react";

type CommentContentProps = {
  initComments: CommentType[];
};

const CommentContent = ({ initComments }: CommentContentProps) => {
  const setComments = useComments((s) => s.setComments);
  const comments = useComments((s) => s.comments);

  useEffect(() => {
    setComments(initComments);
  }, []);

  return (
    <ScrollArea className="w-fit">
      <div className="flex flex-col gap-4 items-center mb-6 mt-20">
        {comments.length !== 0 ? (
          comments.map((c) => {
            const comment = {
              username: c.user.name,
              content: c.content,
              createdAt: c.createdAt,
            };
            return <CommentCard key={c.id} {...comment} />;
          })
        ) : (
          <h1 className="text-4xl">There is no comments</h1>
        )}
      </div>
    </ScrollArea>
  );
};

export default CommentContent;
