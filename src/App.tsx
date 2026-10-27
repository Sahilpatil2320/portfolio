import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { BackToTop } from './components/BackToTop';
import { CustomCursor } from './components/CustomCursor';
import { Toast } from './components/Toast';
import type { ToastMessage } from './components/Toast';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = { id, type, message };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F2EB] flex flex-col font-sans selection:bg-[#D8B45A] selection:text-[#080808] relative">
      {/* Custom Champagne Gold Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Certifications />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals and Floating Tools */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
      <BackToTop />
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}

export default App;
