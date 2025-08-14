import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const customerStories = [
  {
    id: 1,
    name: "Brad Edelson",
    title: "Co-Owner & COO",
    company: "Host Services Group",
    location: "Toronto, ON, Canada",
    videoThumbnail: "/assets/images/video-1.webp",
    story:
      "Toronto's Largest STR Manager Grows 642% Since Starting With Hostaway",
  },
  {
    id: 2,
    name: "Matt Barbuzzi",
    title: "Partner & CTO",
    company: "Park Place Properties",
    location: "Toronto, ON, Canada",
    videoThumbnail: "/assets/images/video-2.webp",
    story:
      "Property Management Company Grows 180% After 6 Months With Hostaway",
  },
  {
    id: 3,
    name: "Connor Griffiths",
    title: "CEO",
    company: "Lifty Life",
    location: "Canada",
    videoThumbnail: "/assets/images/video-3.webp",
    story: "Lifty Life Grows 6x with Hostaway",
  },
];

export function CustomerStories() {
  return (
    <>
      {/* Customer Stories Section */}
      <Section className="relative bg-white rounded-bl-[50px]" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              <span className="text-orange-500">Customer</span> Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {customerStories.map((story) => (
              <div key={story.id} className="group">
                {/* Video Thumbnail */}
                <div className="relative mb-4 lg:mb-6 rounded-lg overflow-hidden shadow-lg">
                  <div
                    className="aspect-video relative bg-cover bg-top"
                    style={{
                      backgroundImage: `url(${story.videoThumbnail})`,
                    }}
                  ></div>
                </div>

                {/* Customer Info */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-orange-500">
                    {story.name}
                  </h3>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">
                      {story.title}, {story.company}
                    </p>
                    <p>{story.location}</p>
                  </div>
                  <p className="text-gray-900 font-medium leading-relaxed">
                    {story.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Banner */}
      <Section className="[background-image:linear-gradient(90deg,_rgb(199,82,18),_rgba(215,92,31,0.5)),_url(/assets/images/bg-find-section.jpg)] mt-[-50px] bg-cover bg-center rounded-bl-[50px]">
        <Container>
          <div className="h-[50px]"></div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-[25px] font-semibold text-white mb-2 leading-tight">
                Ready to find out how Hostaway can transform your business?
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto lg:flex-shrink-0">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-6 sm:px-8 w-full sm:w-auto"
              >
                Get pricing
              </Button>
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-6 sm:px-8 w-full sm:w-auto"
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
