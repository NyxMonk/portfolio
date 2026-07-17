import Reveal from "./Reveal";

export default function Perspective() {
  return (
    <section id="perspective" className="relative py-32 md:py-48 bg-mist">
      <div className="container-edit">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[13px] tracking-[0.06em] text-stone">Perspective</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-10 text-2xl md:text-4xl lg:text-[2.75rem] font-light leading-[1.35] tracking-[-0.01em] text-ink">
              I believe good software isn&apos;t measured by the amount of
              code behind it, but by how naturally it solves real problems.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 text-base md:text-lg leading-relaxed text-graphite">
              Every project is an opportunity to build something reliable,
              maintainable and meaningful — while becoming a better engineer.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
