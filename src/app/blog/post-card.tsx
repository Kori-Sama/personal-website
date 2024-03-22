import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export interface PostProps {
  id: number;
  title: string;
  author: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const PostCard = ({ id, title, author, createdAt, content }: PostProps) => {
  const contentLimit = 300;
  return (
    <Link
      href={`/blog/${id}`}
      className="w-4/5 cursor-pointer shadow-md lg:w-1/3"
    >
      <Card className="hover:border-gray-700 dark:hover:border-white">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="flex justify-between text-lg">
            <sub>{createdAt}</sub>
            <sub>By {author}</sub>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3">{content.slice(0, contentLimit)}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
export default PostCard;
