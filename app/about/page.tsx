"use client";

import React from "react";
import { FaMoneyBillWave, FaGlobeAsia, FaExchangeAlt } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen font-mono bg-gradient-to-br from-green-50 via-white to-green-100 px-5 py-10 flex flex-col items-center">
      {/* HEADER */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-lime-500 drop-shadow-lg">
          About WorldExchange
        </h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Your trusted platform for accurate, real-time global currency
          conversion.
        </p>
      </div>

      {/* INTRO SECTION */}
      <div className="max-w-3xl mt-10 bg-white shadow-lg border border-green-200 rounded-2xl p-6 md:p-8 text-center">
        <h2 className="text-2xl font-bold text-green-600">Our Mission</h2>
        <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
          WorldExchange helps users convert currencies instantly using real-time
          exchange data. Whether you're traveling, sending money abroad,
          learning finance, or simply exploring currency values, our tools make
          it fast, accurate, and easy.
        </p>
      </div>

      {/* FEATURES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mt-14 w-full px-3">
        {/* CARD 1 */}
        <div className="bg-white shadow-xl p-6 rounded-xl hover:shadow-2xl transition">
          <div className="text-green-500 text-4xl mb-4 flex justify-center">
            <FaExchangeAlt />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 text-center">
            Accurate Conversions
          </h3>
          <p className="text-gray-600 mt-2 text-center text-sm md:text-base">
            Powered by real-time API data for the most accurate currency values
            worldwide.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white shadow-xl p-6 rounded-xl hover:shadow-2xl transition">
          <div className="text-green-500 text-4xl mb-4 flex justify-center">
            <FaGlobeAsia />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 text-center">
            Global Support
          </h3>
          <p className="text-gray-600 mt-2 text-center text-sm md:text-base">
            Convert over 150+ world currencies with full regional support.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white shadow-xl p-6 rounded-xl hover:shadow-2xl transition">
          <div className="text-green-500 text-4xl mb-4 flex justify-center">
            <FaMoneyBillWave />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 text-center">
            Simple & Fast
          </h3>
          <p className="text-gray-600 mt-2 text-center text-sm md:text-base">
            Designed for speed and usability — convert any currency in seconds.
          </p>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className="max-w-3xl mt-16 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-green-600">
          Why Choose WorldExchange?
        </h2>
        <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
          We believe financial tools should be simple, accessible, and accurate.
          WorldExchange provides a clean, fast, and powerful experience across
          all devices— whether you're using a phone, tablet, or desktop.
        </p>
      </div>

      {/* THANK YOU */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 text-sm md:text-base">
          Thank you for choosing
        </p>
        <h3 className="text-2xl font-bold text-green-500">WorldExchange</h3>
      </div>
    </div>
  );
};

export default AboutPage;
