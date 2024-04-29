import { create } from "zustand";

const useConversataion = create((set) => ({
  selectedPerson: null,
  setSelectedPerson: (selectedPerson) => set({ selectedPerson }),
  messsages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversataion;
