    "use client";

    import { useState, useCallback } from "react";
    import { motion, AnimatePresence } from "framer-motion";
    import SectionHeader from "../ui/SectionHeader";
    import { useLanguage } from "@/context/LanguageContext";

    const NAME_REGEX = /^[A-Za-z\s]+$/;
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    export default function ContactForm() {
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
    const [notification, setNotification] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);

    const handleChange = useCallback(
        (field: keyof typeof formState, value: string) => {
        setFormState((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: "" }));
        if (notification) setNotification(null);
        },
        [notification]
    );

    const validate = useCallback(() => {
        const newErrors = { name: "", email: "", message: "" };
        let isValid = true;

        if (!formState.name.trim()) {
        newErrors.name = t("contact.errors.nameReq") as string;
        isValid = false;
        } else if (!NAME_REGEX.test(formState.name)) {
        newErrors.name = t("contact.errors.nameInvalid") as string;
        isValid = false;
        }

        if (!formState.email.trim()) {
        newErrors.email = t("contact.errors.emailReq") as string;
        isValid = false;
        } else if (!EMAIL_REGEX.test(formState.email)) {
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
    }, [formState, t]);

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();
            if (!validate()) return;

            setIsSubmitting(true);

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formState),
                });

                if (response.ok) {
                    setNotification({
                        type: "success",
                        message: t("contact.successAlert") as string,
                    });
                    setFormState({ name: "", email: "", message: "" });
                    setErrors({ name: "", email: "", message: "" });
                    
                    // Auto-hide success message
                    setTimeout(() => setNotification(null), 5000);
                } else {
                    const data = await response.json();
                    setNotification({
                        type: "error",
                        message: data.error || (t("contact.errorAlert") as string),
                    });
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                setNotification({
                    type: "error",
                    message: t("contact.errorAlert") as string,
                });
            } finally {
                setIsSubmitting(false);
            }
        },
        [formState, validate, t]
    );

    const inputClasses = useCallback(
        (field: keyof typeof errors) =>
        `w-full px-5 py-3 rounded-xl border outline-none transition-all ${
            errors[field]
            ? "border-red-400 bg-red-50 focus:ring-red-200"
            : "border-primary/10 bg-white focus:ring-secondary/20 focus:border-secondary"
        }`,
        [errors]
    );

    return (
        <div
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
                onChange={(e) => handleChange("name", e.target.value)}
                className={inputClasses("name")}
                placeholder={t("contact.namePlaceholder") as string}
            />
            {errors.name && (
                <p className="mt-2 text-xs text-red-500">{errors.name}</p>
            )}
            </div>

            <div>
            <label className="block text-sm font-medium text-primary/70 mb-2">
                {t("contact.emailLabel")}
            </label>
            <input
                type="email"
                value={formState.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClasses("email")}
                placeholder={t("contact.emailPlaceholder") as string}
            />
            {errors.email && (
                <p className="mt-2 text-xs text-red-500">{errors.email}</p>
            )}
            </div>

            <div>
            <textarea
                rows={4}
                value={formState.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={`${inputClasses("message")} resize-none`}
                placeholder={t("contact.messagePlaceholder") as string}
            />
            {errors.message && (
                <p className="mt-2 text-xs text-red-500">{errors.message}</p>
            )}
            </div>

            <div className="relative h-[60px]">
                <AnimatePresence mode="wait">
                    {!notification || notification.type === "error" ? (
                        <motion.button
                            key="submit-btn"
                            disabled={isSubmitting}
                            type="submit"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`w-full h-full text-white py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-3 shadow-lg ${
                                notification?.type === "error" ? "bg-red-500" : "bg-primary hover:scale-[1.02] active:scale-95"
                            } disabled:opacity-70 disabled:hover:scale-100`}
                        >
                            {isSubmitting ? (
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full"
                                />
                            ) : (
                                <span>{notification?.type === "error" ? notification.message : t("contact.sendBtn")}</span>
                            )}
                        </motion.button>
                    ) : (
                        <motion.div
                            key="success-msg"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="w-full h-full bg-green-500 text-white rounded-xl flex items-center justify-center gap-3 shadow-lg font-medium px-4 text-center"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm md:text-base">{t("contact.successAlert")}</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </form>
        </div>
    );
    }