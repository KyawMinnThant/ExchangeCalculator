// useExchangeHistoryStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface HistoryItem {
  id: string;
  from: string;
  to: string;
  amount: number;
  result: number;
  timestamp: string;
}

interface ExchangeHistoryState {
  history: HistoryItem[];
  addHistory: (item: Omit<HistoryItem, "id" | "timestamp">) => void;
  clearHistory: () => void;
  deleteHistory: (id: string) => void; // <-- added delete function
}

export const useExchangeHistoryStore = create<ExchangeHistoryState>()(
  persist(
    (set) => ({
      history: [],

      addHistory: (item) =>
        set((state) => ({
          history: [
            {
              id: crypto.randomUUID(),
              timestamp: new Date().toISOString(),
              ...item,
            },
            ...state.history,
          ],
        })),

      clearHistory: () => set({ history: [] }),

      deleteHistory: (id: string) =>
        set((state) => ({
          history: state.history.filter((h) => h.id !== id),
        })),
    }),
    {
      name: "exchange-history", // localStorage key
    }
  )
);
