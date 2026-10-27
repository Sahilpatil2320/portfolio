import React, { useState } from 'react';
import { PROFILE } from '../data/profile';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { Reveal } from '../components/Reveal';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from '../components/Icons';

interface ContactProps {
  onShowToast?: (message: string, type?: 'success' | 'info' | 'error') => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(label);
      if (onShowToast) onShowToast(`Copied ${label} to clipboard!`, 'success');
      setTimeout(() => setCopiedField(null), 2500);
    }).catch(() => {
      if (onShowToast) onShowToast(`Please copy manually: ${text}`, 'info');
    });
  };

  return (
    <section 
      id="contact" 
      className="py-20 sm:py-28 bg-[#080808] border-t border-[#1A1A1A] relative"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#D8B45A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Exact Requested Title & Description */}
        <SectionHeading
          label="Connect"
          title="Let's Build Something Together"
          description="I'm always interested in learning, collaborating, and building useful software projects. Feel free to connect with me."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (Spans 5 cols) */}
          <div className="lg:col-span-5 text-left">
            <Reveal direction="up" distance={30} duration={0.65} delay={0.1} className="space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-3xl bg-[#101010] border border-[#222222] hover:border-[#D8B45A]/40 transition-all duration-200 shadow-sm flex items-center justify-between group">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-2xl bg-[#161616] border border-[#262626] text-[#D8B45A] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-[#A7A29A] uppercase block font-semibold">Email</span>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-sm font-semibold text-[#F5F2EB] hover:text-[#D8B45A] transition-colors truncate block"
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(PROFILE.email, 'Email')}
                className="p-2.5 rounded-xl bg-[#161616] text-[#A7A29A] hover:text-[#F5F2EB] border border-[#262626] hover:border-[#D8B45A]/40 active:scale-95 transition-all flex-shrink-0 ml-2"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedField === 'Email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-3xl bg-[#101010] border border-[#222222] hover:border-[#D8B45A]/40 transition-all duration-200 shadow-sm flex items-center justify-between group">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-2xl bg-[#161616] border border-[#262626] text-[#D8B45A] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-[#A7A29A] uppercase block font-semibold">Phone</span>
                  <a
                    href={`tel:${PROFILE.phone}`}
                    className="text-sm font-semibold text-[#F5F2EB] hover:text-[#D8B45A] transition-colors truncate block font-mono"
                  >
                    {PROFILE.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(PROFILE.phone, 'Phone')}
                className="p-2.5 rounded-xl bg-[#161616] text-[#A7A29A] hover:text-[#F5F2EB] border border-[#262626] hover:border-[#D8B45A]/40 active:scale-95 transition-all flex-shrink-0 ml-2"
                title="Copy Phone"
                aria-label="Copy Phone"
              >
                {copiedField === 'Phone' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-3xl bg-[#101010] border border-[#222222] shadow-sm flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-[#161616] border border-[#262626] text-[#D8B45A] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#A7A29A] uppercase block font-semibold">Location</span>
                <span className="text-sm font-semibold text-[#F5F2EB]">
                  {PROFILE.location}
                </span>
              </div>
            </div>

            {/* Verified Profiles Box */}
            <div className="p-6 rounded-3xl bg-[#101010] border border-[#222222] shadow-sm">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8B45A] block mb-4">
                Verified Online Profiles
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#141414] border border-[#242424] text-xs font-mono text-[#F5F2EB] hover:text-[#D8B45A] hover:border-[#D8B45A]/40 active:scale-95 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-[#D8B45A]" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#141414] border border-[#242424] text-xs font-mono text-[#F5F2EB] hover:text-[#D8B45A] hover:border-[#D8B45A]/40 active:scale-95 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#D8B45A]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PROFILE.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#141414] border border-[#242424] text-xs font-mono text-[#F5F2EB] hover:text-[#D8B45A] hover:border-[#D8B45A]/40 active:scale-95 transition-all"
                >
                  <LeetCodeIcon className="w-4 h-4 text-[#E5A93C]" />
                  <span>LeetCode</span>
                </a>
                <a
                  href={PROFILE.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#141414] border border-[#242424] text-xs font-mono text-[#F5F2EB] hover:text-[#D8B45A] hover:border-[#D8B45A]/40 active:scale-95 transition-all"
                >
                  <CodeChefIcon className="w-4 h-4 text-emerald-400" />
                  <span>CodeChef</span>
                </a>
              </div>
            </div>

            </Reveal>
          </div>

          {/* Right Column: Contact Form (Spans 7 cols) */}
          <div className="lg:col-span-7">
            <Reveal direction="up" distance={30} duration={0.65} delay={0.2}>
              <ContactForm recipientEmail={PROFILE.email} onShowToast={onShowToast} />
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};
