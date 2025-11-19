"use client";

import React from "react";
import { IoClose } from "react-icons/io5";
import { useExchangeHistoryStore } from "../actions/store/useExchangeHistoryStore";

interface HistoryItem {
  id: string;
  amount: number;
  from: string;
  to: string;
  result: number;
  timestamp: string;
}

const HistoryCard = ({ item }: { item: HistoryItem }) => {
  const deleteHistory = useExchangeHistoryStore((state) => state.deleteHistory);
  const date = new Date(item.timestamp).toLocaleString();

  return (
    <div
      className="
        relative 
        w-full 
        sm:w-[80%] 
        md:w-[60%] 
        lg:w-[40%] 
        xl:w-[35%] 
        mx-auto
        mt-5 
        bg-white 
        shadow-md 
        border 
        border-green-200 
        rounded-xl 
        p-4 
        mb-4 
        hover:shadow-lg 
        transition 
        break-words 
        overflow-hidden
      "
    >
      {/* Delete Icon */}
      <button
        className="absolute top-2 right-2 text-red-500 hover:text-red-600 text-xl"
        onClick={() => deleteHistory(item.id)}
        aria-label="Delete history item"
      >
        <IoClose />
      </button>

      {/* Content */}
      <div>
        {/* Date */}
        <p className="text-xs sm:text-sm text-gray-500">{date}</p>

        {/* Conversion Result */}
        <h3 className="text-base sm:text-lg font-semibold text-green-700 mt-1 leading-snug">
          {item.amount} {item.from} →{" "}
          {item.result.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}{" "}
          {item.to}
        </h3>

        {/* Description */}
        <p className="text-gray-700 mt-1 text-sm sm:text-base">
          Converted from <span className="font-medium">{item.from}</span> to{" "}
          <span className="font-medium">{item.to}</span>.
        </p>
      </div>
    </div>
  );
};

export default HistoryCard;
