
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Customer {
  id: number;
  name: string;
  logo: string;
  description: string;
}

const customers: Customer[] = [
  {
    id: 1,
    name: "Dhruv Space",
    logo: "/lovable-uploads/15c05b0c-d7da-4fc0-905f-e29ea4063c10.png",
    description: "Transforming satellite technology with our advanced financial planning tools."
  },
  {
    id: 2,
    name: "Yes Bank",
    logo: "/lovable-uploads/e9aac731-06e0-4aa1-9362-96586244b50e.png",
    description: "Enhancing customer experience through our custom-built financial calculators."
  },
  {
    id: 3,
    name: "Razorpay",
    logo: "/lovable-uploads/4e2b2b87-cb8c-4429-91c0-656c30b09dae.png",
    description: "Leveraging our innovative solutions to streamline payment calculations."
  },
  {
    id: 4,
    name: "Snapdeal",
    logo: "/lovable-uploads/efb0573a-90c6-4247-a047-f34b0af0d593.png", 
    description: "Driving e-commerce sales with our integrated EMI and GST calculators."
  },
  {
    id: 5,
    name: "Tech Innovate Networks",
    logo: "/lovable-uploads/adee49d4-1abf-49c9-bf8f-68d76df1b17e.png",
    description: "Accelerating business growth through our financial technology solutions."
  }
];

export function FeaturedCustomers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  
  // Responsive handling for items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const visibleCustomers = () => {
    let items = [];
    for (let i = 0; i < itemsPerView; i++) {
      items.push(customers[(activeIndex + i) % customers.length]);
    }
    return items;
  };
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + customers.length) % customers.length);
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % customers.length);
  };
  
  return (
    <section className="py-20 bg-gradient-to-b from-white via-acros-primary/30 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 animate-bounce">
            <div className="flex items-center justify-center space-x-1">
              <Star className="text-yellow-400 fill-yellow-400" size={24} />
              <Star className="text-yellow-400 fill-yellow-400" size={24} />
              <Star className="text-yellow-400 fill-yellow-400" size={24} />
              <Star className="text-yellow-400 fill-yellow-400" size={24} />
              <Star className="text-yellow-400 fill-yellow-400" size={24} />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-acros-secondary animate-slide-up">
            Our Trusted Customers
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto animate-fade-in">
            Industry leaders who rely on our innovative solutions to drive their financial technology needs.
          </p>
        </div>
        
        <div className="relative px-6 md:px-10 max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-acros-secondary text-white p-3 rounded-full shadow-lg hover:bg-acros-accent transition-all duration-300 hover:scale-110"
            onClick={handlePrev}
            aria-label="Previous customer"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-acros-secondary text-white p-3 rounded-full shadow-lg hover:bg-acros-accent transition-all duration-300 hover:scale-110"
            onClick={handleNext}
            aria-label="Next customer"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Carousel Content */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
              {visibleCustomers().map((customer, index) => (
                <div 
                  key={customer.id}
                  className={cn(
                    "flex flex-col items-center bg-gradient-to-b from-white to-acros-primary/40 rounded-xl p-6 shadow-md transition-all duration-300 border border-acros-secondary/10 relative overflow-hidden group animate-fade-in",
                    isHovering === customer.id ? "shadow-xl scale-105" : "hover:shadow-lg hover:-translate-y-1"
                  )}
                  onMouseEnter={() => setIsHovering(customer.id)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-acros-secondary via-acros-accent to-acros-primary"></div>
                  
                  <div className="h-24 flex items-center justify-center mb-6 p-4 bg-white rounded-lg shadow-sm w-full">
                    <img 
                      src={customer.logo} 
                      alt={`${customer.name} logo`}
                      className={cn(
                        "max-h-16 max-w-full object-contain transition-all duration-500",
                        isHovering === customer.id ? "scale-110" : "group-hover:scale-105"
                      )}
                    />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-acros-secondary mb-3">{customer.name}</h3>
                  <p className="text-center text-foreground/70">{customer.description}</p>
                  
                  <div className="mt-4 w-16 h-1 bg-acros-accent rounded-full transform transition-all duration-300 group-hover:w-24"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {customers.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-acros-secondary w-8" 
                    : "bg-acros-secondary/30 hover:bg-acros-secondary/50"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="max-w-4xl mx-auto mt-20 px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold text-acros-secondary">Why Customers Choose Us</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-acros-primary/30">
              <div className="text-acros-secondary font-bold text-3xl md:text-4xl mb-2">99.9%</div>
              <div className="text-center text-sm font-medium text-acros-secondary/70">Accuracy Rate</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-acros-primary/30">
              <div className="text-acros-secondary font-bold text-3xl md:text-4xl mb-2">24/7</div>
              <div className="text-center text-sm font-medium text-acros-secondary/70">Support</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-acros-primary/30">
              <div className="text-acros-secondary font-bold text-3xl md:text-4xl mb-2">50K+</div>
              <div className="text-center text-sm font-medium text-acros-secondary/70">Daily Users</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-acros-primary/30">
              <div className="text-acros-secondary font-bold text-3xl md:text-4xl mb-2">100+</div>
              <div className="text-center text-sm font-medium text-acros-secondary/70">Enterprises</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
