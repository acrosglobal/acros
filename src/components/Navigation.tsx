
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update isScrolled state
      setIsScrolled(window.scrollY > 20);

      // Find the active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative overflow-hidden rounded-lg p-1.5 transition-all duration-300 group-hover:bg-acros-primary/50">
            <img 
              src="/lovable-uploads/7ad5d502-1a33-406c-8a5f-7459bc65b916.png" 
              alt="Acros Global Logo" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" 
            />
          </div>
          <span className="font-display font-bold text-xl text-acros-secondary tracking-wide group-hover:text-acros-accent transition-colors duration-300">ACROS</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <div className="bg-acros-primary/70 backdrop-blur-sm rounded-lg p-1.5 shadow-sm border border-acros-secondary/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-md font-medium transition-all duration-300',
                  activeSection === item.href.replace('#', '') 
                    ? 'bg-acros-secondary text-white shadow-sm' 
                    : 'text-acros-secondary hover:bg-acros-secondary/10'
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-acros-secondary p-2 rounded-lg bg-acros-primary hover:bg-acros-primary/80 transition-colors shadow-sm border border-acros-secondary/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          'md:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-40 transition-all duration-300 pt-20',
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none translate-x-full'
        )}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg bg-acros-primary text-acros-secondary hover:bg-acros-primary/80 transition-colors shadow-sm"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col items-center space-y-4 p-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "px-6 py-3 text-center w-full max-w-xs rounded-lg transition-all duration-300",
                activeSection === item.href.replace('#', '')
                  ? "bg-acros-secondary text-white shadow-md"
                  : "text-acros-secondary bg-acros-primary/50 hover:bg-acros-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
