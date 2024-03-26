import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

type CommentProps = {
  username: string;
  content: string;
  createdAt: Date;
};

const CommentCard = ({ username, content, createdAt }: CommentProps) => {
  return (
    <Card className="rounded-lg px-4 py-2 flex flex-col gap-2 w-full md:w-2/3 lg:w-1/2">
      <CardTitle>{username}</CardTitle>
      <CardDescription>{createdAt.toLocaleString()}</CardDescription>
      <CardContent className="mt-4">{content}</CardContent>
    </Card>
  );
};

export default CommentCard;
