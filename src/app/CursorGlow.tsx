"use client";
import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", move);

    const update = () => {
      glow.style.left = `${mouseX}px`;
      glow.style.top = `${mouseY}px`;
      requestAnimationFrame(update);
    };

    update(); // Start loop

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return null;
}
