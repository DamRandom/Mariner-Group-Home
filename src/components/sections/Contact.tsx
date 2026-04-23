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

    if (!formState.name.trim()) {
      newErrors.name = t("contact.errors.nameReq") as string;
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formState.name)) {
      newErrors.name = t("contact.errors.nameInvalid") as string;
      isValid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = t("contact.errors.emailReq") as string;
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = t("contact.errors.emailInvalid") as string;
      isValid = false;
    }

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
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert(t("contact.mockAlert"));
    setFormState({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const inputClasses = (field: keyof typeof errors) =>
    `w-full px-5 py-3 rounded-xl border outline-none transition-all ${
      errors[field]
        ? "border-red-400 bg-red-50 focus:ring-red-200"
        : "border-primary/10 bg-white focus:ring-secondary/20 focus:border-secondary"
    }`;

  return (
    <section id="contact" className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
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
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary/70 mb-2"
                >
                  {t("contact.nameLabel")}
                </label>
                <input
                  id="name"
                  name="name"
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
                  <p className="mt-2 text-xs text-red-500 font-medium">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary/70 mb-2"
                >
                  {t("contact.emailLabel")}
                </label>
                <input
                  id="email"
                  name="email"
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
                  <p className="mt-2 text-xs text-red-500 font-medium">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-primary/70"
                  >
                    {t("contact.messageLabel")}
                  </label>
                  <span
                    className={`text-[10px] font-medium ${
                      formState.message.length > 500
                        ? "text-red-500"
                        : "text-primary/40"
                    }`}
                  >
                    {formState.message.length}/500
                  </span>
                </div>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => {
                    setFormState({ ...formState, message: e.target.value });
                    if (errors.message)
                      setErrors({ ...errors, message: "" });
                  }}
                  className={`${inputClasses("message")} resize-none`}
                  placeholder={t("contact.messagePlaceholder") as string}
                />

                {errors.message && (
                  <p className="mt-2 text-xs text-red-500 font-medium">
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className={`w-full bg-primary text-white py-4 rounded-xl font-medium shadow-md hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  (t("contact.sendBtn") as string)
                )}
              </motion.button>
            </form>
          </motion.div>

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
                    <h4 className="font-serif text-xl text-primary mb-1">
                      {t("contact.location") as string}
                    </h4>
                    <p className="text-primary/70 font-light">
                      4432 Mariner Blvd, Spring Hill, FL 34609
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <MdPhone className="text-2xl text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-1">
                      {t("contact.phone") as string}
                    </h4>
                    <p className="text-primary/70 font-light">
                      813-347-3060
                    </p>
                    <p className="text-primary/70 font-light">
                      352-515-0706
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <MdEmail className="text-2xl text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-1">
                      {t("contact.email") as string}
                    </h4>
                    <p className="text-primary/70 font-light break-all">
                      absolutequalityservices752@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <div className="h-64 w-full rounded-3xl overflow-hidden border border-primary/10 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3243232142!2d-82.5324202!3d28.4549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e807187120612d%3A0xc3f8c85eb24f4648!2s4432%20Mariner%20Blvd%2C%20Spring%20Hill%2C%20FL%2034609!5e0!3m2!1sen!2sus!4v1713876000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location"
                />
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