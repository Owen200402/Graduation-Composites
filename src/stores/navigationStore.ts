import { create } from "zustand";
import { Photo } from "../components/PhotoSet";

interface NavigationStore {
  selectedYear: number | undefined;
  searchResult: Photo[] | undefined;
  searchedInput: string;
  isAtMainScreen: boolean;
  setSelectedYear: (year: number | undefined) => void;
  setSearchResult: (result: Photo[] | undefined) => void;
  setSearchedInput: (input: string) => void;
  setIsAtMainScreen: (pred: boolean) => void;
}

const useNavigationStore = create<NavigationStore>((set) => ({
  selectedYear: undefined,
  searchResult: undefined,
  searchedInput: "",
  isAtMainScreen: true,
  setSelectedYear: (year) => set(() => ({ selectedYear: year })),
  setSearchResult: (result) => set(() => ({ searchResult: result })),
  setSearchedInput: (input) => set(() => ({ searchedInput: input })),
  setIsAtMainScreen: (pred) => set(() => ({ isAtMainScreen: pred })),
}));


export default useNavigationStore;