import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  w: number;
  h: number;
};

const Logo = ({ w, h }: LogoProps) => {
  return (
    <>
      <Link
        href="/"
        className="flex items-center text-gray-900 font-semibold text-xl md:text-3xl"
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
