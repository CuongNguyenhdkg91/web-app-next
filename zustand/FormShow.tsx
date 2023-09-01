import { create } from 'zustand';

interface RentModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
}

const useRentModal = create<RentModalStore>((set,get) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  toggle: () => {
    var isOpen = get().isOpen
    isOpen = !isOpen
    console.log (isOpen)
    set({isOpen:isOpen})
  },

}));

export default useRentModal;