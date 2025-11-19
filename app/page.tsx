import Link from "next/link";
import React from "react";
import { FaMoneyBillWave, FaExchangeAlt, FaGlobeAsia } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden font-mono flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-4 sm:px-6 py-16">
      {/* HERO SECTION */}
      <div className="text-center max-w-xl sm:max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-lime-500 drop-shadow-xl leading-tight">
          <span className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <FaMoneyBillWave className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-500 text-4xl sm:text-5xl" />
            WorldExchange
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-600 px-2">
          Convert global currencies instantly, check exchange rates, and stay
          updated with real-time financial data.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href={"/convertcurrency"}
            className="px-5 sm:px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg text-sm sm:text-base transition"
          >
            Convert Now
          </Link>

          <button className="px-5 sm:px-6 py-3 rounded-xl border border-green-500 text-green-600 hover:bg-green-50 font-semibold text-sm sm:text-base transition">
            Learn More
          </button>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-4xl w-full px-4">
        {/* Feature 1 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition text-center">
          <div className="text-green-500 text-4xl mb-4 flex justify-center">
            <FaExchangeAlt />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">
            Live Exchange Rates
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            View real-time currency conversion with accurate market data.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition text-center">
          <div className="text-green-500 text-4xl mb-4 flex justify-center">
            <FaGlobeAsia />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">
            Global Coverage
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Access exchange rates for currencies from all around the world.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition text-center">
          <div className="text-green-500 text-4xl mb-4 flex justify-center">
            <FaMoneyBillWave />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">
            Fast & Simple
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Convert currencies instantly with our easy-to-use interface.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
