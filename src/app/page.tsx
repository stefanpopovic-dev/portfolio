import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects, site, skills } from "@/data/site";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <Navbar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <section className="flex min-h-[70vh] flex-col justify-center gap-6 py-24">
          <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">Hi, I&apos;m</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{site.name}</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">{site.title}</p>
          <p className="max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">{site.tagline}</p>
          <div className="flex gap-4 pt-2 text-sm font-medium">
            <a
              href="#projects"
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-black/10 px-5 py-2.5 transition-colors hover:border-black/25 dark:border-white/15 dark:hover:border-white/30"
            >
              Get in Touch
            </a>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-t border-black/10 py-20 dark:border-white/10">
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">About</h2>
          <p className="mt-4 max-w-2xl leading-7 text-zinc-700 dark:text-zinc-300">{site.bio}</p>
        </section>

        <section id="skills" className="scroll-mt-20 border-t border-black/10 py-20 dark:border-white/10">
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Skills</h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{group.category}</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 border-t border-black/10 py-20 dark:border-white/10">
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Projects</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-black/10 py-20 dark:border-white/10">
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Contact</h2>
          <p className="mt-4 max-w-xl leading-7 text-zinc-700 dark:text-zinc-300">
            I&apos;m always open to new opportunities and conversations. Reach out at{" "}
            <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
          <div className="mt-6 flex gap-5 text-sm font-medium">
            <a href={site.social.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <a href={site.social.resume} className="hover:underline">
              Resume
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 py-8 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
        © {new Date().getFullYear()} {site.name}. Built with Next.js, deployed on Vercel.
      </footer>
    </div>
  );
}
