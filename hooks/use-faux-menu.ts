import { create } from "zustand";

interface FauxModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useFauxModal = create<FauxModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useFauxModal;
