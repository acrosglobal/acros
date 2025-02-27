
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-acros-primary/30 backdrop-blur-sm"></div>
        <div className="absolute top-20 -right-24 w-96 h-96 bg-acros-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-24 w-96 h-96 bg-acros-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in mb-4">
            <div className="bg-acros-secondary/10 text-acros-secondary px-4 py-1 rounded-full border border-acros-secondary/20 text-sm font-medium">
              Innovative Solutions for Tomorrow
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6 animate-slide-up text-acros-dark">
            Empowering Future <br />
            <span className="text-acros-secondary">With Advanced Technology</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-slide-up animation-delay-100 max-w-2xl mx-auto text-balance">
            Acros Global delivers cutting-edge products and services that transform businesses and elevate experiences. Join us in shaping the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-200">
            <a 
              href="#products" 
              className="px-8 py-3 bg-acros-secondary text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300"
            >
              Explore Products
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border border-acros-secondary text-acros-secondary rounded-lg font-medium hover:bg-acros-secondary/5 transition-colors duration-300"
            >
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
