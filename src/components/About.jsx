import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32 ">
      <div className="container-edit max-w-5xl">
        <Reveal>
          <p className="text-3xl md:text-5xl font-light tracking-[-0.03em] text-ink">
            About
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-10 max-w-3xl text-base md:text-lg leading-[1.9] text-graphite">
            I'm a developer driven by curiosity and a desire to build software
            that's simple, reliable, and built to last. Every project is an
            opportunity to learn, improve, and solve meaningful problems.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="mt-10 max-w-3xl text-base md:text-lg leading-[1.9] text-graphite">
            When I'm not coding, you'll find me exploring new technologies, 
            playing a sport, hiking up a mountain, or reading about weird things.
          </p>
        </Reveal>
      </div>
    </section>
  );
}