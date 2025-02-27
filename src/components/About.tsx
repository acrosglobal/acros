
import { useState } from 'react';

type Milestone = {
  id: number;
  date: string;
  title: string;
  description: string;
};

const milestones: Milestone[] = [
  {
    id: 1,
    date: "1 May 2024",
    title: "Company Founded",
    description: "Acros Global was established with a vision to revolutionize the tech industry through innovative solutions."
  },
  {
    id: 2,
    date: "13 July 2024",
    title: "First Product Launched",
    description: "Product One was introduced to the market, setting new standards for performance and usability."
  },
  {
    id: 3,
    date: "05 September 2024",
    title: "Second Product Launched",
    description: "Product Two was released, expanding our product portfolio with another groundbreaking solution."
  },
  {
    id: 4,
    date: "17 September 2024",
    title: "Achieved 10K User Visits",
    description: "A significant milestone reached with 10,000 user visits, validating our market approach and product quality."
  },
  {
    id: 5,
    date: "04 November 2024",
    title: "Third Product Launched",
    description: "Product Three joined our lineup, further solidifying our position as industry innovators."
  },
  {
    id: 6,
    date: "16 December 2024",
    title: "Achieved 50K User Visits",
    description: "Our user base expanded to 50,000 visits, marking our growing presence in the market."
  },
  {
    id: 7,
    date: "27 December 2024",
    title: "Fourth Product Launched",
    description: "Product Four completed our initial product suite, offering comprehensive solutions for diverse business needs."
  }
];

export function About() {
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading animate-fade-in">About Acros Global</h2>
          <p className="section-subheading animate-fade-in">
            From a visionary startup to an industry leader, our journey is defined by innovation, growth, and unwavering commitment to excellence.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-20 animate-fade-in">
          <p className="text-lg text-center text-foreground/80 mb-8 text-balance">
            Acros Global was founded with a clear mission: to develop cutting-edge technological solutions that address complex business challenges. Our team of dedicated experts works tirelessly to push boundaries and create products that not only meet but exceed market expectations.
          </p>
          
          <p className="text-lg text-center text-foreground/80 text-balance">
            We believe in the power of innovation to transform businesses and enhance user experiences. Our commitment to quality, functionality, and customer satisfaction has established us as a trusted partner for organizations seeking to leverage technology for strategic advantage.
          </p>
        </div>
        
        <div className="text-center mb-16">
          <h3 className="text-2xl font-display font-bold text-acros-secondary mb-4">Our Journey</h3>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-balance">
            Explore the key milestones that have shaped our growth and success.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line"></div>
          
          {/* Timeline Events */}
          <div className="space-y-12 relative">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={milestone.id} className="relative">
                  {/* Dot */}
                  <div 
                    className="timeline-dot"
                    style={{ top: '50%' }}
                    onMouseEnter={() => setActiveMilestone(milestone.id)}
                    onMouseLeave={() => setActiveMilestone(null)}
                  ></div>
                  
                  {/* Content */}
                  <div 
                    className={`timeline-content ${isLeft ? 'timeline-content-left' : 'timeline-content-right'} 
                      ${activeMilestone === milestone.id ? 'bg-acros-primary/20' : 'bg-white'} 
                      border border-acros-primary/30 transition-colors duration-300 animate-fade-in`}
                  >
                    <div className="text-sm font-medium text-acros-secondary mb-2">
                      {milestone.date}
                    </div>
                    <h4 className="text-lg font-bold mb-2">{milestone.title}</h4>
                    <p className="text-foreground/70 text-sm">{milestone.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
