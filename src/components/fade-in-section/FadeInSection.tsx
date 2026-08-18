import { useEffect, useRef } from "react";
import './FadeInSection.css'

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
        if (entry.intersectionRatio > 0.3) {
          entry.target.classList.add("visible");
        }

        if (entry.intersectionRatio === 0) {
          entry.target.classList.remove("visible");
        }
      },
      {
        threshold: [0, 0.3, 1],
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
