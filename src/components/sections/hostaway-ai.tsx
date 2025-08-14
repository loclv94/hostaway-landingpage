import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Image from "next/image";

export function HostawayAI() {
  return (
    <Section
      className="bg-[url('/assets/images/bg-gradient.jpg')] bg-cover bg-center"
      padding="xl"
    >
      <Container>
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8">
          {/* Main Heading */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Hostaway AI
            </h2>
            <p className="text-lg sm:text-xl font-bold leading-relaxed">
              Maximize revenue, minimize effort—smarter hosting
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>with AI-driven automation
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[20px]">
            {/* Features List */}
            <div className="space-y-6 flex-1 order-2 lg:order-1">
              {/* Optimized pricing and revenue */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Optimized pricing and revenue
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Earn 32.3% more revenue per listing with Dynamic Pricing and
                    seamless
                    <br />
                    cross-channel distribution.
                  </p>
                </div>
              </div>

              {/* Automated guest communication */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Automated guest communication
                    <br />
                    and task management
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Automate 75% of your guest and staff messaging and with the
                    help of AI
                    <br />
                    and intelligent routing.
                  </p>
                </div>
              </div>

              {/* Secure, automated payments */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Secure, automated payments
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Capture more revenue with greater protection, without
                    lifting a finger.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <button className="bg-transparent border-2 border-gray-800 text-gray-900 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors text-base sm:text-lg w-full sm:w-auto">
                  Discover Hostaway AI
                </button>
              </div>
            </div>
            {/* Right Image */}
            <div className="relative w-full lg:w-[700px] lg:flex-shrink-0 order-1 lg:order-2">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px] w-full">
                <Image
                  src="/assets/images/revenue.webp"
                  alt="Woman using Hostaway AI platform"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
