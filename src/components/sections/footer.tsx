import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  solutions: [
    "Property Management",
    "Communication",
    "Analytics & Reporting",
    "Automation Tools",
    "Services",
    "Marketing",
    "Channel Manager",
    "Operations",
  ],
  resources: [
    "Blog",
    "Marketplace",
    "Case Studies",
    "Webinars",
    "Help Center",
    "Changelog",
    "Privacy Policy",
    "Terms and Services",
  ],
  company: ["About", "Careers", "Press"],
  getInTouch: [
    "Sales",
    "Support",
    "Become a Partner",
    "Referral Program",
    "Affiliate Program",
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <Image
                  src={"/assets/images/logo.svg"}
                  alt="Hostaway Logo"
                  width={135}
                  height={30}
                />
              </div>

              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  Launched in 2015, Hostaway has helped thousands of vacation
                  rental property managers reach their focus on growing their
                  business. Hostaway takes pride in aligning itself with the
                  needs of the fast evolving landscape and always provide
                  reliable technology and great support.{" "}
                  <a href="#" className="text-orange-500 hover:underline">
                    Sign up today!
                  </a>
                </p>

                <p>
                  Don{"'"}t get stuck in a broken routine with poor software,
                  manage your properties with Hostaway and experience a better
                  business and life right away!
                </p>
              </div>

              {/* Language Selector */}
              <div className="mt-8">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-lg">🌐</span>
                  <span>English</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="w-8 h-8 bg-gray-300 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group"
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4 text-gray-600 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-6 text-sm text-gray-500">© 2025 Hostaway</div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wide text-sm">
                SOLUTIONS
              </h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wide text-sm">
                RESOURCES
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wide text-sm">
                COMPANY
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wide text-sm">
                GET IN TOUCH
              </h4>
              <ul className="space-y-3 mb-6">
                {footerLinks.getInTouch.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">🇺🇸</span>
                  <span>Sales: +1-786-429-7337</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">🇺🇸</span>
                  <span>Support: +1-210-622-8536</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
