import { create } from "zustand";

interface FlowerModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useFlowerModal = create<FlowerModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useFlowerModal;
