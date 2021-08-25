import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputText = ({ label, ...props }: Props) => {
  return (
    <label className="flex flex-col">
      <span className="text-xl font-medium">{label}</span>
      <input
        {...props}
        className="h-10 p-4 border border-gray-400 rounded-md outline-none"
      />
    </label>
  );
};
