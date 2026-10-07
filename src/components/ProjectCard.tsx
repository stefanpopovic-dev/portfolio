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
            className="object-cover transition-opacity duration-300 group-hover:opacity-80"
            loading={eager ? "eager" : "lazy"}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted">Photos coming soon</div>
        )}
      </div>
      <div className="mt-3 text-sm leading-5">
        <p aria-hidden className="overflow-hidden whitespace-nowrap text-muted">
          {"-".repeat(200)}
        </p>
        <h3 className="mt-1 font-medium group-hover:opacity-50">{project.title}</h3>
        <ul className="mt-5 text-muted">
          {project.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
