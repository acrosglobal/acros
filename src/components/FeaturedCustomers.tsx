
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
    logo: "/lovable-uploads/e9aac731-06e0-4aa1-9362-96586244b50e.png",
    description: "Transforming satellite technology with our advanced financial planning tools."
  },
  {
    id: 2,
    name: "Yes Bank",
    logo: "/lovable-uploads/adee49d4-1abf-49c9-bf8f-68d76df1b17e.png",
    description: "Enhancing customer experience through our custom-built financial calculators."
  },
  {
    id: 3,
    name: "Razorpay",
    logo: "/lovable-uploads/c2f767c7-deab-4c60-8dff-0416f56e43de.png",
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
    logo: "/lovable-uploads/15c05b0c-d7da-4fc0-905f-e29ea4063c10.png",
    description: "Accelerating business growth through our financial technology solutions."
  }
];

export function FeaturedCustomers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center space-x-1">
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-acros-secondary">Our Trusted Customers</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Industry leaders who rely on our innovative solutions to drive their financial technology needs.
          </p>
        </div>
        
        <div className="relative px-6 md:px-10 max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-acros-secondary text-white p-2 rounded-full shadow-md hover:bg-acros-accent transition-colors duration-300"
            onClick={handlePrev}
            aria-label="Previous customer"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-acros-secondary text-white p-2 rounded-full shadow-md hover:bg-acros-accent transition-colors duration-300"
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
                  className="flex flex-col items-center bg-gradient-to-b from-acros-primary to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-acros-secondary/10 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-acros-secondary via-acros-accent to-acros-primary"></div>
                  
                  <div className="h-20 flex items-center justify-center mb-6 p-4 bg-white rounded-lg shadow-sm w-full">
                    <img 
                      src={customer.logo} 
                      alt={`${customer.name} logo`}
                      className="max-h-16 max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-acros-secondary mb-2">{customer.name}</h3>
                  <p className="text-center text-foreground/70 text-sm">{customer.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {customers.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-acros-secondary w-6" : "bg-acros-secondary/30"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="max-w-4xl mx-auto mt-16 px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl font-display font-bold text-acros-secondary">Why Customers Choose Us</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-4 rounded-lg bg-acros-primary/50 hover:bg-acros-primary transition-colors duration-300">
              <div className="text-acros-secondary font-bold text-2xl md:text-3xl mb-1">99.9%</div>
              <div className="text-center text-sm font-medium text-acros-secondary/70">Accuracy Rate</div>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-acros-primary/50 hover:bg-acros-primary transition-colors duration-300">
              <div className="text-acros-secondary font-bold text-2xl md:text-3xl mb-1">24/7</div>
              <div className="text-center text-sm font-medium text-acros-secondary/70">Support</div>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-acros-primary/50 hover:bg-acros-primary transition-colors duration-300">
              <div className="text-acros-secondary font-bold text-2xl md:text-3xl mb-1">50K+</div>
              <div className="text-center text-sm font-medium text-acros-secondary/70">Daily Users</div>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-acros-primary/50 hover:bg-acros-primary transition-colors duration-300">
              <div className="text-acros-secondary font-bold text-2xl md:text-3xl mb-1">100+</div>
              <div className="text-center text-sm font-medium text-acros-secondary/70">Enterprises</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
