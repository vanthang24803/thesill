import { create } from "zustand";

interface PlanterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePlanterModal = create<PlanterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePlanterModal;
