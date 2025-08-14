import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Image from "next/image";

export function FeaturesOverview() {
  return (
    <Section padding="xl" className="bg-gray-50">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
            <span className="text-orange-600">Vacation Rental Software</span>{" "}
            <span className="text-gray-700">that</span>{" "}
            <span className="text-gray-900">scales</span>{" "}
            <span className="text-gray-700">with your</span>{" "}
            <span className="text-orange-600">business</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {/* More Bookings, More Business */}
          <div className="text-left">
            <div className="flex justify-left mb-6">
              <div className="w-16 h-16 relative">
                <Image
                  src="/assets/images/feature-1.svg"
                  alt="More Bookings Icon"
                  fill
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              More Bookings, More Business
            </h3>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Expand your reach, automate pricing and messaging, and get the
              analytics to help you make better decisions
            </p>

            <ul className="text-left space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                Get listed across all major online travel agencies
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                Set the right price with dynamic pricing
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                Build your own direct booking site
              </li>
            </ul>
          </div>

          {/* Save Time, Grow Faster */}
          <div className="text-left">
            <div className="flex justify-left mb-6">
              <div className="w-16 h-16 relative">
                <Image
                  src="/assets/images/feature-2.svg"
                  alt="Save Time Icon"
                  fill
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Save Time, Grow Faster
            </h3>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Automate tedious, repeatable tasks to free up time and grow your
              business
            </p>

            <ul className="text-left space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                Write guest communications and listing descriptions in seconds
                with in-platform GenAI
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                Prompt guests to leave reviews with automatic reminders
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                Capture payments and effortlessly keep an eye on financial
                health
              </li>
            </ul>
          </div>

          {/* Do It All-in-One Place */}
          <div className="text-left">
            <div className="flex justify-left mb-6">
              <div className="w-16 h-16 relative">
                <Image
                  src="/assets/images/feature-3.svg"
                  alt="All-in-One Icon"
                  fill
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Do It All-in-One Place
            </h3>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Channel management, PMS, calendars, messages and reviews all
              managed in one centralized dashboard
            </p>

            <ul className="text-left space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                One powerful software that scales with you from 2 to 2,000
                listings
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                Award-winning 24/7 support team for you when you need it most
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                Wave bye-bye to your mile-high tech stack
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
