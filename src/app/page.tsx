import ProjectCard from "@/components/ProjectCard";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { education, experience, projects, site, skills } from "@/data/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="px-5 pb-16 sm:px-8 sm:pb-24">
          <p className="max-w-4xl text-2xl leading-tight tracking-tight sm:text-4xl sm:leading-tight">{site.intro}</p>
        </section>

        <section aria-label="Projects" className="px-5 sm:px-8">
          <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="info" className="mt-24 scroll-mt-6 border-t border-line px-5 py-12 text-sm leading-6 sm:mt-32 sm:px-8">
          <div className="grid gap-x-5 gap-y-10 lg:grid-cols-4">
            <h2 className="font-medium">Info</h2>

            <div className="space-y-10 lg:col-span-3">
              <InfoRow label="Education">
                <p>{education.school}</p>
                <p className="text-muted">
                  {education.degree}, {education.detail}
                </p>
                <p className="text-muted">
                  {education.period}, {education.location}
                </p>
              </InfoRow>

              <InfoRow label="Experience">
                <ul className="space-y-4">
                  {experience.map((job) => (
                    <li key={job.org}>
                      <p>{job.org}</p>
                      <p className="text-muted">{job.role}</p>
                      <p className="text-muted">
                        {job.period}, {job.location}
                      </p>
                    </li>
                  ))}
                </ul>
              </InfoRow>

              <InfoRow label="Skills">
                <dl className="space-y-2">
                  {skills.map((group) => (
                    <div key={group.category} className="grid gap-x-5 sm:grid-cols-[10rem_1fr]">
                      <dt>{group.category}</dt>
                      <dd className="text-muted">{group.items.join(", ")}</dd>
                    </div>
                  ))}
                </dl>
              </InfoRow>

              <InfoRow label="Contact">
                <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:opacity-60">
                  {site.email}
                </a>
              </InfoRow>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-x-5 gap-y-2 sm:grid-cols-3">
      <h3 className="text-muted">{label}</h3>
      <div className="sm:col-span-2">{children}</div>
    </div>
  );
}
