import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          `
        w-full
        h-14
        rounded-sm 
        bg-[#009A7B]
        border
        border-neutral-300/80
        px-5 
        py-3 
        text-base
        disabled:cursor-not-allowed 
        disabled:opacity-50
        disabled:bg-white
        disabled:text-[009A7B]
        disabled:font-semibold
        text-white
        font-medium
        hover:opacity-75
        transition
      `,
          disabled && "opacity-75 cursor-not-allowed bg-white text-[#009A7B]",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
