import BlogCard from "@/components/blog/blog-card";
import SelfCard from "@/components/blog/self-card";

const blogs = [
  {
    id: 1,
    title: "Hello World",
    author: "Kori",
    content:
      "This is a blog post. It's a very good blog post. It's the best blog post. Kori Sama suki desu. Daisuki desu.",
    createAt: "2022-01-01",
    updatedAt: "2022-01-01",
  },
  {
    id: 2,
    title: "Hello World",
    author: "Kori",
    content:
      "This is a blog post. It's a very good blog post. It's the best blog post. Kori Sama suki desu. Daisuki desu.",
    createAt: "2022-01-01",
    updatedAt: "2022-01-01",
  },
  {
    id: 3,
    title: "Hello World",
    author: "Kori",
    content:
      "This is a blog post. It's a very good blog post. It's the best blog post. Kori Sama suki desu. Daisuki desu.",
    createAt: "2022-01-01",
    updatedAt: "2022-01-01",
  },
  {
    id: 4,
    title: "Hello World",
    author: "Kori",
    content: `This is a blog post. It's a very good blog post. It's the best blog post. Kori Sama suki desu. Daisuki desu. Kori Sama suki suki daisuki.
    Kori Sama suki suki daisuki.
    Kori Sama suki suki daisuki.
    Kori Sama suki suki daisuki.
    Kori Sama suki suki daisuki.
    Kori Sama suki suki daisuki.
    Kori Sama suki suki daisuki.
    Kori Sama suki suki daisuki.
    Kori Sama suki suki daisuki.`,
    createAt: "2022-01-01",
    updatedAt: "2022-01-01",
  },
  {
    id: 5,
    title: "Hello World",
    author: "Kori",
    content:
      "This is a blog post. It's a very good blog post. It's the best blog post. Kori Sama suki desu. Daisuki desu.",
    createAt: "2022-01-01",
    updatedAt: "2022-01-01",
  },
  {
    id: 6,
    title: "Hello World",
    author: "Kori",
    content:
      "This is a blog post. It's a very good blog post. It's the best blog post. Kori Sama suki desu. Daisuki desu.",
    createAt: "2022-01-01",
    updatedAt: "2022-01-01",
  },
  {
    id: 7,
    title: "Hello World",
    author: "Kori",
    content:
      "This is a blog post. It's a very good blog post. It's the best blog post. Kori Sama suki desu. Daisuki desu.",
    createAt: "2022-01-01",
    updatedAt: "2022-01-01",
  },
  {
    id: 8,
    title: "Hello World",
    author: "Kori",
    content:
      "This is a blog post. It's a very good blog post. It's the best blog post. Kori Sama suki desu. Daisuki desu.",
    createAt: "2022-01-01",
    updatedAt: "2022-01-01",
  },
  {
    id: 9,
    title: "Hello World",
    author: "Kori",
    content:
      "This is a blog post. It's a very good blog post. It's the best blog post. Kori Sama suki desu. Daisuki desu.",
    createAt: "2022-01-01",
    updatedAt: "2022-01-01",
  },
  {
    id: 10,
    title: "Hello World",
    author: "Kori",
    content:
      "This is a blog post. It's a very good blog post. It's the best blog post. Kori Sama suki desu. Daisuki desu.",
    createAt: "2022-01-01",
    updatedAt: "2022-01-01",
  },
];

const BlogPage = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center gap-10 rounded-md p-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
      <SelfCard className="fixed right-[8%] top-[30%] invisible lg:visible" />
    </main>
  );
};

export default BlogPage;
