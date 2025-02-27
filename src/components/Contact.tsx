
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [newsletter, setNewsletter] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully. We'll get back to you soon!");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletter) {
      toast.error("Please enter your email address");
      return;
    }
    
    // Simulate subscription
    setTimeout(() => {
      setIsSubscribed(true);
      toast.success("Thank you for subscribing to our newsletter!");
      setNewsletter('');
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-20 bg-acros-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading animate-fade-in">Get In Touch</h2>
          <p className="section-subheading animate-fade-in">
            Have questions or want to learn more about our products and services? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-right">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold mb-6 text-acros-secondary">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground/70">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-acros-secondary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground/70">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-acros-secondary"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1 text-foreground/70">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-acros-secondary"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-acros-secondary resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-acros-secondary text-white rounded-lg font-medium hover:bg-acros-secondary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="animate-slide-left">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 text-acros-secondary">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-acros-primary/30 p-3 rounded-full">
                    <Mail size={20} className="text-acros-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Email</h4>
                    <a href="mailto:info@acrosglobal.com" className="text-foreground/70 hover:text-acros-secondary transition-colors">
                      info@acrosglobal.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-acros-primary/30 p-3 rounded-full">
                    <Phone size={20} className="text-acros-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Phone</h4>
                    <a href="tel:+11234567890" className="text-foreground/70 hover:text-acros-secondary transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-acros-primary/30 p-3 rounded-full">
                    <MapPin size={20} className="text-acros-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Address</h4>
                    <p className="text-foreground/70">
                      123 Innovation Drive, Tech City, CA 94123, United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold mb-4 text-acros-secondary">Subscribe to Our Newsletter</h3>
              <p className="text-foreground/70 mb-6">
                Stay updated with the latest news, product releases, and industry insights.
              </p>
              
              {isSubscribed ? (
                <div className="bg-acros-primary/20 p-4 rounded-lg">
                  <p className="text-acros-secondary font-medium">
                    Thank you for subscribing to our newsletter!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-stretch">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={newsletter}
                    onChange={(e) => setNewsletter(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-l-lg border border-border focus:outline-none focus:ring-1 focus:ring-acros-secondary"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-acros-secondary text-white rounded-r-lg hover:bg-acros-secondary/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
