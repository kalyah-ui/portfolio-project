"use client";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { StarsBackground } from "@/components/ui/StarsBackground";
export function StarsBackgroundAnimation() {
  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
