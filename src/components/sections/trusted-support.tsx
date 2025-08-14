import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const supportFeatures = [
  {
    icon: "🎧",
    title: "Support section",
    description:
      "A dedicated area providing assistance and resources for customer inquiries and troubleshooting.",
  },
  {
    icon: "📞",
    title: "24/7 Phone Support",
    description:
      "Around-the-clock phone support service, available 24 hours a day, 7 days a week, ensuring customers can get help anytime they need it.",
  },
  {
    icon: "⭐",
    title: "97%+ Customer Satisfaction",
    description:
      "A high customer satisfaction rating, with over 97% of customers expressing positive feedback about the service.",
  },
  {
    icon: "🌍",
    title: "Team members in 6 continents around the world",
    description:
      "A global team presence, with staff located across six continents, providing diverse and widespread support.",
  },
];

export function TrustedSupport() {
  return (
    <Section
      className="bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100"
      padding="xl"
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-orange-500">Trusted</span> By Thousands Of
            Successful Vacation Rental Property Managers{" "}
            <span className="text-orange-500">Globally</span>
          </h2>
          <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Don&apos;t take our word for it though. Ask your colleagues, your
            friends or visit any review site or online group. Our customers are
            our proud ambassadors!
          </p>
        </div>

        {/* Support Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {supportFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-white/20"
            >
              {/* Icon and Title */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-xl">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 leading-relaxed pl-16">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
