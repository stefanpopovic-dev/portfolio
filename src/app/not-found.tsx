import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="page-in px-5 sm:px-8">
        <h1 className="text-3xl tracking-tight sm:text-5xl">Page not found</h1>
        <Link href="/" className="mt-6 inline-block text-sm text-muted underline underline-offset-4 hover:text-foreground">
          Back to projects
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
