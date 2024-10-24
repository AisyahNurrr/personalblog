"use client"; // this is a client component

import React, { useEffect, useRef, ReactNode } from "react";

interface Props {
  offset?: string;
  children?: ReactNode;
}

export default function SlideUp({ children, offset = "0px" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // IntersectionObserver untuk menambah animasi ketika elemen terlihat
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-slideUpCubiBezier");
          }
        });
      },
      { rootMargin: offset } // Gunakan offset yang diterima sebagai prop
    );

    if (ref.current) {
      observer.observe(ref.current); // Mulai mengamati elemen
    }

    // Clean up observer saat komponen unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Berhenti mengamati saat unmount
      }
    };
  }, [offset]); // Tambahkan offset sebagai dependency

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  );
}
