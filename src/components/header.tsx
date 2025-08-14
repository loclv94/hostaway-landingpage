"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Globe, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navigation = [
  {
    name: "Features",
    href: "#features",
    hasDropdown: true,
  },
  {
    name: "Marketplace",
    href: "#marketplace",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Resources",
    href: "#resources",
    hasDropdown: true,
  },
  {
    name: "Company",
    href: "#company",
    hasDropdown: true,
  },
];

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-gray-200  bg-[#f7f7f7]",
        className
      )}
    >
      <div className="w-full">
        <Container>
          <div className="hidden lg:flex lg:items-center lg:gap-x-4 justify-end h-[40px]">
            <button className="flex items-center gap-1 text-sm hover:text-gray-900 transition-colors">
              <Globe className="h-4 w-4" />
              English
              <ChevronDown className="h-3 w-3" />
            </button>

            {/* Help Center */}
            <Link
              href="#help"
              className="flex items-center gap-1 text-sm  hover:text-gray-900 transition-colors"
            >
              Help Center
            </Link>

            {/* Login */}
            <Link
              href="#login"
              className="text-sm font-medium  hover:text-gray-900 transition-colors"
            >
              Login
            </Link>
          </div>
        </Container>
      </div>
      <div className="w-full bg-white">
        <Container>
          <nav
            className="flex items-center justify-between py-3"
            aria-label="Global"
          >
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center">
                  <Image
                    src={"/assets/images/logo.svg"}
                    alt="Hostaway Logo"
                    width={135}
                    height={30}
                  />
                  <div className="ml-[15px]"></div>
                  <Image
                    src={"/assets/images/logo-happy-10-years.svg"}
                    alt="Hostaway Logo"
                    width={30}
                    height={30}
                  />
                </div>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-4">
              <Button
                className="hidden sm:flex bg-[#C75212] text-white font-medium px-4 lg:px-6"
                asChild
              >
                <Link href="#get-started" className="text-bold">
                  GET STARTED
                </Link>
              </Button>

              <button
                type="button"
                className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>
        </Container>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-white">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={"/assets/images/logo.svg"}
                  alt="Hostaway Logo"
                  width={135}
                  height={30}
                />
              </Link>
              <button
                type="button"
                className="p-2 text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="px-4 py-6 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium text-gray-900 hover:text-orange-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 space-y-4">
                <Link
                  href="#help"
                  className="block text-base text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Help Center
                </Link>
                <Link
                  href="#login"
                  className="block text-base text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Button
                  className="w-full bg-[#C75212] text-white font-medium"
                  asChild
                >
                  <Link
                    href="#get-started"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    GET STARTED
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
