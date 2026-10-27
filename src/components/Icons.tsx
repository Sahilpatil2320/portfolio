import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const LeetCodeIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.26a1.375 1.375 0 0 0-.045 1.942 1.375 1.375 0 0 0 1.943.045l5.406-5.82a.25.25 0 0 1 .374 0l8.03 8.65c1.47 1.583 1.47 4.148 0 5.731l-4.195 4.52-2.185-2.355a1.375 1.375 0 0 0-1.942.045 1.375 1.375 0 0 0 .045 1.943l3.156 3.402a1.374 1.374 0 0 0 1.942.045l4.195-4.52c2.518-2.71 2.518-7.106 0-9.816L15.444.438A1.374 1.374 0 0 0 13.483 0zm-6.105 9.7a1.375 1.375 0 0 0-.97.404l-5.26 5.26a6.87 6.87 0 0 0 0 9.715 6.87 6.87 0 0 0 9.715 0l5.26-5.26a1.375 1.375 0 0 0-1.944-1.945l-5.26 5.26a4.12 4.12 0 0 1-5.827 0 4.12 4.12 0 0 1 0-5.827l5.26-5.26a1.375 1.375 0 0 0-.974-2.347zm6.732 2.65a1.375 1.375 0 0 0-.07 1.944l2.42 2.608H7.375a1.375 1.375 0 0 0 0 2.75h9.09l-2.42 2.608a1.375 1.375 0 0 0 .07 1.944 1.375 1.375 0 0 0 1.944-.07l4.75-5.12a1.374 1.374 0 0 0 0-1.874l-4.75-5.12a1.375 1.375 0 0 0-1.95-.07z"/>
  </svg>
);

export const CodeChefIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm5.06 14.59c-.45.45-1.05.7-1.7.7-.65 0-1.25-.25-1.7-.7l-3.6-3.6-1.4 1.4c-.4.4-1.04.4-1.44 0-.4-.4-.4-1.04 0-1.44l2.12-2.12c.4-.4 1.04-.4 1.44 0l3.6 3.6c.1.1.25.16.4.16.15 0 .3-.06.4-.16.22-.22.22-.58 0-.8l-4.32-4.32a3.99 3.99 0 0 1 5.66 0l.54.54c.4.4.4 1.04 0 1.44-.4.4-1.04.4-1.44 0l-.54-.54a1.99 1.99 0 0 0-2.82 0l3.76 3.76c.45.45.7 1.05.7 1.68 0 .65-.25 1.25-.7 1.7z" />
  </svg>
);
