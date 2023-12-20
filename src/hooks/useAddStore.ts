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

const INITIAL_STATE = {
  isOpen: false,
};

export const useAddStore = create<AddStore & ActionType>()(
  devtools((set) => ({
    isOpen: INITIAL_STATE.isOpen,
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
