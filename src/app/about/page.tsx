import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { education, experience, site, skills } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <SiteHeader active="about" />
      <main className="page-in px-5 sm:px-8">
        <p className="max-w-4xl text-2xl leading-tight tracking-tight sm:text-4xl sm:leading-tight">{site.intro}</p>

        <div className="mt-16 space-y-10 border-t border-line pt-10 text-sm leading-6 sm:mt-24">
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
            <ul>
              <li>
                <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:opacity-50">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.social.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-50">
                  GitHub
                </a>
              </li>
              {site.social.linkedin && (
                <li>
                  <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-50">
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </InfoRow>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-1 gap-x-5 gap-y-2 min-[541px]:grid-cols-2 lg:grid-cols-4">
      <h2 className="text-muted">{label}</h2>
      <div className="lg:col-span-3">{children}</div>
    </section>
  );
}
