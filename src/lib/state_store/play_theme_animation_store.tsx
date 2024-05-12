import { json } from "stream/consumers";
import { create } from "zustand";

type PlayThemeAnimationState = {
  playThemeAnimationState: string;
  togglePlayThemeAnimation: () => void;
};

const usePlayThemeAnimationStore = create<PlayThemeAnimationState>((set) => ({
  playThemeAnimationState: localStorage.getItem("theme") || "light",
  togglePlayThemeAnimation: () =>set((state) => ({playThemeAnimationState: state.playThemeAnimationState === "light" ? "dark" : "light"})),


}));

export default usePlayThemeAnimationStore;