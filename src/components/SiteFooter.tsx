import { site } from "@/data/site";
import BackToTopButton from "./BackToTopButton";

export default function SiteFooter() {
  return (
    <>
      <section className="mt-auto px-5 pt-24 pb-6 text-center text-sm sm:px-8">
        <a href="#top" className="hover:opacity-50">
          ↑ Go to Top
        </a>
      </section>
      <footer className="px-5 pb-8 text-center text-sm text-muted sm:px-8">
        (c) {site.name}, {new Date().getFullYear()}
      </footer>
      <BackToTopButton />
    </>
  );
}
