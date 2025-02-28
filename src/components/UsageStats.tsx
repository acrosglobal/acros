
import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, BarChart, Cell } from 'recharts';
import { ArrowUpRight, Users, TrendingUp, Award, PieChart } from 'lucide-react';
import { cn } from '@/lib/utils';

// Generate data for the last 30 days with values fluctuating around 45k-55k
const generateData = () => {
  const data = [];
  const today = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    
    // Generate a random number between 45k and 55k
    const value = Math.floor(45000 + Math.random() * 10000);
    
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      users: value,
    });
  }
  
  return data;
};

// Generate data for product categories
const productUsageData = [
  { name: 'EMI Calculator', value: 35 },
  { name: 'GST Calculator', value: 25 },
  { name: 'SIP Calculator', value: 20 },
  { name: 'Loan Calculator', value: 15 },
  { name: 'Others', value: 5 },
];

export function UsageStats() {
  const [data, setData] = useState(generateData());
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [chartType, setChartType] = useState('area'); // 'area' or 'bar'
  
  // Colors for the chart - using more subdued palette
  const chartColors = {
    primary: '#6A8D73', // Using acros-accent color
    secondary: '#31473A', // Using acros-secondary color
    accent: '#8E9196', // Neutral gray
    highlight: '#31473A', // acros-secondary
    background: 'rgba(237, 244, 242, 0.6)', // Soft acros-primary
  };
  
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
  
  // Auto-switch chart type
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setChartType(prev => prev === 'area' ? 'bar' : 'area');
    }, 10000);
    
    return () => clearInterval(interval);
  }, [isVisible]);
  
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
        <div className="bg-white p-4 shadow-xl rounded-lg border-2 border-acros-secondary/40 animate-scale-in">
          <p className="text-sm text-acros-secondary font-medium">{label}</p>
          <p className="text-xl font-bold text-acros-secondary">
            {payload[0].value.toLocaleString()} users
          </p>
          <div className="w-full h-1 bg-gradient-to-r from-acros-secondary to-acros-accent mt-2 rounded-full"></div>
        </div>
      );
    }
    return null;
  };
  
  // Chart switcher buttons
  const ChartSwitcher = () => (
    <div className="flex items-center space-x-3 mb-4">
      <button 
        onClick={() => setChartType('area')}
        className={cn(
          "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300",
          chartType === 'area' 
            ? "bg-gradient-to-r from-acros-secondary to-acros-accent text-white shadow-lg" 
            : "bg-white text-acros-secondary hover:bg-acros-primary"
        )}
      >
        Area Chart
      </button>
      <button 
        onClick={() => setChartType('bar')}
        className={cn(
          "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300",
          chartType === 'bar' 
            ? "bg-gradient-to-r from-acros-secondary to-acros-accent text-white shadow-lg" 
            : "bg-white text-acros-secondary hover:bg-acros-primary"
        )}
      >
        Bar Chart
      </button>
    </div>
  );
  
  return (
    <section id="usage-stats-section" className="py-24 bg-gradient-to-b from-white via-acros-primary/30 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Decorative elements - reduced opacity for subtlety */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-acros-primary to-acros-accent/20 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-acros-primary to-acros-secondary/20 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDuration: '7s' }}></div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto relative">
          {/* Left side - Stats */}
          <div className="w-full lg:w-2/5 space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-acros-secondary text-white rounded-full text-sm font-medium shadow-md">
              <Users className="mr-2 h-4 w-4" />
              Daily Active Users
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-acros-secondary animate-slide-up">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-acros-secondary via-acros-accent to-acros-secondary">50K+</span> Daily Users <br />across our Products
            </h2>
            
            <p className="text-lg text-acros-secondary/80 max-w-md animate-fade-in">
              Our innovative financial calculators and tools are trusted by tens of thousands of users every day, providing accurate calculations and insights across businesses worldwide.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className={cn(
                "p-6 rounded-xl border border-acros-secondary/10 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
                isVisible ? "animate-fade-in opacity-100" : "opacity-0"
              )} style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-acros-secondary font-medium">Current Users</h3>
                  <div className="w-8 h-8 rounded-full bg-acros-primary flex items-center justify-center">
                    <Users className="h-4 w-4 text-acros-secondary" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-acros-secondary">{currentUsers.toLocaleString()}</p>
                <div className="w-full h-1 bg-acros-secondary/40 mt-2 rounded-full"></div>
              </div>
              
              <div className={cn(
                "p-6 rounded-xl border border-acros-secondary/10 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
                isVisible ? "animate-fade-in opacity-100" : "opacity-0"
              )} style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-acros-secondary font-medium">Average Users</h3>
                  <div className="w-8 h-8 rounded-full bg-acros-primary flex items-center justify-center">
                    <PieChart className="h-4 w-4 text-acros-secondary" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-acros-secondary">{avgUsers.toLocaleString()}</p>
                <div className="w-full h-1 bg-acros-secondary/40 mt-2 rounded-full"></div>
              </div>
              
              <div className={cn(
                "p-6 rounded-xl border border-acros-secondary/10 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
                isVisible ? "animate-fade-in opacity-100" : "opacity-0"
              )} style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-acros-secondary font-medium">Growth</h3>
                  <div className="w-8 h-8 rounded-full bg-acros-primary flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-acros-secondary" />
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-3xl font-bold text-acros-secondary">{growthPercentage}%</p>
                  <ArrowUpRight className="ml-1 h-5 w-5 text-acros-secondary" />
                </div>
                <div className="w-full h-1 bg-acros-secondary/40 mt-2 rounded-full"></div>
              </div>
            </div>
            
            {/* Product Usage Distribution */}
            <div className={cn(
              "mt-8 p-6 rounded-xl border border-acros-secondary/10 bg-white shadow-md",
              isVisible ? "animate-slide-up opacity-100" : "opacity-0"
            )} style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-acros-secondary mr-2" />
                <h3 className="text-lg font-bold text-acros-secondary">Most Used Products</h3>
              </div>
              
              <div className="space-y-4">
                {productUsageData.map((product, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-acros-secondary">{product.name}</span>
                      <span className="text-acros-secondary">{product.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-acros-primary rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full animate-slide-right",
                          idx === 0 ? "bg-acros-secondary" :
                          idx === 1 ? "bg-acros-accent" :
                          idx === 2 ? "bg-acros-secondary/80" :
                          idx === 3 ? "bg-acros-accent/80" :
                          "bg-acros-secondary/60"
                        )}
                        style={{ 
                          width: `${product.value}%`,
                          animationDelay: `${idx * 0.2}s`,
                          animationDuration: '1s'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Chart */}
          <div className={cn(
            "w-full lg:w-3/5 h-[500px] transition-all duration-1000 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <div className="bg-white p-6 rounded-xl shadow-md border border-acros-secondary/10 h-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-acros-secondary">Daily User Activity</h3>
                <ChartSwitcher />
              </div>
              
              <div className="h-[90%] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  {chartType === 'area' ? (
                    <AreaChart
                      data={data}
                      margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                    >
                      <defs>
                        <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={chartColors.primary} stopOpacity={0.8} />
                          <stop offset="95%" stopColor={chartColors.primary} stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E9EEFF" />
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
                        stroke={chartColors.primary} 
                        fillOpacity={1} 
                        fill="url(#colorUsers)" 
                        strokeWidth={2}
                        activeDot={{ 
                          r: 6, 
                          fill: chartColors.secondary,
                          stroke: "#FFFFFF",
                          strokeWidth: 2
                        }}
                      />
                    </AreaChart>
                  ) : (
                    <BarChart
                      data={data}
                      margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#E9EEFF" />
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
                      <Bar dataKey="users" radius={[4, 4, 0, 0]}>
                        {data.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={index === activeIndex ? chartColors.secondary : chartColors.primary} 
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>
              
              {/* Animated indicator dots */}
              <div className="flex justify-center space-x-1 mt-3">
                {[...Array(10)].map((_, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      Math.floor(activeIndex / 3) === index 
                        ? "bg-acros-secondary w-6" 
                        : "bg-acros-primary"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
