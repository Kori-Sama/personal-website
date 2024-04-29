import { db } from "@/db";
import CommentCard from "./comment-card";
import CommentInput from "./comment-input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const CommentPage = async () => {
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
    <div className="flex flex-col h-screen items-center">
      <Drawer>
        <ScrollArea className="w-full md:w-4/5 lg:w-1/2">
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
        <CommentInput className="fixed left-[75%] bottom-[40%] lg:block hidden" />
        <DrawerTrigger className="block lg:hidden" asChild>
          <Button variant="secondary" className="my-2">
            Comment
          </Button>
        </DrawerTrigger>
        <DrawerContent className="block lg:hidden">
          <CommentInput className="border-0 shadow-none w-full" />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CommentPage;
