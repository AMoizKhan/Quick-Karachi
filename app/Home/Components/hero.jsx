"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const word = "Transportation";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && text.length < word.length) {
      timeout = setTimeout(() => {
        setText(word.slice(0, text.length + 1));
      }, 120);
    } else if (!isDeleting && text.length === word.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000); // full word show hone ke baad wait
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(word.slice(0, text.length - 1));
      }, 70);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);
  return (
    <section className="relative w-full h-[500px] sm:h-[650px] lg:h-[700px] overflow-hidden ">
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover "
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-start min-h-screen text-start px-4 ml-6">
        {/* Heading - 3 lines */}
        <h1 className="text-black font-bold leading-tight mt-20">
          <span className="block text-4xl sm:text-5xl lg:text-8xl">
            Quick Karachi
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-8xl text-red-600 min-h-[1.2em]">
            {text}
            <span className="animate-pulse">|</span>
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-8xl">
            Service
          </span>
        </h1>

        {/* Paragraph */}

        <p className="text-black text-base sm:text-lg max-w-2xl leading-relaxed mt-6">
          Quick Karachi Transportation Service (QKTS) is a Karachi-based ride
          service created to make daily travel safer, more affordable, and more
          reliable for students, professionals, and families. Built on real
          commuter problems in Karachi, QKTS focuses on verified drivers, fair
          pricing, and customer-first service, with booking available through
          WhatsApp and social media and a digital app expansion planned for
          better convenience.
        </p>

        {/* WhatsApp Button */}
     <a
  href="https://wa.me/923000000000"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center mt-10 gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold text-base px-7 py-3 rounded transition-all duration-200 animate-whatsappPulse"
>
  <Image
    src="/images/whatsapp.svg"
    alt="WhatsApp"
    width={22}
    height={22}
  />
  WhatsApp Us
</a>
      </div>
    </section>
  );
}
