import { Separator } from "@/components/ui/separator";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <div className="text-[40px] flex justify-center items-center gap-6">
        <p>404</p>
        <Separator orientation="vertical" className="border-foreground" />
        <p>Not Found</p>
      </div>
      {/* <p className="font-light text-foreground/20">You are a loser, haha!</p> */}
    </div>
  );
};
export default NotFound;
