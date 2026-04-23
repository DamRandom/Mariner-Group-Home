"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    // Name validation: Letters and spaces only
    if (!formState.name.trim()) {
      newErrors.name = t("contact.errors.nameReq") as string;
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formState.name)) {
      newErrors.name = t("contact.errors.nameInvalid") as string;
      isValid = false;
    }

    // Email validation
    if (!formState.email.trim()) {
      newErrors.email = t("contact.errors.emailReq") as string;
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = t("contact.errors.emailInvalid") as string;
      isValid = false;
    }

    // Message validation
    if (!formState.message.trim()) {
      newErrors.message = t("contact.errors.messageReq") as string;
      isValid = false;
    } else if (formState.message.length > 500) {
      newErrors.message = t("contact.errors.messageMax") as string;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert(t("contact.mockAlert"));
    setFormState({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const inputClasses = (fieldName: keyof typeof errors) => `
    w-full px-5 py-3 rounded-xl border outline-none transition-all
    ${errors[fieldName] 
      ? "border-red-400 bg-red-50 focus:ring-red-200" 
      : "border-primary/10 bg-white focus:ring-secondary/20 focus:border-secondary"}
  `;

  return (
    <section id="contact" className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-sky-50 p-10 rounded-3xl border border-primary/5 shadow-sm"
          >
            <SectionHeader 
              title={t("contact.formTitle") as string}
              className="mb-8"
            />
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label className="block text-sm font-medium text-primary/70 mb-2">
                  {t("contact.nameLabel")}
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => {
                    setFormState({ ...formState, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  className={inputClasses("name")}
                  placeholder={t("contact.namePlaceholder") as string}
                />
                {errors.name && (
                  <p className="mt-2 text-xs text-red-500 font-medium">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-primary/70 mb-2">
                  {t("contact.emailLabel")}
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => {
                    setFormState({ ...formState, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  className={inputClasses("email")}
                  placeholder={t("contact.emailPlaceholder") as string}
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-red-500 font-medium">{errors.email}</p>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-primary/70">
                    {t("contact.messageLabel")}
                  </label>
                  <span className={`text-[10px] font-medium ${formState.message.length > 500 ? "text-red-500" : "text-primary/40"}`}>
                    {formState.message.length}/500
                  </span>
                </div>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => {
                    setFormState({ ...formState, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  className={`${inputClasses("message")} resize-none`}
                  placeholder={t("contact.messagePlaceholder") as string}
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-red-500 font-medium">{errors.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className={`w-full bg-primary text-white py-4 rounded-xl font-medium shadow-md hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  t("contact.sendBtn") as string
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 pt-4 h-full"
          >
            <div>
              <SectionHeader 
                title={t("contact.infoTitle") as string}
                subtitle={t("contact.infoSubtitle") as string}
              />

              <div className="space-y-8 mt-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <MdLocationOn className="text-2xl text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-1">{t("contact.location") as string}</h4>
                    <p className="text-primary/70 font-light text-justify">4432 Mariner Blvd, Spring Hill, FL 34609</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <MdPhone className="text-2xl text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-1">{t("contact.phone") as string}</h4>
                    <p className="text-primary/70 font-light">813-347-3060</p>
                    <p className="text-primary/70 font-light">352-515-0706</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <MdEmail className="text-2xl text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-1">{t("contact.email") as string}</h4>
                    <p className="text-primary/70 font-light break-all px-0">
                      absolutequalityservices752@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Integrated Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 group relative"
            >
              <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-3xl -z-10 group-hover:bg-secondary/5 transition-colors duration-700" />
              <div className="relative h-64 w-full rounded-3xl overflow-hidden border border-primary/10 shadow-sm transition-all duration-700 group-hover:shadow-xl group-hover:shadow-primary/5 group-hover:border-secondary/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3243232142!2d-82.5324202!3d28.4549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e807187120612d%3A0xc3f8c85eb24f4648!2s4432%20Mariner%20Blvd%2C%20Spring%20Hill%2C%20FL%2034609!5e0!3m2!1sen!2sus!4v1713876000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  className="opacity-90 group-hover:opacity-100 transition-all duration-700 ease-in-out scale-[1.01] group-hover:scale-100"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mariner Group Home Location"
                />
                
                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/10 to-transparent opacity-30 group-hover:opacity-0 transition-opacity duration-700" />

                {/* Compact Label */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-primary/5 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary/80">
                      Spring Hill, FL
                    </p>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/YourActualLinkHere" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary text-white p-2 rounded-xl shadow-lg hover:bg-secondary transition-colors duration-300 pointer-events-auto"
                  >
                    <MdLocationOn className="text-xl" />
                  </a>
                </div>
              </div>
              <p className="text-[11px] text-primary/40 mt-3 text-center italic font-light">
                {t("contact.viewMap") as string}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
