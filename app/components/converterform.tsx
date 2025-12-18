"use client";

import React, { FormEvent, useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import useSWR from "swr";
import Loading from "./loading";
import { useExchangeStore } from "../actions/store/useExchangeStore";
import { useExchangeHistoryStore } from "../actions/store/useExchangeHistoryStore";

type Rates = Record<string, string>;

const ConvertForm = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, isLoading } = useSWR("/api/rate", fetcher);

  const rates: Rates = data?.rates || {};

  const { amount, from, to, setAmount, setFrom, setTo, swapCurrencies } =
    useExchangeStore();

  const addHistory = useExchangeHistoryStore((state) => state.addHistory);

  const [result, setResult] = useState<number | null>(null);

  if (isLoading) return <Loading />;

  // Calculation Function
  const calculateExchange = () => {
    if (!rates[from] || !rates[to] || !amount) return 0;

    const fromRate = Number(rates[from]);
    const toRate = Number(rates[to]);

    return (Number(amount) / fromRate) * toRate;
  };

  //  Handle Submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //  Validation: currency not selected
    if (!from || !to) {
      alert("Please select both From and To currencies.");
      return;
    }

    //  Validation: same currency
    if (from === to) {
      alert("From and To currencies must be different.");
      return;
    }

    //  Validation: amount
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const value = calculateExchange();

    if (value === 0) {
      alert("Unable to calculate exchange rate.");
      return;
    }

    setResult(value);

    // Save only valid conversion
    addHistory({
      from,
      to,
      amount: Number(amount),
      result: value,
    });
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-12 font-mono">
      <h2 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-500 mb-4">
        Currency Converter
      </h2>

      <p className="text-center text-green-700 mb-8 text-lg leading-relaxed">
        Enter the amount and select currencies to convert. Easily swap "From"
        and "To" currencies with the swap button.
      </p>

      {/* Result Display */}
      {result !== null && (
        <div className="mt-8 p-5 bg-green-100 rounded-xl shadow text-center">
          <p className="text-lg font-semibold text-green-800">
            {amount} {from} =
          </p>
          <p className="text-3xl font-bold text-green-600 mt-1">
            {result.toLocaleString(undefined, { maximumFractionDigits: 2 })}{" "}
            {to}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Amount */}
        <div>
          <label className="block font-semibold text-green-800 mb-1">
            Amount
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-5 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />
        </div>

        {/* From */}
        <div>
          <label className="block font-semibold text-green-800 mb-1">
            From
          </label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full px-5 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          >
            <option value="" disabled hidden>
              Select currency
            </option>
            {Object.keys(rates).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>

        {/* To */}
        <div>
          <label className="block font-semibold text-green-800 mb-1">To</label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full px-5 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          >
            <option value="" disabled hidden>
              Select currency
            </option>
            {Object.keys(rates).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={swapCurrencies}
            className="flex items-center gap-2 px-5 py-3 bg-green-100 text-green-700 rounded-xl hover:bg-green-200 transition"
          >
            <FaExchangeAlt /> Swap
          </button>
        </div>

        {/* Convert Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold shadow-md transition"
        >
          Convert
        </button>
      </form>
    </section>
  );
};

export default ConvertForm;
