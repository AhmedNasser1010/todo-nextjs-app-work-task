interface CustomButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';
}

// const variantStyles: Record<string, string> = {
//   primary: 'bg-blue-500 text-white hover:bg-blue-600',
//   secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
//   destructive: 'bg-red-500 text-white hover:bg-red-600',
//   outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100',
//   ghost: 'text-blue-500 hover:bg-blue-100',
// };

const variantStyles: Record<string, string> = {
  primary: 'bg-jade-500 text-white hover:bg-jade-600',
  secondary: 'bg-jade-200 text-jade-800 hover:bg-jade-300',
  destructive: 'bg-red-500 text-white hover:bg-red-600',
  outline: 'border border-jade-300 text-jade-800 hover:bg-jade-100',
  ghost: 'text-jade-500 hover:bg-jade-100',
};

const Button: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  variant = 'primary',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick(e as any);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`cursor-pointer inline-flex items-center justify-center rounded-md px-4 py-2 transition duration-200 ease-in-out ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button;
