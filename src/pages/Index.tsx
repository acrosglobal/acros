
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { FeaturedCustomers } from "@/components/FeaturedCustomers";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <Products />
      <Services />
      <About />
      <FeaturedCustomers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
