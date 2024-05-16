import { json } from 'stream/consumers';
import { create, useStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type PlayThemeAnimationState = {
  playThemeAnimationState: string;
  togglePlayThemeAnimation: () => void;
};

const usePlayThemeAnimationStore = create<PlayThemeAnimationState>()(
  persist(
    (set, get) => ({
      playThemeAnimationState: 'light',
      togglePlayThemeAnimation: () =>
        set((state) => ({
          playThemeAnimationState:
            state.playThemeAnimationState === 'light' ? 'dark' : 'light',
        })),
    }),
    {
      name: 'theme-animation',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default usePlayThemeAnimationStore;
