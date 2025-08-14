"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Custom styles for Swiper pagination
const swiperStyles = `
  .swiper-pagination {
    position: static !important;
    margin-top: 2rem !important;
  }
  .swiper-pagination-bullet {
    width: 12px !important;
    height: 12px !important;
    background: #d1d5db !important;
    opacity: 1 !important;
  }
  .swiper-pagination-bullet-active {
    background: #ea580c !important;
  }
`;

const slides = [
  {
    id: 1,
    image: "/assets/images/slide-1.webp",
    alt: "Direct booking website slide 1",
  },
  {
    id: 2,
    image: "/assets/images/slide-2.webp",
    alt: "Direct booking website slide 2",
  },
  {
    id: 3,
    image: "/assets/images/slide-3.webp",
    alt: "Direct booking website slide 3",
  },
  {
    id: 4,
    image: "/assets/images/slide-4.webp",
    alt: "Direct booking website slide 4",
  },
  {
    id: 5,
    image: "/assets/images/slide-5.webp",
    alt: "Direct booking website slide 5",
  },
];

export function DirectBookingSlider() {
  const swiperRef = useRef<SwiperType>(null);

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <Section className="bg-gray-50" padding="xl">
      <style jsx>{swiperStyles}</style>
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Increased <span className="text-[#C75212]">Bookings & Profit</span>{" "}
            From Your Own Direct{" "}
            <span className="text-[#C75212]">Booking Website</span>
          </h2>
          <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Create a beautiful and converting direct booking website with the
            Hostaway website builder and drive direct reservations! Already have
            a website? Add the Hostaway WordPress plugin to your existing site
            or build custom solutions with our open API.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Custom Navigation Arrows */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Swiper Slider */}
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            slidesPerGroup={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            className="rounded-2xl overflow-hidden"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority={slide.id === 1}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Section>
  );
}
