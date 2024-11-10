"use client";
import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  w: number;
  h: number;
  variant?: number | null;
  className?: string;
};

const Logo = ({ w, h, variant, className }: LogoProps) => {
  let logo = "/black-logo.png";
  if (variant === 1) {
    logo = "/white-logo.png";
    className = `${className} text-whiteish`;
  } else if (variant === 2) {
    className = `${className} text-black`;
  }
  return (
    <>
      <Link
        href="/"
        className={`${className} flex items-center  font-semibold text-xl md:text-3xl`}
      >
        <Image
          src={logo}
          alt="Wimbledon Pets Logo"
          width={w}
          height={h}
          priority
        />
        <span>Wimbledon Pets</span>
      </Link>
    </>
  );
};

export default Logo;
