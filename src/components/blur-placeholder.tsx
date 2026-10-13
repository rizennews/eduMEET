"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BlurPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: "video" | "square" | "wide" | "portrait" | "auto";
  label?: string;
  category?: string;
  theme?: "blue" | "orange" | "purple" | "neutral" | "dark";
  showWireframe?: boolean;
}

export function BlurPlaceholder({
  aspectRatio = "video",
  label = "Visual Placeholder",
  category,
  theme = "blue",
  showWireframe = true,
  className,
  ...props
}: BlurPlaceholderProps) {
  const aspectClasses = {
    // 16:9 widescreen: realistic photographic landscape ratio (240px - 280px in desktop cards)
    video: "aspect-[16/9] w-full min-h-[190px] md:min-h-[220px]",
    // 4:3 standard editorial photography ratio (great for balanced card visuals)
    square: "aspect-[4/3] w-full min-h-[200px] md:min-h-[240px]",
    // 21:9 cinematic / infographic panorama ratio (realistic banner height ~220-260px)
    wide: "aspect-[21/9] w-full min-h-[180px] md:min-h-[220px]",
    // 3:4 portrait photography ratio
    portrait: "aspect-[3/4] w-full min-h-[280px] md:min-h-[340px]",
    // Auto fill: adapts to parent grid/flex container with realistic min/max bounds
    auto: "h-full w-full min-h-[280px] md:min-h-[360px]",
  };

  const themeGradients = {
    blue: "from-[#003B5C]/15 via-[#2A75C1]/10 to-[#001D2E]/20",
    orange: "from-[#F1921A]/20 via-[#F5B041]/10 to-[#003B5C]/15",
    purple: "from-[#8E1B73]/20 via-[#B03060]/10 to-[#003B5C]/15",
    neutral: "from-slate-200/50 via-slate-100/40 to-slate-200/50",
    dark: "from-[#001D2E]/80 via-[#003B5C]/60 to-[#001D2E]/90",
  };

  const orbColors = {
    blue: ["bg-[#003B5C]/30", "bg-[#2A75C1]/25", "bg-[#00B4D8]/20"],
    orange: ["bg-[#F1921A]/35", "bg-[#D97D12]/25", "bg-[#003B5C]/20"],
    purple: ["bg-[#8E1B73]/35", "bg-[#B03060]/25", "bg-[#2A75C1]/20"],
    neutral: ["bg-slate-300/40", "bg-slate-200/30", "bg-slate-400/20"],
    dark: ["bg-[#003B5C]/40", "bg-[#8E1B73]/30", "bg-[#F1921A]/20"],
  };

  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border transition-all duration-300 select-none group",
        isDark ? "border-white/10 bg-[#001D2E]" : "border-slate-200/80 bg-slate-50/50",
        aspectClasses[aspectRatio],
        className
      )}
      {...props}
    >
      {/* Dynamic blurred color aura orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={cn(
            "absolute -top-12 -left-12 w-48 h-48 rounded-full blur-3xl animate-pulse transition-all duration-1000",
            orbColors[theme][0]
          )}
          style={{ animationDuration: "6s" }}
        />
        <div
          className={cn(
            "absolute -bottom-16 -right-16 w-56 h-56 rounded-full blur-3xl transition-all duration-1000",
            orbColors[theme][1]
          )}
        />
        <div
          className={cn(
            "absolute top-1/3 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-2xl opacity-60",
            orbColors[theme][2]
          )}
        />
      </div>

      {/* Frosted Glass Overlay with subtle gradient mesh */}
      <div
        className={cn(
          "absolute inset-0 backdrop-blur-[40px] bg-gradient-to-br transition-opacity duration-300",
          themeGradients[theme]
        )}
      />

      {/* Subtle Grid texture for architectural feel */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none opacity-30",
          isDark
            ? "[background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)]"
            : "[background-image:linear-gradient(rgba(0,29,46,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,29,46,0.04)_1px,transparent_1px)]"
        )}
        style={{ backgroundSize: "28px 28px" }}
      />

      {/* Simulated UI Wireframe / Silhouette */}
      {showWireframe && (
        <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity">
          {/* Top header wireframe bar */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span className={cn("w-2.5 h-2.5 rounded-full", isDark ? "bg-white/20" : "bg-slate-400/30")} />
              <span className={cn("w-2.5 h-2.5 rounded-full", isDark ? "bg-white/20" : "bg-slate-400/30")} />
              <span className={cn("w-2.5 h-2.5 rounded-full", isDark ? "bg-white/20" : "bg-slate-400/30")} />
            </div>
            <div className={cn("h-2 w-16 rounded-full", isDark ? "bg-white/15" : "bg-slate-300/50")} />
          </div>

          {/* Center mock interface silhouettes */}
          <div className="grid grid-cols-3 gap-3 my-auto w-full max-w-[85%] mx-auto py-2">
            <div className={cn("h-14 sm:h-20 rounded-xl border border-dashed flex items-center justify-center", isDark ? "border-white/10 bg-white/5" : "border-slate-300/40 bg-white/40")} />
            <div className={cn("h-14 sm:h-20 rounded-xl border border-dashed flex items-center justify-center", isDark ? "border-white/10 bg-white/5" : "border-slate-300/40 bg-white/40")} />
            <div className={cn("h-14 sm:h-20 rounded-xl border border-dashed flex items-center justify-center", isDark ? "border-white/10 bg-white/5" : "border-slate-300/40 bg-white/40")} />
          </div>

          {/* Bottom controls wireframe bar */}
          <div className="flex items-center justify-center gap-3 w-full">
            <div className={cn("h-7 w-7 rounded-full", isDark ? "bg-white/10" : "bg-slate-300/50")} />
            <div className={cn("h-7 w-7 rounded-full", isDark ? "bg-white/10" : "bg-slate-300/50")} />
            <div className={cn("h-7 w-16 rounded-full", isDark ? "bg-white/15" : "bg-slate-300/50")} />
            <div className={cn("h-7 w-7 rounded-full", isDark ? "bg-white/10" : "bg-slate-300/50")} />
          </div>
        </div>
      )}

      {/* Floating Center Badge / Label */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-4 text-center">
        <div
          className={cn(
            "inline-flex flex-col items-center px-4 py-2.5 rounded-xl border shadow-sm transition-transform duration-300 group-hover:scale-105",
            isDark
              ? "bg-[#001D2E]/80 border-white/15 text-white/90 backdrop-blur-md"
              : "bg-white/80 border-slate-200/90 text-slate-700 backdrop-blur-md"
          )}
        >
          {category && (
            <span
              className={cn(
                "text-[10px] font-bold tracking-widest uppercase mb-0.5",
                theme === "orange"
                  ? "text-[#F1921A]"
                  : theme === "purple"
                  ? "text-[#8E1B73]"
                  : "text-[#2A75C1]"
              )}
            >
              {category}
            </span>
          )}
          <span className="text-xs sm:text-sm font-semibold tracking-tight">{label}</span>
        </div>
      </div>
    </div>
  );
}
