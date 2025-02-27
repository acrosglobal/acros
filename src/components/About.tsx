
import { useState } from 'react';
import { CalendarDays, Activity, Users, Award } from 'lucide-react';

type Milestone = {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
};

const milestones: Milestone[] = [
  {
    id: 1,
    date: "1 May 2024",
    title: "Company Founded",
    description: "Acros Global was established with a vision to revolutionize the tech industry through innovative solutions.",
    icon: CalendarDays,
    color: "from-blue-400 to-indigo-400"
  },
  {
    id: 2,
    date: "13 July 2024",
    title: "Tax Calculator Launched",
    description: "Our first calculator was introduced to the market, setting new standards for tax calculation and planning.",
    icon: Award,
    color: "from-purple-400 to-pink-400"
  },
  {
    id: 3,
    date: "05 September 2024",
    title: "EMI Calculator Launched",
    description: "The EMI Calculator was released, expanding our product portfolio with another groundbreaking financial tool.",
    icon: Award,
    color: "from-green-400 to-emerald-400"
  },
  {
    id: 4,
    date: "17 September 2024",
    title: "Achieved 10K User Visits",
    description: "A significant milestone reached with 10,000 user visits, validating our market approach and product quality.",
    icon: Users,
    color: "from-yellow-400 to-amber-400"
  },
  {
    id: 5,
    date: "04 November 2024",
    title: "SIP Calculator Launched",
    description: "The SIP Calculator joined our lineup, further solidifying our position as financial tech innovators.",
    icon: Award,
    color: "from-blue-400 to-cyan-400"
  },
  {
    id: 6,
    date: "16 December 2024",
    title: "Achieved 50K User Visits",
    description: "Our user base expanded to 50,000 visits, marking our growing presence in the financial tools market.",
    icon: Users,
    color: "from-orange-400 to-red-400"
  },
  {
    id: 7,
    date: "27 December 2024",
    title: "GST Calculator Launched",
    description: "The GST Calculator completed our initial suite, offering comprehensive financial calculation solutions.",
    icon: Award,
    color: "from-indigo-400 to-violet-400"
  }
];

export function About() {
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-acros-primary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-acros-secondary animate-fade-in">About Acros Global</h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto text-balance animate-fade-in">
            From a visionary startup to an industry leader, our journey is defined by innovation, growth, and unwavering commitment to excellence.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-20 animate-fade-in">
          <div className="bg-white rounded-xl shadow-md p-8 border border-acros-primary">
            <p className="text-lg text-center text-foreground/80 mb-8 text-balance">
              Acros Global was founded with a clear mission: to develop cutting-edge technological solutions that address complex business challenges. Our team of dedicated experts works tirelessly to push boundaries and create products that not only meet but exceed market expectations.
            </p>
            
            <p className="text-lg text-center text-foreground/80 text-balance">
              We believe in the power of innovation to transform businesses and enhance user experiences. Our commitment to quality, functionality, and customer satisfaction has established us as a trusted partner for organizations seeking to leverage technology for strategic advantage.
            </p>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h3 className="text-2xl font-display font-bold text-acros-secondary mb-4 tracking-wider">Our Journey</h3>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-balance">
            Explore the key milestones that have shaped our growth and success.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block timeline-line bg-gradient-to-b from-acros-secondary/40 via-acros-secondary via-acros-secondary/40"></div>
          
          {/* Timeline Events */}
          <div className="space-y-8 md:space-y-16 relative">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={milestone.id} className="relative">
                  {/* Dot - Only visible on medium screens and up */}
                  <div 
                    className="hidden md:block timeline-dot"
                    style={{ top: '50%' }}
                    onMouseEnter={() => setActiveMilestone(milestone.id)}
                    onMouseLeave={() => setActiveMilestone(null)}
                  >
                    <div className="absolute inset-0 rounded-full animate-ping bg-acros-secondary/50" style={{animationDuration: '3s'}}></div>
                  </div>
                  
                  {/* Content - Full width on mobile, half width on desktop */}
                  <div 
                    className={`timeline-content relative mx-auto md:mx-0 ${isLeft ? 'md:timeline-content-left' : 'md:timeline-content-right'} 
                      ${activeMilestone === milestone.id ? 'bg-acros-secondary/10 border-acros-secondary/40' : 'bg-white border-acros-secondary/20'} 
                      border transition-all duration-500 backdrop-blur-sm`}
                  >
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-white opacity-90 -z-10 rounded-lg"></div>
                    
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 p-3 rounded-full bg-gradient-to-br ${milestone.color} text-white shadow-lg`}>
                        <milestone.icon size={20} />
                      </div>
                      
                      <div>
                        <div className="font-display text-sm font-semibold text-acros-secondary mb-1 tracking-wider">
                          {milestone.date}
                        </div>
                        <h4 className="text-xl font-display font-bold mb-2 bg-gradient-to-r from-acros-secondary to-acros-secondary/70 text-transparent bg-clip-text">
                          {milestone.title}
                        </h4>
                        <p className="text-foreground/70">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Connected line to timeline - Only visible on medium screens and up */}
                    <div 
                      className={`hidden md:block absolute top-1/2 w-8 h-px bg-acros-secondary/50 
                      ${isLeft ? 'left-full' : 'right-full'}`}
                      style={{ transform: 'translateY(-50%)' }}
                    ></div>
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
