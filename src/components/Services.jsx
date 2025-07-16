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
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 text-foreground break-words max-w-full">
            Our Car Window Tinting Services
          </h2>
          <p className="text-sm sm:text-lg max-w-full text-white/80 mx-auto break-words">
            We use industry-leading window films to deliver clean, long-lasting
            tint installations for cars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-300 hover:scale-105 p-8 border border-primary/20 shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold text-white/95 pb-4 leading-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground text-white/80 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-lg text-white/80 leading-relaxed"
                    >
                      <div className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0" />
                      <span>{feature}</span>
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
