import SelfCard from "@/components/card/self-card";

const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="h-20" />
      <main>
        <div className="flex flex-col items-center justify-center gap-10 rounded-md p-4">
          {children}
        </div>
        <SelfCard className="fixed left-[75%] top-[30%] invisible lg:visible" />
      </main>
    </>
  );
};

export default BlogLayout;
