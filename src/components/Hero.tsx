import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-primary opacity-90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-in fade-in duration-1000">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <Avatar className="relative w-72 h-72 md:w-96 md:h-96 ring-4 ring-primary/20 shadow-glow">
                  <AvatarImage 
                    src={profilePhoto} 
                    alt="Waleed Ahmad Faridi - Lead Developer & System Architect"
                    className="object-cover object-[center_20%]"
                  />
                  <AvatarFallback className="text-6xl">WF</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-2">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Waleed Ahmad Faridi
                </h1>
                <p className="text-xl md:text-2xl text-primary font-semibold">
                  Lead Developer & System Architect
                </p>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Expert in system architecture and integration, specializing in .NET, AWS, Azure, 
                and modern web technologies. Building scalable solutions for global financial services.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm md:text-base">
                <a 
                  href="mailto:waleedfaridi647@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  waleedfaridi647@gmail.com
                </a>
                <span className="hidden sm:inline text-muted-foreground">•</span>
                <a 
                  href="tel:+46720712667"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +46 720 712 667
                </a>
                <span className="hidden sm:inline text-muted-foreground">•</span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  Södertälje, Sweden
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a 
                    href="https://linkedin.com/in/waleedahmadfaridi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
