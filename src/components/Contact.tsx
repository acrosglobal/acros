
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
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [newsletter, setNewsletter] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Include recipient email in form data
    const contactEmail = 'contact@acrosglobal.in';
    const emailData = {
      ...formData,
      to: contactEmail,
    };
    
    try {
      // Simulate sending data to email
      // In a real implementation, you would use a form submission service or backend endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success(`Message sent to ${contactEmail}. We'll get back to you soon!`);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="contact" className="py-20 bg-acros-secondary/5 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading animate-fade-in">Get In Touch</h2>
          <p className="section-subheading animate-fade-in">
            Have questions or want to learn more about our calculators and services? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-right">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300 border border-acros-secondary/10">
              <h3 className="text-xl font-display font-bold mb-6 text-acros-secondary tracking-wide">Send Us a Message</h3>
              
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
                      className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-acros-secondary/50 transition-all duration-300"
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
                      className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-acros-secondary/50 transition-all duration-300"
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
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-acros-secondary/50 transition-all duration-300"
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
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-acros-secondary/50 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
                <div className="mt-4 text-sm text-center text-foreground/60">
                  Your message will be sent to contact@acrosglobal.in
                </div>
              </form>
            </div>
          </div>
          
          <div className="animate-slide-left">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8 hover:shadow-lg transition-all duration-300 border border-acros-secondary/10">
              <h3 className="text-xl font-display font-bold mb-6 text-acros-secondary tracking-wide">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-acros-secondary/10 p-3 rounded-full shadow-md">
                    <Mail className="text-acros-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1 text-acros-dark">Email</h4>
                    <a href="mailto:contact@acrosglobal.in" className="text-acros-secondary hover:text-acros-secondary/80 transition-colors font-medium">
                      contact@acrosglobal.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-acros-secondary/10 p-3 rounded-full shadow-md">
                    <Phone className="text-acros-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1 text-acros-dark">Phone</h4>
                    <a href="tel:+917448252629" className="text-acros-secondary hover:text-acros-secondary/80 transition-colors font-medium">
                      +91 7448252629
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-acros-secondary/10 p-3 rounded-full shadow-md">
                    <MapPin className="text-acros-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1 text-acros-dark">Address</h4>
                    <p className="text-foreground/80">
                      RG Infotech Park, Hinjewadi Phase - I, <br />
                      Pune, MH - 411057
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300 border border-acros-secondary/10">
              <h3 className="text-xl font-display font-bold mb-4 text-acros-secondary tracking-wide">Subscribe to Our Newsletter</h3>
              <p className="text-foreground/80 mb-6">
                Stay updated with the latest news, calculator releases, and industry insights.
              </p>
              
              {isSubscribed ? (
                <div className="bg-acros-secondary/10 p-6 rounded-lg border border-acros-secondary/30">
                  <p className="text-acros-secondary font-medium text-center">
                    Thank you for subscribing to our newsletter!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={newsletter}
                    onChange={(e) => setNewsletter(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg sm:rounded-r-none border border-border focus:outline-none focus:ring-2 focus:ring-acros-secondary/50 transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-acros-secondary text-white rounded-lg sm:rounded-l-none mt-2 sm:mt-0 border border-acros-secondary hover:bg-acros-secondary/90 transition-colors font-medium"
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
