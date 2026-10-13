import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/site";

export default function ProjectCard({ project, eager = false }: { project: Project; eager?: boolean }) {
  return (
    <Link href={`/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        {project.cover ? (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(max-width: 540px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
            loading={eager ? "eager" : "lazy"}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted">Photos coming soon</div>
        )}
        {/* Always visible (not just on hover) so touch screens show the card opens a project page. */}
        <span
          aria-hidden
          className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-background/85 text-foreground shadow-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4">
            <path d="M5 11 11 5M6 5h5v5" />
          </svg>
        </span>
      </div>
      <div className="mt-3 text-sm leading-5">
        <p aria-hidden className="overflow-hidden whitespace-nowrap text-muted">
          {"-".repeat(200)}
        </p>
        <h3 className="mt-1 font-medium underline-offset-4 group-hover:underline">{project.title}</h3>
        <ul className="mt-5 text-muted">
          {project.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
