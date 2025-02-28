
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
  
  // Colors for the chart
  const chartColors = {
    primary: '#0EA5E9', // Ocean Blue
    secondary: '#D946EF', // Magenta Pink
    accent: '#F97316', // Bright Orange
    highlight: '#8B5CF6', // Vivid Purple
    background: 'rgba(14, 165, 233, 0.1)',
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
        <div className="bg-white p-4 shadow-xl rounded-lg border-2 border-indigo-400 animate-scale-in">
          <p className="text-sm text-indigo-500 font-medium">{label}</p>
          <p className="text-xl font-bold text-indigo-700">
            {payload[0].value.toLocaleString()} users
          </p>
          <div className="w-full h-1 bg-gradient-to-r from-indigo-400 to-blue-500 mt-2 rounded-full"></div>
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
            ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg" 
            : "bg-white text-gray-600 hover:bg-gray-100"
        )}
      >
        Area Chart
      </button>
      <button 
        onClick={() => setChartType('bar')}
        className={cn(
          "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300",
          chartType === 'bar' 
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg" 
            : "bg-white text-gray-600 hover:bg-gray-100"
        )}
      >
        Bar Chart
      </button>
    </div>
  );
  
  return (
    <section id="usage-stats-section" className="py-24 bg-gradient-to-b from-white via-blue-50 to-indigo-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-300 to-teal-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '7s' }}></div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto relative">
          {/* Left side - Stats */}
          <div className="w-full lg:w-2/5 space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-full text-sm font-medium shadow-md">
              <Users className="mr-2 h-4 w-4" />
              Daily Active Users
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-indigo-900 animate-slide-up">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">50K+</span> Daily Users <br />across our Products
            </h2>
            
            <p className="text-lg text-indigo-800/80 max-w-md animate-fade-in">
              Our innovative financial calculators and tools are trusted by tens of thousands of users every day, providing accurate calculations and insights across businesses worldwide.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className={cn(
                "p-6 rounded-xl border border-indigo-200 bg-white shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
                isVisible ? "animate-fade-in opacity-100" : "opacity-0"
              )} style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-indigo-500 font-medium">Current Users</h3>
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">{currentUsers.toLocaleString()}</p>
                <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mt-2 rounded-full"></div>
              </div>
              
              <div className={cn(
                "p-6 rounded-xl border border-purple-200 bg-white shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
                isVisible ? "animate-fade-in opacity-100" : "opacity-0"
              )} style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-purple-500 font-medium">Average Users</h3>
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <PieChart className="h-4 w-4 text-purple-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">{avgUsers.toLocaleString()}</p>
                <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500 mt-2 rounded-full"></div>
              </div>
              
              <div className={cn(
                "p-6 rounded-xl border border-emerald-200 bg-white shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
                isVisible ? "animate-fade-in opacity-100" : "opacity-0"
              )} style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-emerald-500 font-medium">Growth</h3>
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-emerald-600" />
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-3xl font-bold text-emerald-600">{growthPercentage}%</p>
                  <ArrowUpRight className="ml-1 h-5 w-5 text-emerald-600" />
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mt-2 rounded-full"></div>
              </div>
            </div>
            
            {/* Product Usage Distribution */}
            <div className={cn(
              "mt-8 p-6 rounded-xl border border-indigo-200 bg-white shadow-lg",
              isVisible ? "animate-slide-up opacity-100" : "opacity-0"
            )} style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-indigo-900">Most Used Products</h3>
              </div>
              
              <div className="space-y-4">
                {productUsageData.map((product, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-indigo-800">{product.name}</span>
                      <span className="text-indigo-600">{product.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-indigo-100 rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full animate-slide-right",
                          idx === 0 ? "bg-gradient-to-r from-blue-500 to-indigo-600" :
                          idx === 1 ? "bg-gradient-to-r from-purple-500 to-pink-600" :
                          idx === 2 ? "bg-gradient-to-r from-emerald-500 to-teal-600" :
                          idx === 3 ? "bg-gradient-to-r from-amber-500 to-orange-600" :
                          "bg-gradient-to-r from-gray-400 to-gray-600"
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
            <div className="bg-white p-6 rounded-xl shadow-xl border border-indigo-200 h-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-indigo-900">Daily User Activity</h3>
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
                        stroke="#6366F1" 
                        tick={{ fill: '#4F46E5', fontSize: 12 }}
                        tickLine={false}
                      />
                      <YAxis 
                        stroke="#6366F1" 
                        tick={{ fill: '#4F46E5', fontSize: 12 }}
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
                        strokeWidth={3}
                        activeDot={{ 
                          r: 8, 
                          fill: chartColors.highlight,
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
                        stroke="#6366F1" 
                        tick={{ fill: '#4F46E5', fontSize: 12 }}
                        tickLine={false}
                      />
                      <YAxis 
                        stroke="#6366F1" 
                        tick={{ fill: '#4F46E5', fontSize: 12 }}
                        tickLine={false}
                        tickFormatter={(value) => value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="users" radius={[4, 4, 0, 0]}>
                        {data.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={index === activeIndex ? chartColors.highlight : chartColors.primary} 
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
                        ? "bg-indigo-600 w-6" 
                        : "bg-indigo-200"
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
