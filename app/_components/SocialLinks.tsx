import Link from "next/link";
import { socials } from "../_data/socials";

type linksProps = {
  divClassName?: string;
  iconClassName: string;
  variant?: "review" | "social" | null;
};
const SocialLinks = ({ divClassName, iconClassName, variant }: linksProps) => {
  let socialLinks = socials;

  if (variant === "review") {
    socialLinks = socials.slice(4);
  } else if (variant === "social") {
    socialLinks = socials.slice(0, 2);
  }
  return (
    <>
      <div className={`${divClassName} flex justify-center gap-x-10`}>
        {socialLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={iconClassName}
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
