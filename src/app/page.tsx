import { Hero } from "@/components/sections/hero";
import { FeaturesOverview } from "@/components/sections/features-overview";
import { HostawayAI } from "@/components/sections/hostaway-ai";
import { Testimonials } from "@/components/sections/testimonials";
import { Integrations } from "@/components/sections/integrations";
import { EverythingNeeded } from "@/components/sections/everything-needed";
import { TrustedSupport } from "@/components/sections/trusted-support";
import { DirectBookingSlider } from "@/components/sections/direct-booking-slider";
import { CustomerStories } from "@/components/sections/customer-stories";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Hero />
        <FeaturesOverview />
        <HostawayAI />
        <Testimonials />
        <Integrations />
        <EverythingNeeded />
        <TrustedSupport />
        <DirectBookingSlider />
        <CustomerStories />
      </div>
    </>
  );
}
