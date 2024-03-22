import PostCard, { PostProps } from "@/app/blog/post-card";
import SelfCard from "@/components/card/self-card";
import { db } from "@/db";
import { posts } from "@/db/schema";

const BlogPage = async () => {
  const res = await db.query.posts.findMany({
    with: {
      author: true,
    },
  });

  return (
    <>
      {res.length !== 0 ? (
        res.map((post) => {
          const p = {
            ...post,
            author: post.author.name,
            createdAt: post.createdAt.toString(),
            updatedAt: post.updatedAt.toString(),
          } as PostProps;
          return <PostCard key={p.id} {...p} />;
        })
      ) : (
        <div className="absolute top-[45%]">
          <h1 className="text-4xl">There is no post</h1>
        </div>
      )}
    </>
  );
};

export default BlogPage;
