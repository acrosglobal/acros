
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 -right-24 w-80 h-80 bg-acros-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-24 w-80 h-80 bg-acros-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in mb-4">
            <div className="bg-acros-secondary/10 text-acros-secondary px-4 py-1 rounded-full text-sm font-medium">
              Innovative Solutions for Tomorrow
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up text-acros-secondary">
            Empowering Future <br />
            With Advanced Technology
          </h1>
          
          <p className="text-base md:text-lg text-foreground/80 mb-8 animate-slide-up max-w-2xl mx-auto text-balance">
            Acros Global delivers cutting-edge products and services that transform businesses and elevate experiences. Join us in shaping the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a href="#products" className="btn-primary">
              Explore Products
            </a>
            <a href="#contact" className="btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <a 
        href="#products" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-acros-secondary/80 hover:text-acros-secondary transition-colors"
      >
        <span className="text-sm font-medium mb-2">Discover More</span>
        <ArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
}
