"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
      {/* Globe Animation */}
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-500 border-t-transparent"></div>

      {/* Text */}
      <p className="mt-4 text-green-600 text-lg font-semibold">
        Loading exchange rates...
      </p>
    </div>
  );
}
