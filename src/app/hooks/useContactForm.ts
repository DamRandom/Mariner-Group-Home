import { useState } from "react";

export function useContactForm(t: any) {
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
            newErrors.name = t("contact.errors.nameReq");
            isValid = false;
        } else if (!/^[A-Za-z\s]+$/.test(formState.name)) {
            newErrors.name = t("contact.errors.nameInvalid");
            isValid = false;
        }

        if (!formState.email.trim()) {
            newErrors.email = t("contact.errors.emailReq");
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
            newErrors.email = t("contact.errors.emailInvalid");
            isValid = false;
        }

        if (!formState.message.trim()) {
            newErrors.message = t("contact.errors.messageReq");
            isValid = false;
        } else if (formState.message.length > 500) {
            newErrors.message = t("contact.errors.messageMax");
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
                alert(t("contact.successAlert"));
                setFormState({ name: "", email: "", message: "" });
                setErrors({ name: "", email: "", message: "" });
            } else {
                alert(data.error || t("contact.errorAlert"));
            }
        } catch {
            alert(t("contact.errorAlert"));
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