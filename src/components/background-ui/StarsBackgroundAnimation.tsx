"use client";
import { ShootingStars } from "@/components/background-ui/ShootingStars";
import { StarsBackground } from "@/components/background-ui/StarsBackground";
import './Background.css'

export function StarsBackgroundAnimation() {
  return (
    <div className="shooting-stars-wrapper">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
