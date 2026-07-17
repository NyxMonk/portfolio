import { motion } from "framer-motion";

// A quiet, consistent scroll reveal: fade + a few pixels of upward drift.
// Nothing bounces, nothing overshoots.
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 14,
  className = "",
  once = true,
  amount = 0.3,
}) {
  const Comp = motion[as] || motion.div;

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  );
}
