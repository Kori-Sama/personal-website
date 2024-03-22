import { ReactElement } from "react";
import { Button } from "@/components/ui/button";

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
    <Button className={className} type="submit" aria-disabled={true}>
      {children ? children : "Submit"}
    </Button>
  );
};

export default SubmitButton;
