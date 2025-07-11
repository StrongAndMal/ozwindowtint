import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Nano Carbon Puremax Automotive Tint",
      description:
        "Ideal for drivers who want more than basic tinting — without going full ceramic.",
      features: [
        "Exceptional Heat Rejection",
        "99% UV Protection",
        "5 Year Warranty",
        "Durable, Scratch-Resistant Coating",
        "Clear Optical Clarity",
      ],
    },
    {
      title: "FXtreme2 Series – Nano Ceramic Film Automotive Tint",
      description:
        "Our Ultimate Protection. Built for California Heat. 100% Lifetime Warranty.",
      features: [
        "Maximum Heat Rejection (Up to 92%)",
        "99.9% UV Ray Blocking",
        "Superior Durability",
        "Crystal-Clear Visibility — Day or Night",
        "Premium Lifetime Warranty.",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-6xl font-bold mb-6 text-foreground">
            What Our Products Can Do for You
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We use industry-leading films to deliver clean installs that last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm hover:shadow-hover transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white/95 pb-4">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-md text-muted-foreground text-white/80">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-md text-white/80"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
