import { create } from "zustand";

interface ResourcesModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useResourcesModal = create<ResourcesModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useResourcesModal;
