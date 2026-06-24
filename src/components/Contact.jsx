import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, ArrowRight } from "lucide-react";
import "./Contact.css";
// Inline SVG for GitHub (lucide-react does not provide a brand icon)
const GithubIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.01 2.05.14 3 .4 2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().split(/\s+/).filter(Boolean).length < 10)
      newErrors.message = "Message must contain at least 10 words";
      // Global overflow handling moved to CSS
      return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.12 } },
  };
  const itemFade = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4 } },
  };

  return (
    <section id="contact" className="relative w-full bg-black text-white pt-8 pb-16 md:pt-12 md:pb-24 flex flex-col items-center">
      {/* Form Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-[90%] max-w-full p-5 mx-auto md:w-full md:max-w-3xl md:px-6"
      >
        {/* Header */}
        <motion.div variants={itemFade} className="text-center mb-12">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 80, filter: "blur(20px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
              }}
              initial="hidden"
              animate="visible"
              className="font-display font-extrabold text-center text-white mx-auto"
              style={{
                fontSize: "clamp(3rem,12vw,5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                wordBreak: "break-word",
                maxWidth: "100%",
                textAlign: "center",
                overflow: "hidden",
                textTransform: "uppercase",
                textShadow: "0 0 8px #7163F1",
              }}
            >
              CONTACT
            </motion.h1>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 60, filter: "blur(12px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.45 } },
              }}
              initial="hidden"
              animate="visible"
              className="font-display font-bold text-white mt-8"
              style={{
                fontSize: "clamp(2rem,5vw,4rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              Get In Touch
            </motion.h2>
            <p className="mt-6 max-w-[700px] mx-auto text-center text-white/70">
              Let’s connect and discuss opportunities, projects, and professional collaborations.
            </p>
          </motion.div>
        {/* Form */}
        <motion.form
          variants={containerVariants}
          className="bg-black/30 border border-purple-500/25 backdrop-blur-xl rounded-[20px] p-8 space-y-6"
          onSubmit={handleSubmit}
        >
          {/* Full Name */}
          <motion.div variants={itemFade}>
            <label className="block text-white mb-1">
              Full Name <span className="text-[#FF4D4D] font-semibold">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full h-[54px] bg-[#111111] text-white border ${errors.name ? 'border-[#FF4D4D]' : 'border-white/10'} focus:border-[#7163F1] focus:bg-[#111111] py-3 rounded-[20px] px-4 transition-colors placeholder-gray-500`}
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </motion.div>
          {/* Email */}
          <motion.div variants={itemFade}>
            <label className="block text-white mb-1">
              Email Address <span className="text-[#FF4D4D] font-semibold">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full h-[54px] bg-[#111111] text-white border ${errors.email ? 'border-[#FF4D4D]' : 'border-white/10'} focus:border-[#7163F1] focus:bg-[#111111] py-3 rounded-[20px] px-4 transition-colors placeholder-gray-500`}
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </motion.div>
          {/* Phone */}
          <motion.div variants={itemFade}>
            <label className="block text-white mb-1">
              Phone Number <span className="text-[#FF4D4D] font-semibold">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className={`w-full h-[54px] bg-[#111111] text-white border ${errors.phone ? 'border-[#FF4D4D]' : 'border-white/10'} focus:border-[#7163F1] focus:bg-[#111111] py-3 rounded-[20px] px-4 transition-colors placeholder-gray-500`}
            />
            {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
          </motion.div>
          {/* Message */}
          <motion.div variants={itemFade}>
            <label className="block text-white mb-1">
              Message <span className="text-[#FF4D4D] font-semibold">*</span>
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className={`w-full h-[54px] bg-[#111111] text-white border ${errors.message ? 'border-[#FF4D4D]' : 'border-white/10'} focus:border-[#7163F1] focus:bg-[#111111] py-3 rounded-[20px] px-4 transition-colors placeholder-gray-500 resize-none`}
            />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
          </motion.div>
          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: "#7163F1", boxShadow: "0 0 20px rgba(113,99,241,0.5)" }}
            className="w-full h-[56px] flex items-center justify-center bg-[#7163F1] text-white font-medium rounded-[20px] transition-colors duration-300 text-base"
          >
            Send Message&nbsp;<ArrowRight className="ml-2" size={20} />
          </motion.button>
          {submitted && <p className="mt-4 text-center text-green-400">Thank you for contacting me. I will get back to you soon.</p>}
        </motion.form>
      </motion.div>

      {/* Contact Info Bar */}
      <motion.div variants={itemFade} className="mt-16 w-full max-w-5xl px-6">
        <div className="bg-black/30 border border-purple-500/25 backdrop-blur-xl rounded-[24px] p-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center text-center">
            <User className="text-white text-5xl" />
            <span className="mt-2 text-xs uppercase tracking-wider text-gray-400">Name</span>
            <span className="mt-1 text-lg font-semibold text-white">M Mubarak</span>
          </div>
          <div className="border-l border-white/20 h-12 hidden sm:block" />
          <div className="flex flex-col items-center text-center">
            <Mail className="text-white text-5xl" />
            <span className="mt-2 text-xs uppercase tracking-wider text-gray-400">Email</span>
            <a href="mailto:287mubarak@gmail.com" className="mt-1 text-lg font-semibold text-white hover:text-[#7163F1] transition-colors">
              287mubarak@gmail.com
            </a>
          </div>
          <div className="border-l border-white/20 h-12 hidden sm:block" />
          <div className="flex flex-col items-center text-center">
            <Phone className="text-white text-5xl" />
            <span className="mt-2 text-xs uppercase tracking-wider text-gray-400">Phone</span>
            <a href="tel:+919585775241" className="mt-1 text-lg font-semibold text-white hover:text-[#7163F1] transition-colors">
              +91 9585775241
            </a>
          </div>
          <div className="border-l border-white/20 h-12 hidden sm:block" />
          <div className="flex flex-col items-center text-center">
            <GithubIcon className="text-white text-5xl" />
            <span className="mt-2 text-xs uppercase tracking-wider text-gray-400">GitHub</span>
            <a href="https://github.com/mubarak182004" target="_blank" rel="noopener noreferrer" className="mt-1 text-lg font-semibold text-white hover:text-[#7163F1] transition-colors">
              github.com/mubarak182004
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
