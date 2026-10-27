import React, { useState, useEffect } from 'react';
import { PROFILE } from '../data/profile';
import { 
  X, 
  Download, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  GraduationCap,
  Award,
  FolderGit2,
  CheckCircle2,
  Code2
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'pdf' | 'text'>('pdf');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PROFILE.resumePdf;
    link.download = PROFILE.resumeDownloadFilename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-[#080808]/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#101010] border border-[#D8B45A]/30 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.95)] overflow-hidden my-6 animate-in zoom-in-95 duration-200 text-left flex flex-col h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-[#1C1C1C] bg-[#141414] gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-[#D8B45A]">
              <FileText className="w-4 h-4" />
            </div>
            <span id="resume-modal-title" className="text-sm font-mono font-semibold text-[#F5F2EB]">
              Resume — {PROFILE.name}
            </span>
          </div>

          {/* View Mode Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-[#080808] border border-[#222222] text-xs font-mono">
            <button
              type="button"
              onClick={() => setActiveTab('pdf')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'pdf'
                  ? 'bg-gradient-to-r from-[#D8B45A] to-[#B8933D] text-[#080808] font-bold shadow-[0_0_10px_rgba(216,180,90,0.25)]'
                  : 'text-[#A7A29A] hover:text-[#F5F2EB]'
              }`}
            >
              PDF Document
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('text')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'text'
                  ? 'bg-gradient-to-r from-[#D8B45A] to-[#B8933D] text-[#080808] font-bold shadow-[0_0_10px_rgba(216,180,90,0.25)]'
                  : 'text-[#A7A29A] hover:text-[#F5F2EB]'
              }`}
            >
              Formatted View
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#161616] hover:bg-[#1E1E1E] text-[#F5F2EB] text-xs font-mono border border-[#262626] transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#D8B45A]" />
              <span className="hidden sm:inline">Open PDF</span>
            </a>

            <button
              type="button"
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D8B45A] to-[#B8933D] hover:from-[#E5C77A] hover:to-[#C9A246] text-[#080808] text-xs font-bold font-mono shadow-[0_0_15px_rgba(216,180,90,0.25)] transition-all active:scale-95"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-[#A7A29A] hover:text-[#F5F2EB] hover:bg-[#1E1E1E] transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {activeTab === 'pdf' ? (
          /* PDF Viewer Embed */
          <div className="flex-1 w-full bg-[#080808] p-3 relative flex flex-col items-center justify-center">
            <iframe
              src={`${PROFILE.resumePdf}#toolbar=0`}
              title="Sahil Patil Resume PDF"
              className="w-full h-full rounded-2xl border border-[#222222] bg-[#121212]"
            />
          </div>
        ) : (
          /* Formatted Digital Resume Body Matching Updated PDF */
          <div className="p-6 sm:p-10 overflow-y-auto bg-[#101010] text-[#F5F2EB] font-sans space-y-6 flex-1">
            {/* Header */}
            <div className="text-center pb-6 border-b border-[#1C1C1C]">
              <h1 className="text-2xl sm:text-3xl font-bold font-display text-[#F5F2EB] tracking-tight">
                {PROFILE.name}
              </h1>
              <p className="text-sm font-semibold text-[#D8B45A] font-mono mt-1">
                Computer Science &amp; Engineering | Software Developer | Java
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#A7A29A] font-mono mt-3">
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-[#D8B45A]" /> +91 {PROFILE.phone}</span>
                <span className="text-[#333]">•</span>
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-[#D8B45A]" /> {PROFILE.email}</span>
                <span className="text-[#333]">•</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#D8B45A]" /> {PROFILE.location}</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#D8B45A] font-mono mb-2">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-[#A7A29A] leading-relaxed">
                Computer Science and Engineering student with an 8.02 CGPA and strong foundation in Core Java, OOP, DSA, SQL, and full-stack development. Hands-on experience with Java, React.js, Node.js, and MongoDB. Solved 500+ CodeChef and 200+ LeetCode problems, with a strong interest in Java Full Stack Development and software engineering.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#D8B45A] font-mono mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-[#141414] border border-[#222222]">
                  <div className="flex justify-between items-start font-semibold text-[#F5F2EB]">
                    <span>D.Y. Patil College of Engineering &amp; Technology | Kolhapur</span>
                    <span className="font-mono text-[#A7A29A]">2023 - 2027</span>
                  </div>
                  <div className="flex justify-between items-center text-[#A7A29A] mt-1">
                    <span>B.Tech – Computer Science &amp; Engineering</span>
                    <span className="font-mono text-[#D8B45A] font-bold">CGPA: 8.02</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#141414] border border-[#222222]">
                  <div className="flex justify-between items-start font-semibold text-[#F5F2EB]">
                    <span>Kisanrao More Highschool &amp; Junior College | Saravde</span>
                    <span className="font-mono text-[#A7A29A]">2022 - 2023</span>
                  </div>
                  <div className="flex justify-between items-center text-[#A7A29A] mt-1">
                    <span>Class XII</span>
                    <span className="font-mono text-[#D8B45A] font-bold">Percentage: 72.17%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#D8B45A] font-mono mb-3 flex items-center gap-2">
                <FolderGit2 className="w-4 h-4" />
                <span>Projects</span>
              </h2>
              <div className="space-y-4 text-xs sm:text-sm">
                {/* StartupSync */}
                <div className="p-4 rounded-2xl bg-[#141414] border border-[#222222] space-y-2">
                  <div className="flex justify-between items-start font-bold text-[#F5F2EB]">
                    <span>StartupSync — AI-Powered Recommendation System</span>
                    <span className="font-mono text-[#A7A29A] text-xs">Jun 2026 - Present</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[#A7A29A] text-xs leading-relaxed">
                    <li>Leading a team developing an AI-powered platform connecting startups with relevant investors, mentors, students, and opportunities.</li>
                    <li>Developed a recommendation engine for generating relevant profile-based recommendations.</li>
                    <li>Evaluated Top-5 recommendation similarity and contributed to integrating the recommendation engine with the backend.</li>
                  </ul>
                  <p className="text-[11px] font-mono text-[#D8B45A] pt-1">
                    Technologies: Python, Scikit-learn, TF-IDF, Cosine Similarity, React.js, Node.js, Express.js, MongoDB, GitHub
                  </p>
                </div>

                {/* DYPConnect */}
                <div className="p-4 rounded-2xl bg-[#141414] border border-[#222222] space-y-2">
                  <div className="flex justify-between items-start font-bold text-[#F5F2EB]">
                    <span>DYPConnect — College Professional Networking Platform</span>
                    <span className="font-mono text-[#A7A29A] text-xs">Jul 2026 - Present</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[#A7A29A] text-xs leading-relaxed">
                    <li>Developing a professional networking platform connecting students, faculty, and alumni with profiles, connections, opportunities, search, and notifications.</li>
                    <li>Developing REST APIs and backend services with secure user authentication and database integration.</li>
                    <li>Implementing user profiles, networking features, search functionality, and personalized recommendation features.</li>
                  </ul>
                  <p className="text-[11px] font-mono text-[#D8B45A] pt-1">
                    Technologies: React.js, JavaScript, Node.js, Express.js, MongoDB, Mongoose, JWT, Git, GitHub
                  </p>
                </div>

                {/* E-Grampanchayat */}
                <div className="p-4 rounded-2xl bg-[#141414] border border-[#222222] space-y-2">
                  <div className="flex justify-between items-start font-bold text-[#F5F2EB]">
                    <span>E-Grampanchayat Management System</span>
                    <span className="font-mono text-[#A7A29A] text-xs">Jan 2026 - May 2026</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[#A7A29A] text-xs leading-relaxed">
                    <li>Built an Android application for managing citizen records and local administrative services.</li>
                    <li>Implemented modules for complaints, announcements, certificates, events, emergency alerts, and village information.</li>
                    <li>Designed a user-friendly interface for accessing and managing administrative services.</li>
                  </ul>
                  <p className="text-[11px] font-mono text-[#D8B45A] pt-1">
                    Technologies: Android, Java, XML, SQLite
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#D8B45A] font-mono mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>Skills</span>
              </h2>
              <div className="text-xs space-y-1.5 text-[#A7A29A] font-mono">
                <p><strong className="text-[#F5F2EB]">Programming Languages:</strong> Java, Python, C, C++, Go, C#</p>
                <p><strong className="text-[#F5F2EB]">Web &amp; Backend:</strong> HTML, CSS, JavaScript, React.js, Node.js, Express.js, Flask, REST APIs</p>
                <p><strong className="text-[#F5F2EB]">Databases:</strong> SQLite, MySQL, MongoDB</p>
                <p><strong className="text-[#F5F2EB]">Core Concepts:</strong> Data Structures &amp; Algorithms, OOP, DBMS, SQL</p>
                <p><strong className="text-[#F5F2EB]">Tools &amp; Platforms:</strong> Git, GitHub, IntelliJ IDEA, Android Studio</p>
                <p><strong className="text-[#F5F2EB]">Currently Learning:</strong> Spring Boot, Hibernate/JPA, Advanced Java, Backend Development</p>
              </div>
            </div>

            {/* Awards & Achievements */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#D8B45A] font-mono mb-2 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Awards &amp; Achievements</span>
              </h2>
              <ul className="list-disc list-inside text-xs space-y-1 text-[#A7A29A]">
                <li>Solved 500+ programming problems on CodeChef, strengthening Data Structures &amp; Algorithms and competitive programming skills.</li>
                <li>Solved 200+ problems on LeetCode and earned the 100 Days Coding Badge.</li>
                <li>Contributed to an open-source GitHub repository through a successfully merged pull request.</li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#D8B45A] font-mono mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Certifications</span>
              </h2>
              <ul className="list-disc list-inside text-xs space-y-1 text-[#A7A29A]">
                <li><strong className="text-[#F5F2EB]">Cisco:</strong> Introduction to Cybersecurity</li>
                <li><strong className="text-[#F5F2EB]">Udemy:</strong> Java Programming for Complete Beginners</li>
                <li><strong className="text-[#F5F2EB]">Eduskill:</strong> Java Full Stack</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
