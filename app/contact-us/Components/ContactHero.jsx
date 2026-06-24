import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[50vh] flex items-center">
      <Image
        src="/images/hero.png"
        alt="Contact Hero Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h4 className="text-sm md:text-base font-semibold uppercase tracking-widest text-red-400 mb-3">
          Get In Touch
        </h4>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
          Contact Us
        </h1>
      </div>
    </section>
  );
}
