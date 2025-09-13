import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  TrendingUp, 
  BookOpen, 
  BarChart3, 
  Mail,
  Linkedin,
  Twitter,
  Youtube
} from "lucide-react";

const FooterSection = () => {
  const resources = [
    {
      icon: Users,
      title: "Employee Development Frameworks",
      description: "Comprehensive guides for career growth planning"
    },
    {
      icon: Heart,
      title: "Culture Building Guides", 
      description: "Create inclusive, engaging workplace environments"
    },
    {
      icon: BarChart3,
      title: "Performance Management Tools",
      description: "Transform reviews into development conversations"
    },
    {
      icon: TrendingUp,
      title: "Inclusive Leadership Resources",
      description: "Advanced strategies for people-centered leadership"
    }
  ];

  const insights = [
    "Weekly human resource strategies and best practices",
    "Employee development frameworks and templates",
    "Workplace culture innovation case studies", 
    "Performance management transformation guides"
  ];

  const masterclasses = [
    "Human-Centered HR Leadership Excellence",
    "People Development Strategy & Implementation",
    "Workplace Culture Transformation Methods",
    "Employee Engagement & Retention Mastery"
  ];

  const metrics = [
    "Employee engagement score improvements",
    "Career advancement success tracking", 
    "Culture initiative effectiveness measurement",
    "People development ROI analytics"
  ];

  return (
    <footer className="py-20 px-4 bg-gradient-to-br from-secondary via-primary to-secondary text-white">
      <div className="container max-w-6xl mx-auto">
        {/* Main Brand Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-heading font-bold">
              Powered by Utlyze
            </h2>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Transforming HR professionals from administrative processors into the human development champions they always wanted to be.
          </p>
        </div>
        
        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-white mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {resource.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Community & Content Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* HR Community */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5" />
                <h3 className="font-heading font-semibold text-white">HR Community</h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Join 1,200+ HR professionals putting human development first with AI-powered administrative automation
              </p>
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                Join Community
              </Button>
            </CardContent>
          </Card>
          
          {/* People Insights */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <BarChart3 className="w-5 h-5" />
                <h3 className="font-heading font-semibold text-white">People Insights</h3>
              </div>
              <div className="space-y-2">
                {insights.map((insight, index) => (
                  <p key={index} className="text-white/80 text-xs flex items-start">
                    <span className="text-white/60 mr-2">•</span>
                    {insight}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Professional Development */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="w-5 h-5" />
                <h3 className="font-heading font-semibold text-white">Masterclasses</h3>
              </div>
              <div className="space-y-2">
                {masterclasses.map((masterclass, index) => (
                  <p key={index} className="text-white/80 text-xs flex items-start">
                    <span className="text-white/60 mr-2">•</span>
                    {masterclass}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Impact Measurement */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5" />
                <h3 className="font-heading font-semibold text-white">Impact Measurement</h3>
              </div>
              <div className="space-y-2">
                {metrics.map((metric, index) => (
                  <p key={index} className="text-white/80 text-xs flex items-start">
                    <span className="text-white/60 mr-2">•</span>
                    {metric}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Weekly People-First HR Insights
              </h3>
              <p className="text-white/80 mb-6">
                Get actionable strategies for human-centered HR leadership and employee development excellence delivered to your inbox.
              </p>
              <div className="flex space-x-3">
                <Input 
                  placeholder="your.email@company.com"
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60 flex-1"
                />
                <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-6">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Bottom Section */}
        <div className="text-center space-y-6">
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
              <Youtube className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Final Impact Statement */}
          <div className="max-w-4xl mx-auto">
            <p className="text-white/90 text-lg leading-relaxed font-heading">
              "Every HR professional deserves to spend their time developing people, not processing paperwork. 
              We're here to give you back the human-centered purpose that brought you to HR in the first place."
            </p>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/20 pt-6 text-white/60 text-sm">
            <p>&copy; 2024 Human Resource of One. All rights reserved. | Privacy Policy | Terms of Service</p>
            <p className="mt-2">Powered by Utlyze - Transforming HR through human-centered AI automation</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;