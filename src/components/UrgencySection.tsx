import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Users, Shield, CheckCircle } from "lucide-react";

const UrgencySection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('conversion-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const urgencyPoints = [
    {
      icon: Heart,
      text: "Only 6 human resource optimization consultations available this week",
      accent: "Limited Availability"
    },
    {
      icon: Users,
      text: "Your employees need the HR champion you want to be, not the administrator you're forced to be",
      accent: "Employee Need"
    },
    {
      icon: Clock,
      text: "Every day spent on paperwork is a day not spent developing the humans who make your organization successful",
      accent: "Time Lost Daily"
    }
  ];

  const guarantees = [
    {
      icon: CheckCircle,
      title: "Complimentary HR optimization consultation",
      description: "With people-first guarantee - no cost, no commitment to start"
    },
    {
      icon: Shield,
      title: "15+ Hours Weekly Guarantee",
      description: "If we can't identify ways to reclaim 15+ hours per week for human development and employee advocacy, the session is completely free"
    },
    {
      icon: Heart,
      title: "People Development Success",
      description: "Your success in developing people and building inclusive workplace culture is our primary objective"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container max-w-6xl mx-auto">
        {/* Urgency */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12">
            Your People Need You Now More Than Ever
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {urgencyPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <Card 
                  key={index} 
                  className="border-2 border-primary/20 bg-white hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                      💝 {point.accent}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {point.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <Button 
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-white font-heading font-bold px-16 py-6 text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-pulse"
          >
            Start My Transformation Now
          </Button>
        </div>
        
        {/* Risk Reversal */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Risk Reversal - Your Success is Guaranteed
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              return (
                <Card 
                  key={index} 
                  className="border-0 bg-white group hover:shadow-xl transition-all duration-300"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-secondary" />
                    </div>
                    
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                      {guarantee.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {guarantee.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Card className="border-0 bg-gradient-to-r from-secondary to-primary text-white inline-block">
              <CardContent className="p-6">
                <p className="text-lg font-heading font-semibold">
                  🛡️ 100% Risk-Free People Development Consultation
                </p>
                <p className="text-white/90 mt-2">
                  We're so confident we can help you reclaim your people-first purpose, there's absolutely no risk to you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;