
// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// const slides = [
//   "/cars/audi.png",
//   "/cars/alto.png",
//   "/cars/brv.png",
//   "/cars/city.png",
//   "/cars/cultus.png",
// ];

// export default function Hero() {
//   const word = "Transportation";
//   const [text, setText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [current, setCurrent] = useState(0);

//   // Typing animation
//   useEffect(() => {
//     let timeout;
//     if (!isDeleting && text.length < word.length) {
//       timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 120);
//     } else if (!isDeleting && text.length === word.length) {
//       timeout = setTimeout(() => setIsDeleting(true), 1000);
//     } else if (isDeleting && text.length > 0) {
//       timeout = setTimeout(() => setText(word.slice(0, text.length - 1)), 70);
//     } else if (isDeleting && text.length === 0) {
//       setIsDeleting(false);
//     }
//     return () => clearTimeout(timeout);
//   }, [text, isDeleting]);

//   // Auto-slide every 3.5s
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 3500);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full overflow-hidden min-h-[560px] sm:min-h-[650px] lg:min-h-[700px] bg-white">
      
//       {/* BACKGROUND SLIDER: Acts as low-opacity mobile background, transforms to right-column content on desktop */}
//       <div className="absolute inset-0 lg:left-1/2 lg:right-0 lg:inset-y-auto lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2 h-[420px] opacity-20 lg:opacity-100 pointer-events-none lg:pointer-events-auto z-0">
//         {slides.map((src, i) => (
//           <div
//             key={i}
//             className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//               i === current ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <Image
//               src={src}
//               alt={`Car ${i + 1}`}
//               fill
//               priority={i === 0}
//               className="object-contain object-center drop-shadow-xl"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Content layout */}
//       <div className="relative z-10 mx-auto flex flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-8 min-h-[560px] sm:min-h-[650px] lg:min-h-[700px]">

//         {/* LEFT: Text content */}
//         <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
//           <h1 className="text-black font-bold leading-tight">
//             <span className="block text-3xl sm:text-5xl lg:text-7xl">
//               Quick Karachi
//             </span>
//             <span className="block text-3xl sm:text-5xl lg:text-7xl text-red-600 min-h-[1.2em]">
//               {text}
//               <span className="animate-pulse">|</span>
//             </span>
//             <span className="block text-3xl sm:text-5xl lg:text-7xl">
//               Service
//             </span>
//           </h1>

//           <p className="text-black text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed mt-8 sm:mt-10">
//             Quick Karachi Transportation Service (QKTS) is a Karachi-based ride
//             service created to make daily travel safer, more affordable, and more
//             reliable for students, professionals, and families. Built on real
//             commuter problems in Karachi, QKTS focuses on verified drivers, fair
//             pricing, and customer-first service, with booking available through
//             WhatsApp and social media.
//           </p>

//           {/* ✅ Fixed <a> tag syntax */}
//           <a
//             href="https://wa.me/923180860658"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center mt-8 sm:mt-10 gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 rounded transition-all duration-200"
//           >
//             <Image
//               src="/images/whatsapp.svg"
//               alt="WhatsApp"
//               width={22}
//               height={22}
//             />
//             WhatsApp Us
//           </a>

//           {/* Dot indicators */}
//           <div className="flex gap-2 mt-6">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//                   i === current ? "bg-red-600 scale-110" : "bg-black/30"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Empty placeholder spacer to keep text aligned neatly on desktop layouts */}
//         <div className="hidden lg:block w-1/2 h-[420px]" />

//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/cars/audi.png",
  "/cars/alto.png",
  "/cars/brv.png",
  "/cars/city.png",
  "/cars/cultus.png",
];

export default function Hero() {
  const word = "Transportation";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [current, setCurrent] = useState(0);

  // Typing animation
  useEffect(() => {
    let timeout;
    if (!isDeleting && text.length < word.length) {
      timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 120);
    } else if (!isDeleting && text.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(word.slice(0, text.length - 1)), 70);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  // Auto-slide every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden min-h-[560px] sm:min-h-[650px] lg:min-h-[700px] bg-white flex items-center">

      {/* Content layout: Stacked vertically on mobile, side-by-side on desktop */}
      <div className="relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-8 w-full gap-8 lg:gap-0">

        {/* LEFT/TOP: Text content */}
        <div className="flex flex-col items-start justify-center w-full lg:w-1/2 order-1 lg:order-1">
          <h1 className="text-black font-bold leading-tight">
            <span className="block text-3xl sm:text-5xl lg:text-7xl">
              Quick Karachi
            </span>
            <span className="block text-3xl sm:text-5xl lg:text-7xl text-red-600 min-h-[1.2em]">
              {text}
              <span className="animate-pulse">|</span>
            </span>
            <span className="block text-3xl sm:text-5xl lg:text-7xl">
              Service
            </span>
          </h1>

          <p className="text-black text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed mt-6 sm:mt-8">
            Quick Karachi Transportation Service (QKTS) is a Karachi-based ride
            service created to make daily travel safer, more affordable, and more
            reliable for students, professionals, and families. Built on real
            commuter problems in Karachi, QKTS focuses on verified drivers, fair
            pricing, and customer-first service, with booking available through
            WhatsApp and social media.
          </p>

          {/* ✅ Fixed <a> tag syntax */}
          <a
            href="https://wa.me/923180860658"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-6 sm:mt-8 gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 rounded transition-all duration-200"
          >
            <Image
              src="/images/whatsapp.svg"
              alt="WhatsApp"
              width={22}
              height={22}
            />
            WhatsApp Us
          </a>

          {/* Dot indicators */}
          <div className="flex gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-red-600 scale-110" : "bg-black/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT/BOTTOM: Sliding car images - Visible and crisp on both mobile and desktop */}
        <div className="relative w-full sm:w-4/5 lg:w-1/2 h-[250px] sm:h-[350px] lg:h-[420px] order-2 lg:order-2">
          {slides.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Car ${i + 1}`}
                fill
                priority={i === 0}
                className="object-contain object-center drop-shadow-xl"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}