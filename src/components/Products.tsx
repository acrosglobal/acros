
import { useState } from 'react';
import { Rocket, Zap, Shield, Globe } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Product One",
    description: "The fastest and most efficient solution in its category, revolutionizing how businesses operate and process information.",
    features: [
      "Super fast processing capabilities",
      "Intuitive user interface",
      "Advanced security protocols",
      "Seamless integration with existing systems"
    ],
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Product Two",
    description: "The best-in-class platform offering unparalleled performance and reliability for mission-critical applications.",
    features: [
      "Exceptional performance metrics",
      "Real-time analytics dashboard",
      "Scalable architecture",
      "24/7 technical support"
    ],
    icon: Zap,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Product Three",
    description: "An innovative solution designed to maximize efficiency and productivity across your organization.",
    features: [
      "AI-powered optimization",
      "Customizable workflows",
      "Comprehensive reporting",
      "Multi-device synchronization"
    ],
    icon: Shield,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Product Four",
    description: "The ultimate tool for businesses seeking to leverage cutting-edge technology to stay ahead of competition.",
    features: [
      "Breakthrough innovation technology",
      "Seamless cloud integration",
      "Predictive analytics capabilities",
      "Enterprise-grade security"
    ],
    icon: Globe,
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

export function Products() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading animate-fade-in">Our Flagship Products</h2>
          <p className="section-subheading animate-fade-in">
            Discover our innovative solutions designed to transform your business operations and elevate your technological capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card group animate-fade-in"
              onClick={() => setActiveProduct(product)}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-card-img group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-white text-xl font-bold">{product.name}</h3>
                </div>
              </div>
              <div className="product-card-content">
                <div className="flex items-center gap-3 mb-3">
                  <product.icon className="text-acros-secondary" size={20} />
                  <span className="text-xs font-medium bg-acros-primary/40 text-acros-secondary px-3 py-1 rounded-full">
                    Super Fast
                  </span>
                </div>
                <p className="text-foreground/70 mb-4 line-clamp-3">{product.description}</p>
                <button
                  className="mt-auto text-acros-secondary font-medium hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProduct(product);
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Product Modal */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setActiveProduct(null)}>
          <div 
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden rounded-t-xl">
              <img 
                src={activeProduct.image} 
                alt={activeProduct.name} 
                className="w-full h-full object-cover"
              />
              <button 
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow-md hover:bg-white transition-colors"
                onClick={() => setActiveProduct(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <activeProduct.icon className="text-acros-secondary" size={24} />
                <h3 className="text-2xl font-bold text-acros-dark">{activeProduct.name}</h3>
              </div>
              <p className="text-foreground/80 mb-6">{activeProduct.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-acros-secondary">Key Features</h4>
                <ul className="space-y-2">
                  {activeProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-acros-secondary mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-end gap-4 mt-4">
                <button 
                  className="px-6 py-2 border border-acros-secondary text-acros-secondary rounded-lg hover:bg-acros-secondary/5 transition-colors"
                  onClick={() => setActiveProduct(null)}
                >
                  Close
                </button>
                <button 
                  className="px-6 py-2 bg-acros-secondary text-white rounded-lg shadow-md hover:shadow-lg transition-all"
                  onClick={() => {
                    setActiveProduct(null);
                    window.location.href = "#contact";
                  }}
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
