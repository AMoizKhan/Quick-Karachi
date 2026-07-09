import Image from "next/image";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import ContactWhy from "./ContactWhy";

export default function ContactSection({ showFormOnly = false }) {
  if (showFormOnly) {
    return (
      <section className="w-full py-16 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="flex justify-center mb-16">
            <div className="relative inline-block px-8 py-4">
              <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600"></span>
              <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600"></span>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
                Contact Us
              </h2>

              <h4 className="text-lg font-semibold text-gray-700 text-center mt-2">
                Send us a message
              </h4>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            {/* Left */}
            <div>
              <ContactForm />
            </div>

            {/* Right */}
            {/* <div className="hidden lg:block">
              <div className="relative h-[700px] rounded-2xl overflow-hidden border-2  shadow-xl">
                <Image
                  src="/images/contact1.jpg"
                  alt="Contact Us"
                  fill
                  className="object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="w-full py-16 bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex justify-center mb-14">
              <div className="relative inline-block px-8 py-4">
                {/* Top Left Border */}
                <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600"></span>

                {/* Bottom Right Border */}
                <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600"></span>

                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
                  Contact Us
                </h2>
              </div>
            </div>
            <ContactInfo />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
            <ContactMap />
          </div>

          <ContactWhy />
        </div>
      </section>
    </>
  );
}
