import ProjectCard from "@/components/ProjectCard";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { projects } from "@/data/site";

export default function Home() {
  return (
    <>
      <SiteHeader active="project" />
      <main className="page-in px-5 sm:px-8">
        <section aria-labelledby="projects-heading" className="border-t border-line pt-6">
          <div className="flex items-baseline justify-between text-sm text-muted">
            <h2 id="projects-heading">Projects</h2>
            <span className="tabular-nums">{String(projects.length).padStart(2, "0")}</span>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-5 gap-y-14 min-[541px]:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} eager={index < 2} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
