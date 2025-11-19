"use client";

import React from "react";
import HistoryCard from "../components/historycard";
import { useExchangeHistoryStore } from "../actions/store/useExchangeHistoryStore";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

const ExchangeHistory = () => {
  const { history, clearHistory } = useExchangeHistoryStore();
  const router = useRouter();

  return (
    <div className="mt-5 px-3 sm:px-4 font-mono overflow-x-hidden w-full">
      {/* TOP SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 w-full">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-green-200 hover:bg-green-300 text-green-800 px-4 py-2 rounded-xl font-medium transition w-fit"
        >
          <IoArrowBack className="text-xl" /> Back
        </button>

        {/* Title */}
        <p className="text-xl sm:text-3xl font-semibold text-center text-green-500 flex-1 sm:order-none order-first">
          Your Converting History
        </p>

        {/* Clear All */}
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-medium transition w-fit"
          >
            Clear All
          </button>
        )}
      </div>

      {/* NO HISTORY MESSAGE */}
      {history.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-base sm:text-lg px-2">
          No exchange history available. Start converting currencies to see your
          history here!
        </p>
      )}

      {/* HISTORY LIST */}
      <div className="mt-4 space-y-4 pb-10 w-full">
        {history.map((item: any, index) => (
          <HistoryCard key={item.id || index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ExchangeHistory;
