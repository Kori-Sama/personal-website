import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ReactElement } from "react";
import { GrStatusGood } from "react-icons/gr";

const AlertSuccess = ({ children }: { children: ReactElement }) => {
  return (
    <Alert variant="destructive">
      <GrStatusGood className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export default AlertSuccess;
