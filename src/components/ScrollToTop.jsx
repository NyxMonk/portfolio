import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={`
        fixed bottom-8 right-8 z-50
        h-12 w-12 rounded-full
        bg-ink text-paper
        shadow-lg
        flex items-center justify-center
        transition-all duration-300
        hover:-translate-y-1 hover:scale-105
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      <FaArrowUp size={15} />
    </button>
  );
}