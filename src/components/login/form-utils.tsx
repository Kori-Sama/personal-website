import { cn } from "@/lib/utils";
import { User, Lock, RectangleEllipsis, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface FieldWrapperProps {
  className?: string;
  children: React.ReactNode;
  icon: "username" | "password" | "confirm";
}

export const FieldWrapper = ({
  className,
  children,
  icon,
}: FieldWrapperProps) => {
  let iconComponent: ReactNode;
  switch (icon) {
    case "username":
      iconComponent = <User />;
      break;
    case "password":
      iconComponent = <Lock />;
      break;
    case "confirm":
      iconComponent = <RectangleEllipsis />;
      break;
  }
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {iconComponent}
      {children}
      <div className="w-[24px]" />
    </div>
  );
};
