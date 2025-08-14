"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BannerProps {
  className?: string;
  onClose?: () => void;
}

export function Banner({ className, onClose }: BannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className={cn("relative bg-teal-600 px-4 py-3 text-white", className)}>
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 text-center text-[16px] font-medium">
        {/* New badge */}
        <span className="inline-flex items-center bg-[#593a27] px-[6px] py-[5px] text-white font-bold leading-[16px]">
          ✨ New
        </span>

        {/* Main text */}
        <span className="hidden sm:inline font-bold">
          Grab your FREE copy of our Direct Booking Guide & Checklist
        </span>
        <span className="sm:hidden">Get our FREE Direct Booking Guide</span>

        {/* Download button */}
        <Button
          variant="ghost"
          size="sm"
          className="h-auto p-1 text-white hover:bg-white/20 hover:text-white"
          aria-label="Download guide"
        >
          <span className="hidden sm:inline ml-1">Download now</span>
        </Button>
      </div>
    </div>
  );
}
