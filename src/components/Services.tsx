
import { Brain, Cloud, Computer } from 'lucide-react';

type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  benefits: string[];
  color: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "AI Solutions",
    description: "Harness the power of artificial intelligence to transform your business operations and decision-making processes.",
    icon: Brain,
    benefits: [
      "Advanced machine learning algorithms",
      "Natural language processing capabilities",
      "Predictive analytics",
      "Computer vision systems"
    ],
    color: "bg-[#FFECE3]"
  },
  {
    id: 2,
    title: "IT Solutions",
    description: "Comprehensive IT services designed to optimize your infrastructure and enhance operational efficiency.",
    icon: Computer,
    benefits: [
      "System architecture design",
      "Software development",
      "Cybersecurity protocols",
      "IT infrastructure management"
    ],
    color: "bg-[#E9F9F0]"
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description: "Seamless cloud integration and management services to ensure scalability and flexibility for your business.",
    icon: Cloud,
    benefits: [
      "Cloud migration strategies",
      "Multi-cloud environments",
      "Cloud security measures",
      "Serverless computing"
    ],
    color: "bg-[#E3EEFF]"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-acros-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading animate-fade-in">Our Services</h2>
          <p className="section-subheading animate-fade-in">
            We offer specialized services tailored to meet your unique business needs and technological requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card group hover:translate-y-[-5px] transition-transform duration-300 animate-fade-in"
            >
              <div className={`${service.color} p-4 rounded-full mb-6`}>
                <service.icon size={32} className="text-acros-secondary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-acros-dark">{service.title}</h3>
              
              <p className="text-foreground/70 text-center mb-6">{service.description}</p>
              
              <div className="w-full">
                <h4 className="text-sm font-semibold mb-3 text-acros-secondary">Key Benefits</h4>
                <ul className="space-y-2 text-sm">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-acros-secondary mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-acros-secondary text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300"
          >
            Request a Service
          </a>
        </div>
      </div>
    </section>
  );
}
