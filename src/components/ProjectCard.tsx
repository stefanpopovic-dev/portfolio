import type { Project } from "@/data/site";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-lg border border-black/10 p-5 transition-colors hover:border-black/25 dark:border-white/10 dark:hover:border-white/25">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-medium">{project.title}</h3>
        <div className="flex shrink-0 gap-3 text-sm text-zinc-500 dark:text-zinc-400">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
              Code
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
              Live
            </a>
          )}
        </div>
      </div>
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-black/[.05] px-2.5 py-1 text-xs text-zinc-600 dark:bg-white/[.08] dark:text-zinc-400"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
