"use client";

import React, { useState } from "react";
import { X, Send } from "lucide-react";

const Contact = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a mailto link
    const subject = `New message from ${formData.name}`;
    const body = `From: ${formData.name} (${formData.email})%0D%0A%0D%0A${formData.message}`;

    const mailtoLink = `mailto:techyverve@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Redirect to user's email client
    window.location.href = mailtoLink;

    onClose(); // close popup after redirect
  };

  // Prevent closing when clicking inside the modal
  const handleInnerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-80 backdrop-blur-sm z-50 p-4 pt-32"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl p-6 rounded-3xl shadow-2xl relative animate-slideUp border border-gray-100"
        onClick={handleInnerClick}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors duration-200 p-1 rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-black mb-2">Get in Touch</h3>
          <p className="text-gray-500 text-sm">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-black placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="abc@example.com"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-black placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              placeholder="Tell us about your project or how we can help you..."
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-black placeholder-gray-400 resize-none"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Send Message</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </form>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            This will open your email app to send the message.
          </p>
        </div>
      </div>

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default Contact;
