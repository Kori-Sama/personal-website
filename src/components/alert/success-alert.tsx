import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ReactElement } from "react";
import { GrStatusGood } from "react-icons/gr";

const AlertSuccess = ({ children }: { children: ReactElement | string }) => {
  return (
    <Alert variant="success">
      <GrStatusGood className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export default AlertSuccess;
