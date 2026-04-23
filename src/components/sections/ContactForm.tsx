    "use client";

    import { useState, useCallback } from "react";
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

    const handleChange = useCallback(
        (field: keyof typeof formState, value: string) => {
        setFormState((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: "" }));
        },
        []
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
        await new Promise((resolve) => setTimeout(resolve, 1000));

        alert(t("contact.mockAlert"));
        setFormState({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
        setIsSubmitting(false);
        },
        [validate, t]
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

            <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-xl hover:scale-105 transition-all"
            >
            {isSubmitting ? "..." : (t("contact.sendBtn") as string)}
            </button>
        </form>
        </div>
    );
    }