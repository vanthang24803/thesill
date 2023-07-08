import { create } from "zustand";

interface LogginModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLogginModal = create<LogginModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLogginModal;
