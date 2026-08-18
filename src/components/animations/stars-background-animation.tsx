"use client";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
export function StarsBackgroundAnimation() {
  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
