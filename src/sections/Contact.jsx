import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic validation
    const formData = new FormData(form.current);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_sxdofag",   // replace with your EmailJS service ID
        "template_946yqao",  // replace with your EmailJS template ID
        form.current,
        "sVP1cPoirSOCAX6Gm"    // replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <div id="contact" className="px-6 py-20 md:px-12 lg:p-24 flex flex-col md:flex-row gap-16 items-center">
      {/* Left contact info */}
      <div className="md:w-1/2">
        <div className="mb-10">
          <h3 className="text-center text-2xl md:text-4xl font-bold text-primary mb-4">
            Get in <span className="text-slate-700">Touch</span>
          </h3>
          <p className="text-gray-500 mt-2 text-sm md:text-lg text-center">
            I’m open to full-time opportunities, let’s connect.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 text-gray-600">
          <div className="flex items-center gap-2">
            <FaPhone className="text-primary" />
            <a href="tel:+6391620777513" className="hover:underline">
              +63 916 207 77513
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-primary" />
            <a
              href="mailto:mattjovan.marquez28@gmail.com"
              className="hover:underline"
            >
              mattjovan.marquez28@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-primary" />
            <a
              href="https://linkedin.com/in/mattjovanmarquez"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/mattjovanmarquez
            </a>
          </div>
        </div>
      </div>

      {/* Right contact form */}
      <div className="w-full md:w-1/2">
        <div className="card bg-base-100 w-full shrink-0 shadow-md bg-base-200">
          <div className="card-body">
            <form ref={form} onSubmit={sendEmail}>
              <fieldset className="fieldset">
                <label className="label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Enter Full Name"
                  required
                />

                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Enter Email"
                  required
                />

                <label className="label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="input w-full"
                  placeholder="Enter Subject"
                />

                <label className="label">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="textarea w-full"
                  placeholder="Enter Message"
                  required
                ></textarea>

                <button
                  type="submit"
                  className={`btn btn-primary mt-4 `}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
