import { ScrollArea } from "@/components/ui/scroll-area";
import CommentCard from "./comment-card";

export type CommentType = {
  id: number;
  content: string;
  createdAt: Date;
  user: {
    id: number;
    name: string;
  };
};

type CommentContentProps = {
  comments: CommentType[];
};

const CommentContent = ({ comments }: CommentContentProps) => {
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
