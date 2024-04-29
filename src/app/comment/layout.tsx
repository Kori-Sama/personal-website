import { ReactElement } from "react";

const CommentLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="flex flex-col space-y-4 px-8 items-center justify-center">
      {/* <div className="h-20" /> */}
      {children}
    </div>
  );
};

export default CommentLayout;
