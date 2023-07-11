import { create } from "zustand";

interface NavModalModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useNavModalModal = create<NavModalModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useNavModalModal;
