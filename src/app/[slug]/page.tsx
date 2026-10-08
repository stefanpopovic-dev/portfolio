import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import ProjectGallery from "@/components/ProjectGallery";
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

  const others = projects.filter((p) => p.slug !== project.slug);
  const details = [
    { label: "Context", value: project.context },
    { label: "Period", value: project.period },
    { label: "Tools", value: project.tools.join(", ") },
  ];

  return (
    <>
      <SiteHeader active="project" />
      <main className="page-in px-5 sm:px-8">
        <article>
          <h1 className="max-w-5xl text-3xl leading-tight tracking-tight sm:text-5xl sm:leading-tight">{project.title}</h1>

          <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-8 text-sm leading-5 min-[541px]:grid-cols-2">
            <div>
              <p aria-hidden className="overflow-hidden whitespace-nowrap text-muted">
                {"-".repeat(200)}
              </p>
              <p className="mt-1 font-medium">{project.category}</p>
              <ul className="mt-5 text-muted">
                {project.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-base leading-snug sm:text-lg sm:leading-snug">{project.summary}</p>
              <dl className="mt-6 space-y-3">
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
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-50">
                        GitHub repository
                      </a>
                    </dd>
                  </div>
                )}
                {project.link && (
                  <div>
                    <dt className="text-muted">Link</dt>
                    <dd>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-50">
                        View project
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>

          {/* Text on the left, photos on the right; on wide screens the text stays in view while the photos scroll. */}
          <div className="mt-14 grid grid-cols-1 gap-x-5 gap-y-12 border-t border-line pt-6 lg:grid-cols-2">
            <div className="space-y-12 text-sm leading-6 lg:sticky lg:top-8 lg:self-start lg:pr-8">
              {project.writeup && (
                <section aria-label="Overview">
                  <h2 className="text-muted">Overview</h2>
                  <div className="mt-4 space-y-4">
                    {project.writeup.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              )}

              {project.highlights.length > 0 && (
                <section aria-label="Highlights">
                  <h2 className="text-muted">Highlights</h2>
                  <ol className="mt-4 space-y-4">
                    {project.highlights.map((highlight, i) => (
                      <li key={highlight} className="grid grid-cols-[2rem_1fr]">
                        <span className="text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}
            </div>

            <section aria-label="Photos">
              <h2 className="text-sm leading-6 text-muted">{project.gallery.flat().some((item) => item.video) ? "Photos & video" : "Photos"}</h2>
              <div className="mt-4">
                {project.gallery.length > 0 ? (
                  <ProjectGallery rows={project.gallery} />
                ) : (
                  <div className="flex aspect-[4/3] items-center justify-center bg-surface text-sm text-muted">Photos coming soon</div>
                )}
              </div>
            </section>
          </div>
        </article>

        <section aria-label="More projects" className="mt-24 border-t border-line pt-6">
          <h2 className="text-sm text-muted">More projects</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-5 gap-y-14 min-[541px]:grid-cols-2">
            {others.map((other) => (
              <ProjectCard key={other.slug} project={other} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
