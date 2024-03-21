import { Skeleton } from "../ui/skeleton";

// TODO! make it prettier

const LoadingCard = () => {
  return (
    <div className="w-4/5 lg:w-1/3 h-[150px] flex flex-col">
      <Skeleton className="h-8 w-1/4 mb-6" />
      <Skeleton className="h-1/2 w-full" />
    </div>
  );
};

export default LoadingCard;
