
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className={cn(
            "relative flex items-center transition-all duration-300",
            isScrolled ? "scale-90" : "scale-100"
          )}>
            <img 
              src="/lovable-uploads/7ad5d502-1a33-406c-8a5f-7459bc65b916.png" 
              alt="Acros Global Logo" 
              className="h-12 w-auto transition-all duration-300 group-hover:scale-110" 
            />
            <span className="font-display font-bold text-2xl md:text-3xl bg-gradient-to-r from-acros-secondary to-acros-secondary/70 text-transparent bg-clip-text ml-2">
              ACROS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center p-1 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-acros-secondary/10">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'nav-link mx-1',
                  activeSection === item.href.replace('#', '') ? 'active' : '',
                  index === 0 && 'rounded-l-full pl-5',
                  index === navItems.length - 1 && 'rounded-r-full pr-5'
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-acros-secondary p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md 
                     hover:bg-acros-secondary/10 transition-colors duration-300 border border-acros-secondary/30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          'md:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-40 transition-all duration-500 ease-in-out pt-20',
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none translate-x-full'
        )}
      >
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full bg-acros-secondary/10 text-acros-secondary
                     hover:bg-acros-secondary/20 transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col items-center space-y-8 p-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-lg font-display font-medium transition-all duration-300 tracking-wider",
                activeSection === item.href.replace('#', '')
                  ? "text-acros-secondary scale-110 font-semibold"
                  : "text-foreground/80 hover:text-acros-secondary hover:scale-105"
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
