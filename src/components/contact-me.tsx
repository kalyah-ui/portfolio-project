import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import FadeInSection from "./fade-in-section";

function ContactMe() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        emailjs
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }
            );

            setStatus("success");

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section id="contact-me" className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                {status === "success" && (
                    <p className="success-message">Your message has been sent!</p>
                )}
                {status === "error" && (
                    <p className="error-message">There was an error sending your message.</p>
                )}
                <div className="name-email-container">
                    <FadeInSection direction="left">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </FadeInSection>

                    <FadeInSection direction="right">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </FadeInSection>
                </div>

                <FadeInSection direction="up">
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </FadeInSection>

                <FadeInSection direction="up">
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </FadeInSection>

                <FadeInSection direction="up">
                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                </FadeInSection>
            </form>
        </section>
    );
}

export default ContactMe;
