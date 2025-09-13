import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hr-hero-image.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('conversion-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 py-12 md:py-20"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
              You Became HR to Help Humans. Instead You're Processing Forms While Employees Wait for Your Attention.
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              The human in Human Resources is disappearing. You're drowning in administrative tasks while the people who need your development and support are left wondering if you actually care.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-white font-medium text-lg italic">
                "When did Human Resources become Paperwork Processing instead of Human Development and Employee Advocacy?"
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={scrollToForm}
              className="bg-white text-primary hover:bg-white/90 font-heading font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Reclaim My People-First Purpose
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 font-heading font-medium px-8 py-4 text-lg backdrop-blur-sm"
            >
              Learn How It Works
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src={heroImage} 
              alt="HR professional looking longingly at employees having meaningful conversations while buried under paperwork"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 animate-pulse">
            <p className="text-primary font-heading font-semibold text-sm">
              💝 15+ Hours/Week Saved
            </p>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 animate-pulse delay-1000">
            <p className="text-secondary font-heading font-semibold text-sm">
              🎯 Focus on People, Not Paperwork
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;