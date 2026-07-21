import Reveal from "./Reveal";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

const LINKS = [
  {
    label: "Email",
    href: "mailto:navyamgupta22@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    href: "https://github.com/NyxMonk",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/navyam-gupta/",
    icon: FaLinkedin,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1gDTZMhi5HNZwkOz90jvckpYhevTQ3NfT/view?usp=sharing",
    icon: FaFileAlt,
  },
];

export default function LetsBuild() {
  return (
    <section
      id="build"
      className="scroll-mt-24 pt-12 pb-24 md:pt- -100 md:pb-32"
    >
      <div className="container-edit max-w-5xl">

        <Reveal>
          <h2 className="text-3xl md:text-5xl font-light tracking-[-0.03em] text-ink">
  Contact
</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="mt-10 text-2xl md:text-3xl font-light leading-[1.25] tracking-[-0.02em] text-ink">
  Let's build something meaningful.
</h3>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-6 max-w-2xl text-lg leading-[1.8] text-graphite">
            I'm always open to opportunities, collaborations, or simply
            connecting with people who enjoy building great software.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-14 flex flex-wrap gap-4">

            {LINKS.map((link) => {
              const Icon = link.icon;

              return (
                <a
  key={link.label}
  href={link.href}
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-3 border border-hairline px-6 py-4 text-[15px] text-ink transition-all duration-300 hover:bg-ink hover:text-paper"
>
  <Icon className="text-[18px]" />

  <span>{link.label}</span>

  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
    ↗
  </span>
</a>
              );
            })}

          </div>
        </Reveal>

      </div>
    </section>
  );
}