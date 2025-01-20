import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button className={twMerge("px-4 py-2 bg-white text-black rounded hover:bg-white/60", className)} onClick={onClick}>
      {children}
    </button>
  );
}