import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getProject, projects } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  const details = [
    { label: "Context", value: project.context },
    { label: "Period", value: project.period },
    { label: "Tools", value: project.tools.join(", ") },
  ];

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-5 sm:px-8">
        <Link href="/" className="text-sm text-muted hover:text-foreground">
          ← All projects
        </Link>

        <article className="mt-8">
          <header className="grid gap-x-5 gap-y-8 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <p className="text-sm text-muted">{project.category}</p>
              <h1 className="mt-2 max-w-4xl text-3xl leading-tight tracking-tight sm:text-5xl sm:leading-tight">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-snug sm:text-xl">{project.summary}</p>
            </div>
            <dl className="space-y-3 text-sm leading-5 lg:pt-7">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-muted">{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
              {project.repo && (
                <div>
                  <dt className="text-muted">Source</dt>
                  <dd>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-60">
                      GitHub repository
                    </a>
                  </dd>
                </div>
              )}
              {project.link && (
                <div>
                  <dt className="text-muted">Link</dt>
                  <dd>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-60">
                      View project
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </header>

          <section aria-label="Highlights" className="mt-14 grid gap-x-5 gap-y-4 border-t border-line pt-6 text-sm leading-6 lg:grid-cols-4">
            <h2 className="text-muted">Highlights</h2>
            <ol className="space-y-4 lg:col-span-3 lg:max-w-3xl">
              {project.highlights.map((highlight, i) => (
                <li key={highlight} className="grid grid-cols-[2rem_1fr]">
                  <span className="text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ol>
          </section>

          <section aria-label="Images" className="mt-14">
            {project.gallery.length > 0 ? (
              <div className="space-y-5">
                {project.gallery.map((row, r) => (
                  <div key={r} className="flex flex-col gap-5 sm:flex-row">
                    {row.map((image) => (
                      // flex-grow by aspect ratio gives every image in the row the same height
                      <figure key={image.src} className="min-w-0" style={{ flex: `${image.width / image.height} 1 0%` }}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          sizes={`(min-width: 640px) ${Math.round(100 / row.length)}vw, 100vw`}
                          className="w-full bg-surface"
                          loading={r === 0 ? "eager" : "lazy"}
                        />
                        {image.caption && <figcaption className="mt-2 text-sm text-muted">{image.caption}</figcaption>}
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex aspect-[16/9] items-center justify-center bg-surface text-sm text-muted">
                Photos coming soon
              </div>
            )}
          </section>
        </article>

        <nav aria-label="Next project" className="mt-24 border-t border-line py-10">
          <p className="text-sm text-muted">Next project</p>
          <Link href={`/${next.slug}`} className="mt-2 inline-block text-2xl tracking-tight hover:opacity-60 sm:text-4xl">
            {next.title} →
          </Link>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
