import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#build" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href) => {
  setOpen(false);

  const el = document.querySelector(href);
  if (!el) return;

  let offset = 0;

  if (href === "#about") offset = -130;     
  if (href === "#work") offset = -80;   
  if (href === "#build") offset = 79640; 

  const top =
    el.getBoundingClientRect().top + window.pageYOffset + offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

  return (
    <>
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
            scrolled
              ? "bg-paper"
              : "bg-transparent"
          }`}
        >
        <nav className="container-edit flex items-center justify-between h-20 md:h-24">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#top");
            }}
            className="text-[17px] font-medium tracking-normal text-ink"
          >
            Navyam Gupta
          </a>

          <ul className="hidden md:flex items-center gap-12">
            {LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-[15px] tracking-[0.04em] text-stone hover:text-ink transition-colors duration-300"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="https://drive.google.com/file/d/1gDTZMhi5HNZwkOz90jvckpYhevTQ3NfT/view?usp=sharing"
              className="text-[15px] tracking-[0.04em] text-stone hover:text-ink transition-colors duration-300"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-[13px] tracking-[0.04em] text-ink"
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-paper md:hidden flex flex-col justify-center"
          >
            <ul className="container-edit flex flex-col gap-6">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-4xl font-light tracking-tight text-ink"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * LINKS.length, ease: [0.16, 1, 0.3, 1] }}
                className="pt-4"
              >
                <a href="https://drive.google.com/file/d/1gDTZMhi5HNZwkOz90jvckpYhevTQ3NfT/view?usp=sharing" className="text-lg text-stone">
                  Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
