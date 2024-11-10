type ButtonProps = {
  className?: string;
  variant?: number;
  text: string;
  handleClick: () => void;
};
const Button = ({ className, variant, text, handleClick }: ButtonProps) => {
  if (variant === 1) {
    className = `${className} bg-priamry text-whiteish hover:bg-emerald-700 focus-visible:outline-primary`;
  } else if (variant === 2) {
    className = `${className} bg-secondary text-whiteish hover:bg-rose-400 focus-visible:outline-secondary`;
  }

  return (
    <button
      type="button"
      className={` ${className} rounded-lg px-4 py-2.5 text-md font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
