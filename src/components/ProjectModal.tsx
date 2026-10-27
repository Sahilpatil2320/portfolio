import React, { useEffect } from 'react';
import type { Project } from '../data/projects';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#080808]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#101010] border border-[#D8B45A]/30 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden my-8 animate-in zoom-in-95 duration-200 text-left max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C1C1C] bg-[#141414]">
          <div className="flex items-center gap-2.5">
            <span className="font-mono font-bold text-xs text-[#D8B45A]">
              {project.projectNumber}
            </span>
            <span className="text-[#444] text-xs">•</span>
            <span className="px-2.5 py-0.5 rounded-md bg-[#D8B45A]/10 text-[#D8B45A] text-xs font-mono font-medium border border-[#D8B45A]/20">
              {project.category}
            </span>
            <span className="text-[#444] text-xs">•</span>
            <span className="text-xs font-mono text-[#A7A29A] flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#D8B45A]" />
              {project.period}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A7A29A] hover:text-[#F5F2EB] hover:bg-[#1E1E1E] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h2
              id="modal-project-title"
              className="text-xl sm:text-2xl font-bold font-display text-[#F5F2EB] tracking-tight"
            >
              {project.title}
            </h2>
            <p className="mt-3 text-sm text-[#A7A29A] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8B45A] mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Key Implementation Details</span>
            </h3>
            <div className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#141414] border border-[#222222] text-xs sm:text-sm text-[#F5F2EB]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D8B45A] flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#A7A29A] mb-2.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#D8B45A]" />
              <span>Verified Technologies</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#141414] border border-[#262626] text-[#E0DBD1] text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-[#1C1C1C] bg-[#141414]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D8B45A] to-[#B8933D] hover:from-[#E5C77A] hover:to-[#C9A246] text-[#080808] text-xs font-bold font-mono transition-all active:scale-95 shadow-[0_0_15px_rgba(216,180,90,0.25)]"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Open on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-[#242424] text-[#A7A29A] hover:text-[#F5F2EB] hover:bg-[#1E1E1E] text-xs font-mono transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
