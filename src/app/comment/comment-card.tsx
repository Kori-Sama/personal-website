import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CommentProps = {
  username: string;
  content: string;
  createdAt: Date;
  className?: string;
};

const CommentCard = ({
  username,
  content,
  createdAt,
  className,
}: CommentProps) => {
  return (
    <Card
      className={cn(
        "rounded-lg px-6 py-2 flex flex-col gap-2 w-full md:w-2/3 lg:w-1/2",
        className
      )}
    >
      <CardTitle className="text-lg">{username}</CardTitle>
      <CardDescription className="text-sm">
        {createdAt.toLocaleString("zh")}
      </CardDescription>
      <CardContent className="px-0 mt-4">{content}</CardContent>
    </Card>
  );
};

export default CommentCard;
