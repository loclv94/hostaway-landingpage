"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Custom styles for Swiper pagination
const swiperStyles = `
  .testimonials-swiper .swiper-pagination {
    position: static !important;
    margin-top: 2rem !important;
  }
  .testimonials-swiper .swiper-pagination-bullet {
    width: 12px !important;
    height: 12px !important;
    background: #d1d5db !important;
    opacity: 1 !important;
  }
  .testimonials-swiper .swiper-pagination-bullet-active {
    background: #ea580c !important;
  }
`;

const testimonials = [
  {
    id: 1,
    name: "Dave P",
    rating: 5,
    text: "Hostaway has been a real game-changer for us. It's made our operations so much more efficient and has helped us scale our business.",
  },
  {
    id: 2,
    name: "Kellan G",
    rating: 5,
    text: "The software solves a lot of issues for me. But the real value comes from the support I get from Hostaway. It makes all the difference.",
  },
  {
    id: 3,
    name: "Kim O",
    rating: 5,
    text: "We have a diverse portfolio and we find Hostaway is a property management solution that works for us.",
  },
  {
    id: 4,
    name: "Jessica S",
    rating: 5,
    text: "Hostaway has streamlined our operations and improved our guest experience significantly. Highly recommended!",
  },
];

export function Testimonials() {
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
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted By{" "}
            <span className="text-orange-500">
              Thousands Of Successful Vacation Rental Property Managers
            </span>{" "}
            <span className="text-orange-500">Globally</span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Custom Navigation Buttons */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Swiper Testimonials */}
          <div className="px-8">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={32}
              slidesPerView={1}
              slidesPerGroup={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                },
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                },
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                    {/* Header with name and rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-orange-500 font-bold text-sm">
                            G
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-orange-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 leading-relaxed text-sm">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </Section>
  );
}
