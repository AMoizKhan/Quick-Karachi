"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 10, decimals: 0, suffix: "K+", label: "Rides Completed" },
  { number: 50, decimals: 0, suffix: "+", label: "Verified Drivers" },
  { text: "24/7", label: "Service Availability" },
  { number: 4.9, decimals: 1, suffix: "", label: "Average Rating" },
];

function Counter({ target, decimals = 0, suffix = "", start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return (
    <span>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function ServiceStats() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center bg-white rounded-2xl px-4 py-8 md:py-10 border border-gray-100 shadow-md"
            >
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#fd0014]">
                {stat.text ? (
                  stat.text
                ) : (
                  <Counter
                    target={stat.number}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    start={started}
                  />
                )}
              </span>
              <span className="mt-2 text-sm sm:text-base text-gray-600 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
