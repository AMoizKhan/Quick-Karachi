"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      aria-hidden={!isLoading}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Image
        src="/images/logo.png"
        alt="Quick Karachi Transportation Service"
        width={170}
        height={95}
        priority
        className="h-auto w-auto animate-logoPulse"
      />
    </div>
  );
}
