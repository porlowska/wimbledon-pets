"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { TbSquareLetterR } from "react-icons/tb";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/wimbledon.pets/",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/wimbledon_pets/",
    icon: FaInstagram,
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/+447494532324",
    icon: FaWhatsapp,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/watch?v=rjiWa2QsIqY&feature=youtu.be",
    icon: FaYoutube,
  },
  {
    name: "Trustpilot",
    href: "https://uk.trustpilot.com/review/wimbledon-pets.co.uk",
    icon: SiTrustpilot,
  },
  {
    name: "Rover",
    href: "https://www.rover.com/members/paulina-o-welcome-you-with-open-paws-when-you-cant-be-there/",
    icon: TbSquareLetterR,
  },
];

const SocialLinks = ({ className }: any) => {
  return (
    <>
      <div className={`${className} flex justify-center gap-x-10`}>
        {socials.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-whiteish hover:text-secondary"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon aria-hidden="true" className="h-6 w-6" />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
