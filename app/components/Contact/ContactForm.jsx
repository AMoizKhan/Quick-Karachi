"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "923180860658";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  function validate(data) {
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!data.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+]?[\d\s()-]{7,16}$/.test(data.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!data.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    return newErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const text =
      `*New Contact Message*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name.trim())}%0A` +
      `*Email:* ${encodeURIComponent(formData.email.trim())}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone.trim())}%0A` +
      `*Message:* ${encodeURIComponent(formData.message.trim())}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  const inputBaseClass =
    "w-full rounded-lg border px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#fd0014] focus:border-transparent";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={errors.name ? "true" : "false"}
          className={`${inputBaseClass} ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Your Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={errors.email ? "true" : "false"}
          className={`${inputBaseClass} ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          aria-invalid={errors.phone ? "true" : "false"}
          className={`${inputBaseClass} ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your phone number"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={errors.message ? "true" : "false"}
          className={`${inputBaseClass} resize-none ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto bg-[#fd0014] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
}
