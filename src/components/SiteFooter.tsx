import { site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="mt-auto flex flex-wrap items-baseline justify-between gap-4 border-t border-line px-5 py-6 text-sm text-muted sm:px-8">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <a href="#top" className="hover:text-foreground">
        Back to top
      </a>
    </footer>
  );
}
