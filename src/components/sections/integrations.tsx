import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Image from "next/image";

const integrations = [
  { name: "Airbnb", icon: "/assets/images/logo-airbnb-s.webp" },
  { name: "Vrbo", icon: "/assets/images/logo-vrbo-s.webp" },
  { name: "Booking.com", icon: "/assets/images/logo-booking-s.webp" },
  { name: "Expedia", icon: "/assets/images/logo-expedia-s.webp" },
  { name: "Google Travel", icon: "/assets/images/logo-google-s.webp" },
  { name: "Stripe", icon: "/assets/images/logo-stripe-s.webp" },
  { name: "TripAdvisor", icon: "/assets/images/logo-tripadvisor-s.webp" },
  { name: "Operto", icon: "/assets/images/logo-operto-s.webp" },
  { name: "Breezeway", icon: "/assets/images/logo-breezeway-s.webp" },
  { name: "Turno", icon: "/assets/images/logo-turno-s.webp" },
  { name: "PriceLabs", icon: "/assets/images/logo-pricelabs-s.webp" },
  { name: "Beyond", icon: "/assets/images/logo-beyond-s.webp" },
  { name: "Wheelhouse", icon: "/assets/images/logo-wheelhouse-s.webp" },
  { name: "StayFi", icon: "/assets/images/logo-stayfi-s.webp" },
  { name: "Zapier", icon: "/assets/images/logo-zapier-s.webp" },
];

export function Integrations() {
  return (
    <Section className="bg-[#DAF3EF]" padding="xl">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-6 w-full lg:w-[30%]">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold mb-4 lg:mb-6 leading-tight">
              <span className="text-[#C75212]">
                200+ Integrations that Boost your Business{" "}
              </span>
              <span className="text-[#414141]">
                To Help Grow Your Vacation Rental Management Business
              </span>
            </h2>

            <div className="space-y-4">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Hostaway has the industry&apos;s strongest and most reliable
                integrations but more financial partnerships with OTAs means
                you&apos;ll never have a double booking. That gives you the
                confidence to list on more channels and earn more than the
                comfort of the Hostaway Dashboard. If you&apos;re a PMS, we can
                help you get best-in-class Open API integrations to make it your
                own.
              </p>
            </div>
          </div>

          {/* Right Side - Integration Logos Grid */}
          <div className="relative flex-1 p-4 sm:p-6 lg:p-[30px] bg-white rounded-[10px]">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className={"relative rounded-2xl aspect-square"}
                  title={integration.name}
                >
                  <Image src={integration.icon} alt={integration.name} fill />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
