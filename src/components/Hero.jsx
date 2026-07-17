import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
  id="top"
  className="relative min-h-[100svh] flex flex-col justify-center pt-20 md:pt-24"
>
      <div className="container-edit w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="text-[26px] md:text-[42px] font-light leading-tight tracking-[-0.02em] text-ink"
        >
        <>
          More than
          <br />
          a developer.
          </>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32, ease }}
          className="mt-4 text-[18px] md:text-[24px] font-light leading-relaxed tracking-[-0.01em] text-stone"
        >
          Not built to impress. Built to last.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease }}
          className="mt-14 md:mt-16 font-light text-ink leading-none tracking-[-0.03em] text-[clamp(4rem,8vw,7rem)]"
        >
          Navyam Gupta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease }}
          className="mt-12 md:mt-14 max-w-sm text-[17px] md:text-[20px] leading-[1.8] text-graphite"
        >
          Building thoughtful software with a focus on simplicity, reliability
          and long-term impact.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.15, ease }}
          onClick={() => {
  const el = document.querySelector("#work");
  if (!el) return;

  const top =
    el.getBoundingClientRect().top +
    window.pageYOffset - 
    -80; // same offset as navbar

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}}
          className="group mt-8 md:mt-10 flex items-center gap-2 text-[13px] tracking-[0.04em] text-stone hover:text-ink transition-colors duration-300"
        >
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">
            ↓
          </span>
          <span>Explore Work</span>
        </motion.button>
      </div>
    </section>
  );
}
