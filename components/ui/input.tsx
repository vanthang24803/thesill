import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [isValid, setIsValid] = React.useState(true);
    const handleInvalid = () => setIsValid(false);
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 text-base font-medium w-full rounded-sm border border-input bg-background px-3 py-1  shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          !isValid && "border-red-500",
          className
        )}
        ref={ref}
        onInvalid={handleInvalid}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
