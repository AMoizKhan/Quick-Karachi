import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import ContactWhy from "./ContactWhy";

export default function ContactSection({ showFormOnly = false }) {
  if (showFormOnly) {
    return (
      <section className="w-full py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h4 className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#fd0014] mb-3">
              Contact
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Send Us a Message
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h4 className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#fd0014] mb-3">
              Contact Us
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-8">
              At QKTS, we are always ready to help you book a safer, smarter,
              and more reliable ride in Karachi. Whether you are a student
              heading to campus, a professional on the way to work, or a family
              planning daily travel, our team is here to make your journey smooth
              from the first message to the final drop-off.
            </p>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center md:text-left">
              Contact Information
            </h3>
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
