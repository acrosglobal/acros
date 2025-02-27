
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-acros-secondary text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/7ad5d502-1a33-406c-8a5f-7459bc65b916.png" 
                alt="Acros Global Logo" 
                className="h-10 w-auto filter brightness-0 invert" 
              />
              <span className="font-display font-bold text-2xl">ACROS</span>
            </div>
            <p className="text-white/80 mb-4 max-w-xs">
              Empowering businesses with innovative technology solutions to navigate the digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="text-white/80 hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-white/80 hover:text-white transition-colors">Product One</a>
              </li>
              <li>
                <a href="#products" className="text-white/80 hover:text-white transition-colors">Product Two</a>
              </li>
              <li>
                <a href="#products" className="text-white/80 hover:text-white transition-colors">Product Three</a>
              </li>
              <li>
                <a href="#products" className="text-white/80 hover:text-white transition-colors">Product Four</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">GDPR</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/80">
            &copy; {currentYear} Acros Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
