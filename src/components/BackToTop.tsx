import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#101010] text-[#D8B45A] hover:bg-[#D8B45A] hover:text-[#080808] border border-[#D8B45A]/35 hover:border-[#D8B45A] shadow-[0_0_20px_rgba(216,180,90,0.2)] hover:shadow-[0_0_25px_rgba(216,180,90,0.45)] transition-all duration-300 animate-in fade-in active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D8B45A]"
      aria-label="Scroll back to top"
      title="Scroll back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
