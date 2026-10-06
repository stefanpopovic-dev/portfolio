import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/site";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        {project.cover ? (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.02] group-hover:opacity-90"
            loading={index < 3 ? "eager" : "lazy"}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted">Photos coming soon</div>
        )}
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-4 text-sm leading-5">
        <div>
          <h3 className="font-medium group-hover:opacity-60">{project.title}</h3>
          <p className="text-muted">{project.category}</p>
        </div>
        <p className="shrink-0 text-muted tabular-nums">{project.year}</p>
      </div>
    </Link>
  );
}
