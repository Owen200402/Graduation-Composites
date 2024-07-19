import { create } from "zustand";

interface AudioStore {
  type: string;
  setType: (genre: string) => void;
}

const useAudioStore = create<AudioStore>((set) => ({
  type: "Genre",
  setType: (type) => set(() => ({ type: type })),
}));

export default useAudioStore;
