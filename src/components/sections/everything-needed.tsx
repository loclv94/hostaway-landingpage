import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const features = [
  {
    category: "PROPERTY MANAGEMENT",
    title:
      "The highest-rated Property Management System for Vacation Rental Property Managers",
    color: "text-orange-500",
  },
  {
    category: "COMMUNICATION",
    title:
      "Connect with guests and staff. Every vacation rental property manager needs with an industry leading unified inbox.",
    color: "text-orange-500",
  },
  {
    category: "ANALYTICS AND REPORTING",
    title:
      "Host and property managers giving gives property managers valuable insights into their vacation rental business.",
    color: "text-orange-500",
  },
  {
    category: "AUTOMATION TOOLS",
    title:
      "Hostaway automates every single repetitive task in the world of vacation rental.",
    color: "text-orange-500",
  },
  {
    category: "CHANNEL MANAGER",
    title:
      "Hostaway's proprietary channel manager is the core of the platform, which connects you seamlessly to Airbnb, Vrbo, Booking.com, Expedia, Marriott, and many more.",
    color: "text-orange-500",
  },
  {
    category: "MARKETING",
    title:
      "All the tools you need to market those properties with the respect they deserve. Make yourself proud!",
    color: "text-orange-500",
  },
  {
    category: "SERVICES",
    title:
      "Hostaway always brings the most useful, versatile and reliable technology available to their partners.",
    color: "text-orange-500",
  },
  {
    category: "VACATION RENTAL OPERATIONS",
    title:
      "Manage every aspect of your daily operations with detail and automations, and feel good about delegating tasks with ease.",
    color: "text-orange-500",
  },
];

export function EverythingNeeded() {
  return (
    <Section className="bg-white" padding="xl">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything Needed To{" "}
            <span className="text-orange-500">
              Automate your Vacation Rental Management
            </span>{" "}
            Business In One Place
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Connect every stage of the Vacation Rental guest journey and
            automate every aspect of vacation rental management.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              {/* Category Badge */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wide">
                  {feature.category}
                </span>
              </div>

              {/* Feature Description */}
              <p className="text-sm text-gray-700 leading-relaxed">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
