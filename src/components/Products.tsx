
import { useState } from 'react';
import { Calculator, DollarSign, Percent, Activity, X } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  iconSize: number;
  iconColor: string;
  bgColor: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Tax Calculator",
    description: "The most accurate and user-friendly tax calculation tool, helping individuals and businesses optimize their tax planning.",
    features: [
      "Super fast processing with real-time results",
      "Intuitive interface for effortless navigation",
      "Comprehensive tax regulations database",
      "Seamless integration with accounting systems"
    ],
    icon: Calculator,
    iconSize: 80,
    iconColor: "#8AAAE5",
    bgColor: "from-blue-50 to-indigo-50"
  },
  {
    id: 2,
    name: "EMI Calculator",
    description: "A powerful tool for calculating equated monthly installments, helping you make informed decisions about loans and financial planning.",
    features: [
      "Instant EMI computation for any loan amount",
      "Detailed amortization schedules",
      "Visual payment breakdowns with charts",
      "Compare multiple loan scenarios simultaneously"
    ],
    icon: DollarSign,
    iconSize: 80,
    iconColor: "#8AAAE5",
    bgColor: "from-purple-50 to-blue-50"
  },
  {
    id: 3,
    name: "SIP Calculator",
    description: "Plan your investments with precision using our Systematic Investment Plan calculator, designed for maximum returns visualization.",
    features: [
      "AI-powered investment growth projections",
      "Customizable investment parameters",
      "Comprehensive reporting with visual charts",
      "Multi-scenario comparison tools"
    ],
    icon: Activity,
    iconSize: 80,
    iconColor: "#8AAAE5",
    bgColor: "from-green-50 to-emerald-50"
  },
  {
    id: 4,
    name: "GST Calculator",
    description: "Simplify your Goods and Services Tax calculations with our intuitive calculator that ensures compliance and accuracy.",
    features: [
      "Up-to-date GST rates for all categories",
      "Reverse calculation capabilities",
      "Itemized GST breakdown reports",
      "IGST, CGST and SGST split calculations"
    ],
    icon: Percent,
    iconSize: 80,
    iconColor: "#8AAAE5",
    bgColor: "from-orange-50 to-amber-50"
  }
];

export function Products() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading animate-fade-in">Our Financial Calculators</h2>
          <p className="section-subheading animate-fade-in">
            Discover our suite of powerful calculation tools designed to transform your financial planning and optimize your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card group animate-fade-in cursor-pointer"
              onClick={() => setActiveProduct(product)}
            >
              <div className="product-card-icon bg-gradient-to-br group-hover:scale-[1.02] transition-all duration-500">
                <div className={`w-32 h-32 rounded-full flex items-center justify-center bg-gradient-to-br ${product.bgColor} shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                  <product.icon 
                    size={product.iconSize} 
                    className="text-acros-secondary transition-all duration-500 group-hover:scale-110" 
                  />
                </div>
              </div>
              <div className="product-card-content">
                <div className="flex items-center gap-3 mb-3">
                  <product.icon className="text-acros-secondary" size={20} />
                  <span className="text-xs font-medium bg-acros-secondary/10 text-acros-secondary px-3 py-1 rounded-full">
                    Super Fast
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold mb-2 text-acros-dark group-hover:text-acros-secondary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-foreground/70 mb-4 line-clamp-3">{product.description}</p>
                <button
                  className="mt-auto text-acros-secondary font-medium border-b border-transparent hover:border-acros-secondary transition-all duration-300 inline-flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProduct(product);
                  }}
                >
                  Learn More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Product Modal */}
      {activeProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" 
          onClick={() => setActiveProduct(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative h-48 overflow-hidden rounded-t-xl bg-gradient-to-r ${activeProduct.bgColor}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <activeProduct.icon 
                  size={100} 
                  className="text-acros-secondary/80" 
                />
              </div>
              <button 
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow-md hover:bg-acros-secondary hover:text-white transition-all duration-300"
                onClick={() => setActiveProduct(null)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-5">
                <activeProduct.icon className="text-acros-secondary" size={28} />
                <h3 className="text-2xl font-display font-bold text-acros-dark tracking-wide">
                  {activeProduct.name}
                </h3>
              </div>
              <p className="text-foreground/80 mb-6 text-lg">{activeProduct.description}</p>
              
              <div className="mb-8 bg-acros-secondary/5 p-6 rounded-lg border border-acros-secondary/20">
                <h4 className="text-lg font-display font-semibold mb-4 text-acros-secondary tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-4">
                  {activeProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-acros-secondary/20 rounded-full p-1 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-acros-secondary">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-end gap-4 mt-6">
                <button 
                  className="btn-outline"
                  onClick={() => setActiveProduct(null)}
                >
                  Close
                </button>
                <button 
                  className="btn-primary"
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
