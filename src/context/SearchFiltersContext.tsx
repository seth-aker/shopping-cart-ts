import { ReactNode, createContext, useState } from "react";

type SearchContext = {
    searchText: string,
    setSearchText: (text: string) => void
    minPrice: number,
    maxPrice: number,
    setMinPrice: (price: number) => void,
    setMaxPrice: (price: number) => void,
    categoryFilters: string
    addCategoryFilter: (category: string) => void,
    removeCategoryFilter: (category: string) => void
    minRating: number,
    setMinRating: (rating: number) => void
}

type SearchProviderProps = {
    children: ReactNode
}

export const SearchContext = createContext( {} as SearchContext)

export function SearchProvider({ children }: SearchProviderProps) {
   
    const [searchText, setSearchText] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [categoryFilters, setCategoryFilters] = useState("");
    const [minRating, setMinRating] = useState(1);

    function addCategoryFilter(category: string) {
        setCategoryFilters(prevFilters => {
            if(prevFilters === "") {
                return category
            } else {
                return prevFilters + "," + category
            }
        })
    }

    function removeCategoryFilter(category: string) {
        setCategoryFilters(prevFilters => {
            const allCategories = prevFilters.split(",").filter(eachString => {
                return eachString !== category
            })
            return allCategories.join(",")
        })
    }
    
    return <SearchContext.Provider
            value={{
                searchText,
                setSearchText,
                minPrice,
                maxPrice,
                setMinPrice,
                setMaxPrice,
                categoryFilters,
                addCategoryFilter,
                removeCategoryFilter,
                minRating,
                setMinRating

            }}>
            { children }
            </SearchContext.Provider>
}