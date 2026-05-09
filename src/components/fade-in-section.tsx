import { useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
}

export default function FadeInSection({
  children,
  direction = "up",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Fade IN when at least 30% visible
        if (entry.intersectionRatio > 0.3) {
          entry.target.classList.add("visible");
        }

        // Fade OUT only when completely out of view
        if (entry.intersectionRatio === 0) {
          entry.target.classList.remove("visible");
        }
      },
      {
        threshold: [0, 0.3, 1], // multiple thresholds prevent flicker
        rootMargin: "0px 0px -5% 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-${direction}-section`}>
      {children}
    </div>
  );
}
