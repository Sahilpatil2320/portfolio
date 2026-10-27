import React from 'react';
import { CERTIFICATIONS } from '../data/certifications';
import { SectionHeading } from '../components/SectionHeading';
import { CheckCircle2, ShieldCheck, Award, BookOpen, Layers } from 'lucide-react';

export const Certifications: React.FC = () => {
  const getIssuerIcon = (issuer: string) => {
    switch (issuer) {
      case 'Cisco':
        return <ShieldCheck className="w-5 h-5 text-[#D8B45A]" />;
      case 'Udemy':
        return <BookOpen className="w-5 h-5 text-[#D8B45A]" />;
      case 'Eduskill':
        return <Layers className="w-5 h-5 text-[#D8B45A]" />;
      default:
        return <Award className="w-5 h-5 text-[#D8B45A]" />;
    }
  };

  return (
    <section 
      id="certifications" 
      className="py-20 sm:py-28 bg-[#080808] border-t border-[#1A1A1A] relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          label="Credentials"
          title="Certifications"
          description="Industry coursework and verified technical credentials in Java, Cybersecurity, and Full-Stack engineering."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-7 rounded-3xl bg-[#101010] border border-[#222222] hover:border-[#D8B45A]/40 hover:-translate-y-1.5 active:scale-[0.99] transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_35px_rgba(216,180,90,0.12)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-[#161616] border border-[#262626] group-hover:scale-105 transition-transform">
                    {getIssuerIcon(cert.issuer)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#D8B45A]/10 text-[#D8B45A] border border-[#D8B45A]/25 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Completed</span>
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-xs font-mono font-semibold text-[#D8B45A] block uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <h3 className="text-lg font-bold font-display text-[#F5F2EB] group-hover:text-[#D8B45A] transition-colors mt-1">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#A7A29A] leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs font-mono text-[#736F67]">
                <span>{cert.badgeText}</span>
                <span className="text-[#D8B45A] font-semibold">{cert.status}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
