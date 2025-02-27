
import { Linkedin, Instagram, Send, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-acros-secondary text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-1.5 rounded-md">
                <img 
                  src="/lovable-uploads/7ad5d502-1a33-406c-8a5f-7459bc65b916.png" 
                  alt="Acros Global Logo" 
                  className="h-10 w-auto" 
                />
              </div>
              <span className="font-display font-bold text-2xl tracking-wider">ACROS</span>
            </div>
            <p className="text-white/80 mb-6 max-w-xs">
              Empowering businesses with innovative financial calculation tools and technology solutions to navigate the digital landscape.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/acrosglobal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all duration-300 hover:bg-white/20 p-2 rounded-full"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/acrosgbl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all duration-300 hover:bg-white/20 p-2 rounded-full"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://t.me/offcampusjobs2024" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all duration-300 hover:bg-white/20 p-2 rounded-full"
              >
                <Send size={20} />
              </a>
              <a 
                href="https://x.com/acrosglobal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all duration-300 hover:bg-white/20 p-2 rounded-full"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-bold mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform inline-block duration-300">Home</a>
              </li>
              <li>
                <a href="#products" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform inline-block duration-300">Products</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform inline-block duration-300">Services</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform inline-block duration-300">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform inline-block duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-bold mb-4 tracking-wide">Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform inline-block duration-300">Tax Calculator</a>
              </li>
              <li>
                <a href="#products" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform inline-block duration-300">EMI Calculator</a>
              </li>
              <li>
                <a href="#products" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform inline-block duration-300">SIP Calculator</a>
              </li>
              <li>
                <a href="#products" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform inline-block duration-300">GST Calculator</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-bold mb-4 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-white/70 mt-1" />
                <span className="text-white/70">contact@acrosglobal.in</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-white/70 mt-1" />
                <span className="text-white/70">+91 7448252629</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-white/70 mt-1" />
                <span className="text-white/70">
                  RG Infotech Park, Hinjewadi Phase - I, 
                  Pune, MH - 411057
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 font-display tracking-wider">
            &copy; {currentYear} Acros Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
