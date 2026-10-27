import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

interface ContactFormProps {
  recipientEmail: string;
  onShowToast?: (message: string, type?: 'success' | 'info' | 'error') => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ recipientEmail, onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const emailjsConfigured = Boolean(
    import.meta.env.VITE_EMAILJS_SERVICE_ID &&
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setErrorMessage('');

    if (emailjsConfigured) {
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: recipientEmail
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        setStatus('success');
        if (onShowToast) onShowToast('Message transmitted successfully!', 'success');
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 },
            colors: ['#D8B45A', '#E5C77A', '#F5F2EB']
          });
        } catch {
          // graceful fallback
        }
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (err: unknown) {
        setStatus('error');
        const msg = err instanceof Error
          ? `Transmission error: ${err.message}`
          : 'Failed to send via email service. Opening mail client instead...';
        setErrorMessage(msg);
        if (onShowToast) onShowToast(msg, 'error');
        handleMailtoFallback();
      }
    } else {
      setTimeout(() => {
        handleMailtoFallback();
        setStatus('success');
        if (onShowToast) onShowToast('Launching your email client...', 'success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 400);
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#101010] border border-[#222222] hover:border-[#D8B45A]/30 shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition-all">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1C1C1C]">
        <div>
          <h3 className="text-lg font-bold font-display text-[#F5F2EB]">
            Send a Direct Message
          </h3>
          <p className="text-xs text-[#A7A29A] mt-0.5 font-mono">
            Directly connect regarding software engineering roles, projects, or discussions.
          </p>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#141414] text-[11px] font-mono text-[#D8B45A] border border-[#262626]">
          <Mail className="w-3 h-3 text-[#D8B45A]" />
          mailto fallback enabled
        </span>
      </div>

      {status === 'success' ? (
        <div className="py-10 text-center space-y-4 animate-in fade-in">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#D8B45A]/10 border border-[#D8B45A]/30 flex items-center justify-center text-[#D8B45A]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold font-display text-[#F5F2EB]">
            Message Prepared / Sent!
          </h4>
          <p className="text-xs sm:text-sm text-[#A7A29A] max-w-md mx-auto leading-relaxed">
            {emailjsConfigured
              ? 'Thank you for reaching out! Your message was delivered successfully.'
              : `Your email client has been opened with your pre-filled message addressed to ${recipientEmail}.`}
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D8B45A] to-[#B8933D] text-[#080808] text-xs font-bold font-mono transition-all shadow-[0_0_15px_rgba(216,180,90,0.25)]"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
          {status === 'error' && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-400" />
              <div className="flex-1">
                <p>{errorMessage}</p>
                <button
                  type="button"
                  onClick={handleMailtoFallback}
                  className="mt-2 inline-flex items-center gap-1.5 font-semibold underline text-[#D8B45A]"
                >
                  <Mail className="w-3.5 h-3.5" /> Open in Email Client (mailto)
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono font-medium text-[#A7A29A] mb-1.5"
              >
                Your Name <span className="text-[#D8B45A]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                aria-required="true"
                aria-invalid={Boolean(errors.name)}
                placeholder="e.g. Alex Smith"
                className={`w-full px-4 py-2.5 rounded-xl bg-[#141414] border text-[#F5F2EB] text-xs sm:text-sm focus:outline-none focus:border-[#D8B45A] focus:ring-1 focus:ring-[#D8B45A] transition-all placeholder:text-[#555] ${
                  errors.name
                    ? 'border-rose-500/80 focus:border-rose-500'
                    : 'border-[#262626]'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-[11px] text-rose-400 font-mono">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono font-medium text-[#A7A29A] mb-1.5"
              >
                Your Email <span className="text-[#D8B45A]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                aria-required="true"
                aria-invalid={Boolean(errors.email)}
                placeholder="alex@example.com"
                className={`w-full px-4 py-2.5 rounded-xl bg-[#141414] border text-[#F5F2EB] text-xs sm:text-sm focus:outline-none focus:border-[#D8B45A] focus:ring-1 focus:ring-[#D8B45A] transition-all placeholder:text-[#555] ${
                  errors.email
                    ? 'border-rose-500/80 focus:border-rose-500'
                    : 'border-[#262626]'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-[11px] text-rose-400 font-mono">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-mono font-medium text-[#A7A29A] mb-1.5"
            >
              Subject <span className="text-[#D8B45A]">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              aria-required="true"
              aria-invalid={Boolean(errors.subject)}
              placeholder="Software Developer Opportunity / Collaboration"
              className={`w-full px-4 py-2.5 rounded-xl bg-[#141414] border text-[#F5F2EB] text-xs sm:text-sm focus:outline-none focus:border-[#D8B45A] focus:ring-1 focus:ring-[#D8B45A] transition-all placeholder:text-[#555] ${
                errors.subject
                  ? 'border-rose-500/80 focus:border-rose-500'
                  : 'border-[#262626]'
              }`}
            />
            {errors.subject && (
              <p className="mt-1 text-[11px] text-rose-400 font-mono">{errors.subject}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono font-medium text-[#A7A29A] mb-1.5"
            >
              Message <span className="text-[#D8B45A]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              aria-required="true"
              aria-invalid={Boolean(errors.message)}
              placeholder="Hi Sahil, I reviewed your work on Java, StartupSync, and full stack projects..."
              className={`w-full px-4 py-2.5 rounded-xl bg-[#141414] border text-[#F5F2EB] text-xs sm:text-sm focus:outline-none focus:border-[#D8B45A] focus:ring-1 focus:ring-[#D8B45A] transition-all resize-y placeholder:text-[#555] ${
                errors.message
                  ? 'border-rose-500/80 focus:border-rose-500'
                  : 'border-[#262626]'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-[11px] text-rose-400 font-mono">{errors.message}</p>
            )}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D8B45A] to-[#B8933D] hover:from-[#E5C77A] hover:to-[#C9A246] active:scale-95 disabled:opacity-50 text-[#080808] font-bold font-mono text-xs sm:text-sm tracking-wider transition-all shadow-[0_0_18px_rgba(216,180,90,0.25)] hover:shadow-[0_0_25px_rgba(216,180,90,0.4)]"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#080808]" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#080808]" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleMailtoFallback}
              className="text-xs font-mono text-[#A7A29A] hover:text-[#D8B45A] transition-colors"
            >
              Direct mailto link ›
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
