import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users2, Shield, Clock3, MessageCircle } from "lucide-react";

const EmotionalBurdenSection = () => {
  const burdens = [
    {
      icon: Clock3,
      title: "The 3 PM Crisis Conflict",
      description: "Employee mental health crisis at 3 PM. Benefits documentation due at 5 PM. Compliance audit preparation due tomorrow. When do you actually help humans?",
      emotion: "Overwhelmed"
    },
    {
      icon: Users2,
      title: "The Bridge Between Cold & Human",
      description: "You're the bridge between cold corporate policies and struggling human beings who need understanding, development, and career guidance.",
      emotion: "Exhausted"
    },
    {
      icon: MessageCircle,
      title: "The Never-Ending Need",
      description: "Every day someone approaches you needing genuine human support - career advice, conflict resolution, personal development - but the administrative burden never stops growing.",
      emotion: "Torn"
    },
    {
      icon: Shield,
      title: "The Emotional Absorber",
      description: "You absorb everyone's workplace stress, career anxieties, and personal challenges, but you have no one to help you manage the emotional weight of supporting everyone.",
      emotion: "Drained"
    },
    {
      icon: Heart,
      title: "The Heavy Conversations",
      description: "Layoff conversations, difficult performance discussions, and career-changing decisions all fall on your shoulders while you're simultaneously managing administrative deadlines.",
      emotion: "Burdened"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            The Weight of Being Everyone's Last Hope for Career Development
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            The unique emotional labor burden of human-centered HR work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {burdens.map((burden, index) => {
            const IconComponent = burden.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white"
                style={{ boxShadow: 'var(--shadow-soft)' }}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                      {burden.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {burden.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                      💔 {burden.emotion}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Mirror Moment for Emotional Connection
                </h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    When was the last time you had a <strong className="text-primary">meaningful career development conversation</strong> with an employee?
                  </p>
                  <p>
                    When was the last time you felt like you actually <strong className="text-secondary">changed someone's professional trajectory</strong> for the better?
                  </p>
                  <p className="text-xl font-heading font-semibold text-foreground mt-6">
                    That gap is what administrative burden is stealing from you.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EmotionalBurdenSection;