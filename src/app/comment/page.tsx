import { db } from "@/db";
import CommentCard from "./comment-card";

const CommentPage = async () => {
  // const comments = [
  //   {
  //     id: 1,
  //     username: "Kori Sama",
  //     content: "Hello World",
  //     createdAt: new Date(),
  //   },
  //   {
  //     id: 2,
  //     username: "Soyo",
  //     content: "emmmm",
  //     createdAt: new Date(),
  //   },
  //   {
  //     id: 3,
  //     username: "Anno",
  //     content: "Soyorin love",
  //     createdAt: new Date(),
  //   },
  // ];

  const comments = await db.query.comments.findMany({
    with: {
      user: true,
    },
    columns: {
      id: true,
      content: true,
      createdAt: true,
    },
  });

  return (
    <>
      {comments.map((c) => {
        const comment = {
          username: c.user.name,
          content: c.content,
          createdAt: c.createdAt,
        };
        return <CommentCard key={c.id} {...comment} />;
      })}
    </>
  );
};

export default CommentPage;
