"use client";
import { ShootingStars } from "@/components/background-ui/ShootingStars";
import { StarsBackground } from "@/components/background-ui/StarsBackground";
import './Background.css'

export function StarsBackgroundAnimation() {
  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
