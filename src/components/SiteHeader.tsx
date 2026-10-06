import Link from "next/link";
import { site } from "@/data/site";

const links = [
  { href: `mailto:${site.email}`, label: site.email },
  { href: site.social.github, label: "GitHub" },
  { href: site.social.linkedin, label: "LinkedIn" },
  { href: site.social.resume, label: "Resume" },
].filter((link) => link.href);

export default function SiteHeader() {
  return (
    <header id="top" className="grid grid-cols-2 gap-x-5 gap-y-4 px-5 pt-5 pb-10 text-sm leading-5 sm:px-8 sm:pt-7 lg:grid-cols-4">
      <div>
        <Link href="/" className="font-medium hover:opacity-60">
          {site.name}
        </Link>
      </div>
      <div className="text-muted">
        <p>{site.title}</p>
        <p>{site.school}</p>
      </div>
      <div className="text-muted">
        <p>{site.location}</p>
        <p>
          <Link href="/#info" className="hover:text-foreground">
            Info
          </Link>
        </p>
      </div>
      <ul className="text-muted wrap-anywhere">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-foreground"
              {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
