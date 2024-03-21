const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="w-full h-20" />
      {children}
    </>
  );
};

export default BlogLayout;
