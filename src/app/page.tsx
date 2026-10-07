import ProjectCard from "@/components/ProjectCard";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { projects } from "@/data/site";

export default function Home() {
  return (
    <>
      <SiteHeader active="project" />
      <main className="page-in px-5 sm:px-8">
        <section aria-label="Projects" className="grid grid-cols-1 gap-x-5 gap-y-14 min-[541px]:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} eager={index < 2} />
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
