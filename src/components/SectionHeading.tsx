import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  icon,
  align = 'center',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        isCenter ? 'flex flex-col items-center text-center' : 'text-left'
      } ${className}`}
    >
      {/* Category Monogram / Tag */}
      {label && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#D8B45A]/25 text-[11px] font-mono tracking-[0.2em] text-[#D8B45A] uppercase mb-3 shadow-[0_0_12px_rgba(216,180,90,0.08)]">
          {icon && <span className="flex-shrink-0 text-[#D8B45A]">{icon}</span>}
          <span>{label}</span>
        </div>
      )}

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-[#F5F2EB]">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-3 text-sm sm:text-base text-[#A7A29A] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}

      {/* Fine Gold Line Divider */}
      <div
        className={`w-12 h-[2px] bg-gradient-to-r from-transparent via-[#D8B45A] to-transparent mt-4 opacity-80 ${
          isCenter ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
};
