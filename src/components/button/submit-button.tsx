import { ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SubmitButton = ({
  className,
  pending,
  children,
}: {
  className?: string;
  pending?: boolean;
  children?: ReactElement;
}) => {
  return (
    <Button
      className={cn(
        "disabled:bg-accent-foreground disabled:cursor-not-allowed",
        className
      )}
      type="submit"
      disabled={pending ?? false}
    >
      {children ? children : "Submit"}
    </Button>
  );
};

export default SubmitButton;
