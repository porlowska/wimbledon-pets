"use client";
import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  className?: string;
  w: number;
  h: number;
};

const Logo = ({ className, w, h }: LogoProps) => {
  return (
    <>
      <Link
        href="/"
        className={`${className} flex items-center  font-semibold text-xl md:text-3xl`}
      >
        <Image
          src="/logo.png"
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
