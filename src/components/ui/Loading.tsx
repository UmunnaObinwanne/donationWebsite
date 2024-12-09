import React from "react";

export default function Loading() {
  return (
    <div className="flex min-h-[200px] w-full items-center justify-center">
      <div className="relative h-24 w-24">
        {/* Outer rotating circle */}
        <div className="absolute h-full w-full animate-spin rounded-full border-4 border-b-blue-300 border-l-blue-200 border-r-blue-400 border-t-blue-500" />

        {/* Inner pulsing circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-12 w-12 animate-ping rounded-full bg-blue-500/20" />
        </div>

        {/* Center static circle */}
        <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 shadow-lg" />

        {/* Floating dots */}
        <div className="absolute h-full w-full animate-[spin_3s_linear_infinite]">
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 animate-bounce rounded-full bg-blue-400" />
        </div>
        <div className="absolute h-full w-full animate-[spin_3s_linear_infinite] delay-1000">
          <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 animate-bounce rounded-full bg-blue-300" />
        </div>

        {/* Loading text */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="animate-pulse font-medium text-blue-500">Loading...</span>
        </div>
      </div>
    </div>
  );
}
