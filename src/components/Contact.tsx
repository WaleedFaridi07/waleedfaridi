import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "waleedfaridi647@gmail.com",
      href: "mailto:waleedfaridi647@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+46 720 712 667",
      href: "tel:+46720712667"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Södertälje, Stockholm County, Sweden"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/waleedahmadfaridi",
      href: "https://linkedin.com/in/waleedahmadfaridi"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <Card className="p-8 bg-gradient-subtle border-border">
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  {item.href ? (
                    <a 
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block pl-13 text-foreground hover:text-primary transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="pl-13 text-foreground break-all">{item.value}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground mb-6">
              Available for freelance projects, consulting, and full-time opportunities
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              asChild
            >
              <a href="mailto:waleedfaridi647@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
