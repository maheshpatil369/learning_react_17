import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading,
  ...props
}) => {
  const baseStyles = "w-full py-2 px-4 rounded-md font-medium transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50";
  const variants = {
    primary: "bg-blue-550 text-white hover:bg-blue-650",
    secondary: "bg-gray-xxx200 text-gray-700 hover:bg-gray-300"
  };

  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
        </div>
      ) : (
        children
      )}
    </button>
  );
}