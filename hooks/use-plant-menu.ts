import { create } from "zustand";

interface PlantModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePlantModal = create<PlantModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePlantModal;
