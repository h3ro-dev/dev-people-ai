import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  UserPlus, 
  Target, 
  Heart, 
  Shield, 
  DollarSign, 
  TrendingUp,
  Users,
  BarChart3,
  CheckCircle,
  Brain
} from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: UserPlus,
      title: "Employee Lifecycle Management",
      description: "Onboarding experiences that feel personal, career development tracking, succession planning, exit interviews that provide actionable insights",
      features: ["Personal Onboarding", "Career Tracking", "Succession Planning", "Actionable Exit Insights"]
    },
    {
      icon: Target,
      title: "Performance and Development",
      description: "Continuous feedback systems, goal alignment, skill development recommendations, career pathway planning",
      features: ["Continuous Feedback", "Goal Alignment", "Skill Development", "Career Pathways"]
    },
    {
      icon: Heart,
      title: "Culture and Engagement",
      description: "Employee satisfaction monitoring, inclusion and diversity tracking, culture initiative management, workplace environment optimization",
      features: ["Satisfaction Monitoring", "D&I Tracking", "Culture Initiatives", "Environment Optimization"]
    },
    {
      icon: Shield,
      title: "Compliance and Administration",
      description: "Automated benefits management, regulatory compliance, documentation, audit preparation, policy management",
      features: ["Benefits Automation", "Compliance Tracking", "Audit Preparation", "Policy Management"]
    },
    {
      icon: DollarSign,
      title: "Compensation and Recognition",
      description: "Pay equity analysis, recognition program management, compensation planning, performance reward optimization",
      features: ["Pay Equity Analysis", "Recognition Programs", "Compensation Planning", "Reward Optimization"]
    }
  ];

  const intelligence = [
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Employee satisfaction and retention risk identification"
    },
    {
      icon: Users,
      title: "Career Development AI",
      description: "Personalized recommendations based on aspirations and organizational needs"
    },
    {
      icon: BarChart3,
      title: "Culture Assessment",
      description: "Workplace culture improvement with diversity and inclusion focus"
    },
    {
      icon: CheckCircle,
      title: "Manager Effectiveness",
      description: "Leadership development support for people management excellence"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Your AI Human Development Support System
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Comprehensive human-centered HR operations designed to put people first
          </p>
        </div>
        
        {/* Core Capabilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {capability.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <Badge 
                        key={featureIndex}
                        variant="outline"
                        className="text-xs w-full justify-start border-primary/20 text-primary hover:bg-primary/5"
                      >
                        <CheckCircle className="w-3 h-3 mr-2" />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Intelligence Features */}
        <div>
          <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Human Development Intelligence & Workplace Culture Enhancement
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {intelligence.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-white text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-secondary" />
                    </div>
                    
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;