import { create } from "zustand";
import { photoData } from "../data/photoData";

interface PaginationStore {
  currentPage: number;
  itemsPerPage: number;
  totalPages: (selectedYear: number | undefined) => number;
  setCurrentPage: (page: number) => void;
  currentMainPage: number;
  setCurrentMainPage: (page: number) => void;
}

const itemsPerPage = 12; // Only place to change

const usePaginationStore = create<PaginationStore>((set) => ({
  currentPage: 1,
  currentMainPage: 1,
  itemsPerPage: itemsPerPage,
  totalPages: (selectedYear) =>
    Math.ceil(
      photoData.filter((p) => p.year === selectedYear).length / itemsPerPage,
    ),
  setCurrentPage: (number) => set(() => ({ currentPage: number })),
  setCurrentMainPage: (number) => set(() => ({ currentMainPage: number })),
}));

export default usePaginationStore;
