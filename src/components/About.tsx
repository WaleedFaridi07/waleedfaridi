import { Card } from "@/components/ui/card";
import { Code2, Sparkles, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Architecting reliable backend, integration, and cloud platforms for large-scale enterprise environments"
    },
    {
      icon: Sparkles,
      title: "AI & Innovation",
      description: "Building MCP-enabled agentic workflows and production AI systems that solve high-value engineering problems"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Bridging engineering leadership, delivery execution, and practical AI adoption across teams"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI Engineer and Lead Developer with deep experience in enterprise architecture,
            platform engineering, and applied AI. I build practical AI systems that improve developer
            productivity, automation, and knowledge access in real production environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-gradient-subtle border-border">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Current Role at TRATON Group</h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently working as <span className="text-foreground font-semibold">AI Engineer at TRATON Group</span>,
              where I design and deliver applied AI capabilities for engineering teams. My work includes
              building MCP servers, agentic workflows, and internal AI tooling that supports code assistance,
              context-aware automation, knowledge retrieval, and delivery acceleration while meeting enterprise
              standards for reliability, security, and governance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I work hands-on with LangChain, Langfuse, Onyx, CodeRabbit, Google ADK, Amazon Bedrock,
              and SageMaker alongside .NET and cloud-native services. The focus is on measurable outcomes:
              production-ready AI capabilities that scale across TRATON brands, strengthen developer workflows,
              and bring modern AI patterns into everyday engineering delivery.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
