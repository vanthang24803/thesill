import { create } from "zustand";

interface PlantCareModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePlantCareModal = create<PlantCareModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePlantCareModal;
