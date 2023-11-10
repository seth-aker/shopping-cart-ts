import { useContext } from "react";
import { SearchContext } from "../context/SearchFiltersContext";

export function useSearchFilters() {
    return useContext(SearchContext)
}