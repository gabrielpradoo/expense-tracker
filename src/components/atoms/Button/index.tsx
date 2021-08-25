import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="h-10 px-8 text-white transition-colors delay-200 bg-green-400 rounded-md hover:bg-green-500"
    >
      {children}
    </button>
  );
};
