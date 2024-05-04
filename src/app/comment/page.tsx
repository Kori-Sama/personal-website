import { db } from "@/db";
import CommentInput from "./comment-input";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import CommentContent, { CommentType } from "./comment-content";

const CommentPage = async () => {
  const comments = (await db.query.comments.findMany({
    with: {
      user: {
        columns: {
          id: true,
          name: true,
        },
      },
    },
    columns: {
      id: true,
      content: true,
      createdAt: true,
    },
  })) as CommentType[];

  return (
    <Drawer>
      <div className="flex flex-col items-center h-screen">
        <CommentContent comments={comments.reverse()} />
        <CommentInput className="fixed left-[75%] bottom-[40%] lg:block hidden" />
        <DrawerTrigger className="block lg:hidden" asChild>
          <Button variant="default" className="my-2  mb-6">
            Comment
          </Button>
        </DrawerTrigger>
        <DrawerContent className="block lg:hidden">
          <CommentInput className="border-0 shadow-none w-full" />
        </DrawerContent>
      </div>
    </Drawer>
  );
};

export default CommentPage;
