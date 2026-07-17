import Reveal from "./Reveal";
import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";

export default function SelectedWork() {
  return (
    <section id="work" className="relative pt-16 pb-24 md:pt-20 md:pb-28">
      <div className="container-edit">
        <Reveal>
          <p className="text-3xl md:text-5xl font-light tracking-[-0.03em] text-ink">Projects</p>
        </Reveal>
      </div>

      <div className="mt-8 md:mt-12 border-t border-hairline">
        {projects.map((project, i) => (
          <article
  key={project.number}
  className="group container-edit border-b border-hairline py-16 md:py-24 transition-colors duration-500 hover:bg-stone-50  "
>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
              <Reveal
                as="div"
                delay={0.05}
                className="md:col-span-2 flex md:block items-baseline gap-4"
              >
                <span className="text-2xl md:text-3xl font-light tabular-nums text-ash transition-colors duration-500 group-hover:text-ink">{project.number}</span>
              </Reveal>

              <div className="md:col-span-10">
                <Reveal delay={0.1}>
  <div className="flex items-start justify-between gap-8 max-w-5xl">

    <h3 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] leading-[1.05] text-ink">
      {project.title}
    </h3>

    <a
      href={project.links[0].href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-3 shrink-0"
      aria-label="GitHub Repository"
    >
      <FaGithub
        size={26}
        className="text-stone transition-all duration-300 group-hover:text-ink group-hover:scale-110"
      />
    </a>

  </div>
</Reveal>

                <Reveal delay={0.18}>
                  <p className="mt-8 max-w-xl text-[15px] md:text-base leading-relaxed text-graphite">
                    {project.description}
                  </p>
                </Reveal>

                <Reveal delay={0.3}>
  <div className="mt-6">

    {/* Tech Stack */}
    <ul className="flex flex-wrap items-center gap-4 text-[14px] text-stone">
      {project.stack.map((tech, idx) => (
        <li key={tech} className="flex items-center gap-4">
          {tech}
          {idx < project.stack.length - 1 && (
            <span className="opacity-40">•</span>
          )}
        </li>
      ))}
    </ul>

  </div>
</Reveal>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
