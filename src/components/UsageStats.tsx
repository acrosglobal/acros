
import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

// Generate data for the last 30 days with values slightly fluctuating around 10-15k
const generateData = () => {
  const data = [];
  const today = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    
    // Generate a random number between 10k and 15k
    const value = Math.floor(10000 + Math.random() * 5000);
    
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      users: value,
    });
  }
  
  return data;
};

export function UsageStats() {
  const [data, setData] = useState(generateData());
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Animation to make the chart appear when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('usage-stats-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  // Animation to cycle through data points
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isVisible, data.length]);
  
  // Calculate the average, min, and max values
  const avgUsers = Math.floor(data.reduce((sum, item) => sum + item.users, 0) / data.length);
  const maxUsers = Math.max(...data.map(item => item.users));
  const currentUsers = data[data.length - 1].users;
  
  // Growth percentage calculation (comparing last day to average)
  const growthPercentage = Math.floor(((currentUsers - avgUsers) / avgUsers) * 100);
  
  // Custom tooltip for the chart
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-acros-primary">
          <p className="text-sm text-acros-secondary font-medium">{label}</p>
          <p className="text-lg font-bold text-acros-accent">
            {payload[0].value.toLocaleString()} users
          </p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <section id="usage-stats-section" className="py-24 bg-gradient-to-b from-white to-acros-primary/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          {/* Left side - Stats */}
          <div className="w-full lg:w-2/5 space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-acros-primary/30 text-acros-secondary rounded-full text-sm font-medium">
              <Users className="mr-2 h-4 w-4" />
              Daily Active Users
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-acros-secondary animate-slide-up">
              <span className="text-acros-accent">10K+</span> Daily Users <br />and Growing
            </h2>
            
            <p className="text-lg text-foreground/80 max-w-md animate-fade-in">
              Our tools are trusted by thousands of users every day, providing accurate financial calculations across businesses worldwide.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className={cn(
                "p-6 rounded-xl border border-acros-accent/20 bg-white shadow-sm transition-all duration-500",
                isVisible ? "animate-fade-in opacity-100" : "opacity-0"
              )} style={{ animationDelay: "0.2s" }}>
                <h3 className="text-sm text-foreground/70 font-medium">Current Users</h3>
                <p className="text-3xl font-bold text-acros-secondary mt-1">{currentUsers.toLocaleString()}</p>
              </div>
              
              <div className={cn(
                "p-6 rounded-xl border border-acros-accent/20 bg-white shadow-sm transition-all duration-500",
                isVisible ? "animate-fade-in opacity-100" : "opacity-0"
              )} style={{ animationDelay: "0.4s" }}>
                <h3 className="text-sm text-foreground/70 font-medium">Average Users</h3>
                <p className="text-3xl font-bold text-acros-secondary mt-1">{avgUsers.toLocaleString()}</p>
              </div>
              
              <div className={cn(
                "p-6 rounded-xl border border-acros-accent/20 bg-white shadow-sm transition-all duration-500",
                isVisible ? "animate-fade-in opacity-100" : "opacity-0"
              )} style={{ animationDelay: "0.6s" }}>
                <h3 className="text-sm text-foreground/70 font-medium">Growth</h3>
                <div className="flex items-center mt-1">
                  <p className="text-3xl font-bold text-green-600">{growthPercentage}%</p>
                  <ArrowUpRight className="ml-1 h-5 w-5 text-green-600" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Chart */}
          <div className={cn(
            "w-full lg:w-3/5 h-[400px] transition-all duration-1000 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-acros-primary/30 h-full">
              <div className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                  >
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6A8D73" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#6A8D73" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#EDF4F2" />
                    <XAxis 
                      dataKey="date" 
                      stroke="#31473A" 
                      tick={{ fill: '#31473A', fontSize: 12 }}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="#31473A" 
                      tick={{ fill: '#31473A', fontSize: 12 }}
                      tickLine={false}
                      tickFormatter={(value) => value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#31473A" 
                      fillOpacity={1} 
                      fill="url(#colorUsers)" 
                      strokeWidth={2}
                      activeDot={{ 
                        r: 8, 
                        fill: "#31473A",
                        stroke: "#FFFFFF",
                        strokeWidth: 2
                      }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
