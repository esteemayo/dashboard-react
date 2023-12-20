import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { produce } from 'immer';

interface AddStore {
  isOpen: boolean;
}

interface ActionType {
  onOpen(): void;
  onClose(): void;
}

export const useAddStore = create<AddStore & ActionType>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openModal'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeModal'
      ),
  }))
);
