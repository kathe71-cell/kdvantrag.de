import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Nach oben scrollen"
      className="fixed bottom-20 md:bottom-8 right-6 z-40 p-3 rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 print:hidden"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
