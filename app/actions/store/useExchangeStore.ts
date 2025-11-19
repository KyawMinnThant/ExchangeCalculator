import { create } from "zustand";

interface ExchangeState {
  amount: string;
  from: string;
  to: string;

  setAmount: (value: string) => void;
  setFrom: (value: string) => void;
  setTo: (value: string) => void;
  swapCurrencies: () => void;
}

export const useExchangeStore = create<ExchangeState>((set, get) => ({
  amount: "",
  from: "USD",
  to: "MMK",

  setAmount: (value) => set({ amount: value }),
  setFrom: (value) => set({ from: value }),
  setTo: (value) => set({ to: value }),

  swapCurrencies: () => {
    const { from, to } = get();
    set({ from: to, to: from });
  },
}));
