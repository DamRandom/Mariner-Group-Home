import { useState } from "react";

export function useContactForm(t: (key: string) => string | string[]) {
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

    const handleChange = (field: keyof typeof formState, value: string) => {
        setFormState((prev) => ({ ...prev, [field]: value }));

        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
            });

            const data = await res.json();

            if (res.ok) {
                alert(t("contact.successAlert") as string);
                setFormState({ name: "", email: "", message: "" });
                setErrors({ name: "", email: "", message: "" });
            } else {
                alert(data.error || (t("contact.errorAlert") as string));
            }
        } catch {
            alert(t("contact.errorAlert") as string);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formState,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
    };
}