import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import portfolioData from "../data/portfolioData";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { FiGithub, FiLinkedin } from "react-icons/fi";

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
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-zinc-800/60 bg-zinc-950/50 px-5 py-2.5 text-sm text-zinc-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Contact
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Send a <span className="text-cyan-300">message</span>.
          </h2>

          <p className="text-lg leading-relaxed text-zinc-300">
            Feel free to reach out. I'm open to freelance work, full-time roles, and practical collaboration.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/55 p-6 shadow-2xl shadow-cyan-950/10 backdrop-blur sm:p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block space-y-2">
                  <span className="text-sm text-zinc-300">Your name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-zinc-800/70 bg-zinc-950/60 px-4 py-3 text-zinc-100 outline-none transition-colors placeholder:text-zinc-500 focus:border-cyan-400/60"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-sm text-zinc-300">Your email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border border-zinc-800/70 bg-zinc-950/60 px-4 py-3 text-zinc-100 outline-none transition-colors placeholder:text-zinc-500 focus:border-cyan-400/60"
                  />
                </label>
              </div>

              <label className="block space-y-2">
                <span className="text-sm text-zinc-300">Subject</span>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project inquiry"
                  className="w-full rounded-xl border border-zinc-800/70 bg-zinc-950/60 px-4 py-3 text-zinc-100 outline-none transition-colors placeholder:text-zinc-500 focus:border-cyan-400/60"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm text-zinc-300">Message</span>
                <textarea
                  name="message"
                  rows="7"
                  required
                  placeholder="Tell me a bit about the role, project, or idea..."
                  className="w-full rounded-xl border border-zinc-800/70 bg-zinc-950/60 px-4 py-3 text-zinc-100 outline-none transition-colors placeholder:text-zinc-500 focus:border-cyan-400/60"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-zinc-950 transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </div>

              {status.message && (
                <p
                  className={`text-sm ${
                    status.type === "success" ? "text-emerald-300" : "text-rose-300"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>

          <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/55 p-6 shadow-2xl shadow-cyan-950/10 backdrop-blur sm:p-8">
            <div className="space-y-6">
              <div className="border-b border-zinc-800/70 pb-6">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Contact Information</p>
              </div>

              <div className="grid gap-4">
                <div className="flex items-center gap-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-4">
                  <MdOutlineEmail size={25} />
                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    
                    <a
                      href={`mailto:${portfolioData.contact.email}`}
                      className="block text-zinc-100 transition-colors hover:text-cyan-300"
                    >
                      {portfolioData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-4">
                  <MdOutlineLocalPhone size={25} />
                  <div>
                    <p className="text-sm text-zinc-500">Phone</p>
                    <a
                      href={`tel:${portfolioData.contact.phone}`}
                      className="block cursor-pointer text-zinc-100 transition-colors hover:text-cyan-300"
                    >
                      +254 717 872 584
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-4">
                  <FiGithub size={25} />
                  <div>
                    <p className="text-sm text-zinc-500">GitHub</p>
                    <a
                      href={portfolioData.contact.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-zinc-100 transition-colors hover:text-cyan-300"
                    >
                      {portfolioData.contact.links.github}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-4">
                  <FiLinkedin size={25} />
                  <div>
                    <p className="text-sm text-zinc-500">LinkedIn</p>
                    <a
                      href={portfolioData.contact.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-zinc-100 transition-colors hover:text-cyan-300"
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
  );
}
