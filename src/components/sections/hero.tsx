import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Image from "next/image";

export function Hero() {
  return (
    <Section className="relative bg-[#FFF7F3] overflow-hidden rounded-bl-[50px] sm:rounded-bl-[100px]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[20px]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 flex-1 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-[30px] xl:text-4xl font-bold text-gray-900 leading-tight">
                Grow Your Business with Hostaway{"'"}s{" "}
                <span className="text-[#C75212]">
                  All-in-One Vacation Rental Software
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Hostaway Vacation Rental Software and Airbnb Management System
                Helps You Grow Your Property Management Business By Automating &
                Streamlining Every Aspect Of Your Business across Airbnb, Vrbo,
                Booking.com, Expedia, and others.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a className="bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-sm w-full sm:min-w-[200px] py-3 sm:py-[8px] text-center cursor transition-colors text-sm sm:text-[16px]">
                GET PRICING
              </a>
              <a className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-sm w-full sm:min-w-[200px] py-3 sm:py-[8px] text-center cursor transition-colors text-sm sm:text-[16px]">
                GET STARTED
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-auto lg:flex-shrink-0 order-first lg:order-last">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto">
              <Image
                src="/assets/images/home.webp"
                alt="Hostaway Dashboard Interface"
                width={840}
                height={592}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Partner Logos Section */}
      <div className="py-8 sm:py-12 mt-8 sm:mt-16">
        <Container>
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-black font-bold">
              Preferred Partner with Airbnb, Vrbo, Booking.com & More
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-center items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
            <div className="relative aspect-[2/1] w-full">
              <Image
                src="/assets/images/logo-airbnb.svg"
                alt="Airbnb"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[2/1] w-full">
              <Image
                src="/assets/images/logo-vrbo.svg"
                alt="Vrbo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[2/1] w-full">
              <Image
                src="/assets/images/logo-booking.svg"
                alt="Booking.com"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[2/1] w-full">
              <Image
                src="/assets/images/logo-google.svg"
                alt="Google"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[2/1] w-full">
              <Image
                src="/assets/images/logo-expedia.svg"
                alt="Expedia"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[2/1] w-full">
              <Image
                src="/assets/images/logo-homes.svg"
                alt="Homes & Villas"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
