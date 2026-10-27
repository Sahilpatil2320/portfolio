import React, { useState } from 'react';
import type { Project } from '../data/projects';
import { 
  Calendar, 
  ArrowUpRight, 
  CheckCircle2, 
  ExternalLink,
  Smartphone,
  Cpu,
  Globe,
  MessageSquare,
  FolderGit2
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
  isPrimary?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails, isPrimary }) => {
  const [imageError, setImageError] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Java / Android':
        return <Smartphone className="w-3.5 h-3.5 text-[#D8B45A]" />;
      case 'AI / Machine Learning':
        return <Cpu className="w-3.5 h-3.5 text-[#D8B45A]" />;
      case 'Backend & Systems':
        return <MessageSquare className="w-3.5 h-3.5 text-[#D8B45A]" />;
      default:
        return <Globe className="w-3.5 h-3.5 text-[#D8B45A]" />;
    }
  };

  return (
    <div 
      className={`flex flex-col justify-between rounded-3xl bg-[#101010] border border-[#222222] hover:border-[#D8B45A]/40 hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_35px_rgba(216,180,90,0.1)] overflow-hidden group ${
        isPrimary ? 'lg:col-span-1' : ''
      }`}
    >
      <div>
        {/* Project Card Media Frame */}
        <div className="relative h-48 sm:h-52 bg-[#0C0C0C] border-b border-[#1C1C1C] flex items-center justify-center overflow-hidden">
          {project.image && !imageError ? (
            <img
              src={project.image}
              alt={project.imageAlt || project.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#141414] border border-[#242424] flex items-center justify-center mb-2 shadow-sm text-[#D8B45A]">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#F5F2EB] font-medium">
                {project.title}
              </span>
            </div>
          )}

          {/* Number & Category Badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-[#080808]/90 backdrop-blur-md border border-[#2A2A2A] text-[11px] font-mono text-[#D8B45A] flex items-center gap-2 shadow-md">
            <span className="font-bold">{project.projectNumber}</span>
            <span className="opacity-40">•</span>
            <span className="text-[#F5F2EB] flex items-center gap-1">
              {getCategoryIcon(project.category)}
              <span>{project.category}</span>
            </span>
          </div>

          {/* Period Badge */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-xl bg-[#080808]/90 backdrop-blur-md border border-[#2A2A2A] text-[11px] font-mono text-[#A7A29A] flex items-center gap-1.5 shadow-md">
            <Calendar className="w-3 h-3 text-[#D8B45A]" />
            <span>{project.period}</span>
          </div>
        </div>

        {/* Project Card Body */}
        <div className="p-5 sm:p-6 text-left">
          <h3 className="text-base sm:text-lg font-bold font-display text-[#F5F2EB] group-hover:text-[#D8B45A] transition-colors mb-2 leading-snug">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#A7A29A] leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Key Features */}
          <div className="space-y-1.5 mb-5">
            {project.keyFeatures.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#A7A29A]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B45A] flex-shrink-0 mt-0.5" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-lg bg-[#141414] border border-[#242424] text-[#E0DBD1] text-[11px] font-mono transition-transform"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded-lg bg-[#D8B45A]/10 text-[#D8B45A] border border-[#D8B45A]/20 text-[11px] font-mono font-medium">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Controls */}
      <div className="p-5 sm:p-6 pt-0 border-t border-[#1C1C1C] mt-2 flex items-center justify-between gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#D8B45A]/50 hover:bg-[#1A1A1A] active:scale-95 text-[#F5F2EB] text-xs font-mono font-medium transition-all"
          title={`View source code for ${project.title}`}
        >
          <GithubIcon className="w-3.5 h-3.5 text-[#D8B45A]" />
          <span>Code</span>
        </a>

        {project.hasLiveDemo && project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#D8B45A] to-[#B8933D] text-[#080808] text-xs font-mono font-bold active:scale-95 shadow-[0_0_12px_rgba(216,180,90,0.25)]"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Demo</span>
          </a>
        )}

        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold font-mono text-[#D8B45A] hover:text-[#E5C77A] active:scale-95 transition-colors"
        >
          <span>Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
