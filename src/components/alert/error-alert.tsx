import { BiError } from "react-icons/bi";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ReactElement } from "react";

const AlertError = ({ children }: { children: ReactElement }) => {
  return (
    <Alert variant="destructive">
      <BiError className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export default AlertError;
