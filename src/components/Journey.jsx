import Reveal from "./Reveal";

export default function Journey() {
  return (
    <section id="journey" className="relative py-32 md:py-48">
      <div className="container-edit">
        <Reveal>
          <p className="text-[13px] tracking-[0.06em] text-stone">Journey</p>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <Reveal delay={0.08} className="md:col-span-3">
            <p className="text-sm text-ash">2025 — Present</p>
          </Reveal>

          <div className="md:col-span-9">
            <Reveal delay={0.14}>
              <h3 className="text-3xl md:text-5xl font-light tracking-[-0.02em] text-ink">
                Software Engineering Intern
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-base text-stone italic">
                Company name — placeholder
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="mt-8 max-w-xl text-[15px] md:text-base leading-relaxed text-graphite">
                Contributing to production systems, collaborating across
                design and engineering, and learning what it takes to build
                software that holds up over time.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
