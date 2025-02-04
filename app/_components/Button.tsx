import Link from "next/link";

type ButtonProps = {
  btnType?: "button" | "submit" | "reset";
  isLink: boolean;
  text: string;
  variant?: number;
  className?: string;
  href?: any;
  icon?: any;
  handleClick?: () => void;
};

const Button = ({
  btnType,
  isLink,
  text,
  variant,
  className,
  href,
  icon,
  handleClick,
}: ButtonProps) => {
  if (variant === 1) {
    className = `${className} bg-primary text-whiteish hover:bg-emerald-700 focus-visible:outline-primary`;
  } else if (variant === 2) {
    className = `${className} bg-secondary text-whiteish hover:bg-rose-400 focus-visible:outline-secondary`;
  }

  return (
    <>
      {isLink ? (
        <Link
          href={href}
          className={` ${className} rounded-full px-6 py-2.5 text-md/6 font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
        >
          {text}
        </Link>
      ) : (
        <button
          type={btnType}
          className={` ${className} rounded-lg px-4 py-2.5 text-md font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
          onClick={handleClick}
        >
          {icon}
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
