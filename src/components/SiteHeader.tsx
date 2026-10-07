import Link from "next/link";
import { site } from "@/data/site";

const nav = [
  { href: "/", label: "Project", key: "project" },
  { href: "/about", label: "About", key: "about" },
] as const;

const contact = [
  { href: `mailto:${site.email}`, label: site.email },
  { href: site.social.github, label: "GitHub" },
  { href: site.social.linkedin, label: "LinkedIn" },
  { href: site.social.resume, label: "Resume" },
].filter((link) => link.href);

export default function SiteHeader({ active }: { active?: (typeof nav)[number]["key"] }) {
  return (
    <header id="top" className="px-5 pt-6 pb-12 sm:px-8 sm:pt-8 sm:pb-16">
      <div className="flex items-baseline justify-between gap-6">
        {/* Like the logo on eyyy.design, the name leads to the about/contact page. */}
        <Link href="/about" className="text-2xl font-semibold tracking-tight hover:opacity-50 sm:text-3xl">
          {site.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex gap-5 text-sm">
            {nav.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  aria-current={active === item.key ? "page" : undefined}
                  className="text-muted hover:text-foreground aria-[current=page]:text-foreground aria-[current=page]:underline aria-[current=page]:underline-offset-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-3 text-sm leading-5 text-muted">
        <p>
          {site.title}, {site.school}
        </p>
        <p className="wrap-anywhere">
          {site.location}
          {contact.map((link) => (
            <span key={link.label}>
              {" · "}
              <a
                href={link.href}
                className="hover:text-foreground"
                {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
              >
                {link.label}
              </a>
            </span>
          ))}
        </p>
      </div>
    </header>
  );
}
