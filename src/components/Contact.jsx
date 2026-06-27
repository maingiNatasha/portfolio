import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import portfolioData from "../data/portfolioData";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import FadeInDiv from "./FadeInDiv";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const hasEmailJsConfig =
    import.meta.env.VITE_EMAILJS_SERVICE_ID &&
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!hasEmailJsConfig) {
      setStatus({
        type: "error",
        message: "EmailJS is not configured yet. Add your VITE_EMAILJS_* values to continue."
      });
      return;
    }

    if (!formRef.current) return;

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
      );

      formRef.current.reset();
      setStatus({
        type: "success",
        message: "Message sent. I'll get back to you as soon as possible."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong sending the message. Please try again."
      });
      console.error("EmailJS send failed:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <FadeInDiv>
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-(--color-border) bg-(--color-surface) px-5 py-2.5 text-sm text-(--color-text-secondary) backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-(--color-accent)" />
              Contact
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Send a <span className="text-(--color-brand-gradient-start)">message</span>.
            </h2>

            <p className="text-lg leading-relaxed text-(--color-text-secondary)">
              Feel free to reach out. I'm open to freelance work, full-time roles, and practical collaboration.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-accent) backdrop-blur sm:p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block space-y-2">
                    <span className="text-sm text-(--color-text-secondary)">Your name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-(--color-border) bg-(--color-surface) px-4 py-3 text-(--color-text-primary) outline-none transition-colors placeholder:text-(--color-text-muted) focus:border-(--color-border-hover)"
                    />
                  </label>

                  <label className="block space-y-2">
                    <span className="text-sm text-(--color-text-secondary)">Your email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border border-(--color-border) bg-(--color-surface) px-4 py-3 text-(--color-text-primary) outline-none transition-colors placeholder:text-(--color-text-muted) focus:border-(--color-border-hover)"
                    />
                  </label>
                </div>

                <label className="block space-y-2">
                  <span className="text-sm text-(--color-text-secondary)">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project inquiry"
                    className="w-full rounded-xl border border-(--color-border) bg-(--color-surface) px-4 py-3 text-(--color-text-primary) outline-none transition-colors placeholder:text-(--color-text-muted) focus:border-(--color-border-hover)"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-sm text-(--color-text-secondary)">Message</span>
                  <textarea
                    name="message"
                    rows="7"
                    required
                    placeholder="Tell me a bit about the role, project, or idea..."
                    className="w-full rounded-xl border border-(--color-border) bg-(--color-surface) px-4 py-3 text-(--color-text-primary) outline-none transition-colors placeholder:text-(--color-text-muted) focus:border-(--color-border-hover)"
                  />
                </label>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center justify-center rounded-lg bg-(--color-button-primary-bg) px-6 py-3 font-semibold text-(--color-button-primary-text) cursor-pointer transition-colors hover:bg-(--color-button-primary-hover) disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {status.message && (
                  <p
                    className={`text-sm ${
                      status.type === "success" ? "text-(--color-status-success)" : "text-(--color-status-error)"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>

            <div className="rounded-3xl border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-accent) backdrop-blur sm:p-8">
              <div className="space-y-6">
                <div className="border-b border-(--color-border) pb-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-(--color-text-muted)">Contact Information</p>
                </div>

                <div className="grid gap-4">
                  <div className="group flex items-center gap-3 rounded-2xl border border-(--color-border) bg-(--color-surface-strong) p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-(--color-border-hover) hover:bg-(--color-surface-hover)">
                    <MdOutlineEmail size={21} className="transition-colors duration-300 group-hover:text-(--color-accent)" />
                    <div>
                      <p className="text-sm text-(--color-text-muted)">Email</p>

                      <a
                        href={`mailto:${portfolioData.contact.email}`}
                        className="block text-(--color-text-primary) transition-colors duration-300 hover:text-(--color-accent)"
                      >
                        {portfolioData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-3 rounded-2xl border border-(--color-border) bg-(--color-surface-strong) p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-(--color-border-hover) hover:bg-(--color-surface-hover)">
                    <MdOutlineLocalPhone size={21} className="transition-colors duration-300 group-hover:text-(--color-accent)" />
                    <div>
                      <p className="text-sm text-(--color-text-muted)">Phone</p>
                      <a
                        href={`tel:${portfolioData.contact.phone}`}
                        className="block cursor-pointer text-(--color-text-primary) transition-colors duration-300 hover:text-(--color-accent)"
                      >
                        +254 717 872 584
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-3 rounded-2xl border border-(--color-border) bg-(--color-surface-strong) p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-(--color-border-hover) hover:bg-(--color-surface-hover)">
                    <FiGithub size={21} className="transition-colors duration-300 group-hover:text-(--color-accent)" />
                    <div>
                      <p className="text-sm text-(--color-text-muted)">GitHub</p>
                      <a
                        href={portfolioData.contact.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="block text-(--color-text-primary) transition-colors duration-300 hover:text-(--color-accent)"
                      >
                        {portfolioData.contact.links.github}
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-3 rounded-2xl border border-(--color-border) bg-(--color-surface-strong) p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-(--color-border-hover) hover:bg-(--color-surface-hover)">
                    <FiLinkedin size={21} className="transition-colors duration-300 group-hover:text-(--color-accent)" />
                    <div>
                      <p className="text-sm text-(--color-text-muted)">LinkedIn</p>
                      <a
                        href={portfolioData.contact.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="block text-(--color-text-primary) transition-colors duration-300 hover:text-(--color-accent)"
                      >
                        {portfolioData.contact.links.linkedin}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInDiv>
  );
}
