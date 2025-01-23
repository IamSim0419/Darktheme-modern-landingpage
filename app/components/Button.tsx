import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button className={twMerge("px-4 py-2 font-medium bg-gradient-to-r from-gray-500 to-gray-50 text-black rounded-md", className)} onClick={onClick}>
      {children}
    </button>
  );
}