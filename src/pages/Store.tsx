import { Row } from "react-bootstrap";

import { SearchBar } from "../components/SearchBar";
import { useState, useEffect } from "react";
import { getFilteredData } from "../data/amazonData";
import { useSearchFilters } from "../hooks/useSearchFilters";
import { StoreItemsDisplay } from "../components/StoreItemsDisplay";

export type Item = {
    product_id: string;
    product_category: string;
    product_name: string;
    product_price: string;
    product_rating: number;
    product_image_url: string;
}

export function Store() {
    const {searchText, minPrice, maxPrice, categoryFilters, minRating} = useSearchFilters();
    const [items, setItems] = useState([{} as Item]);
    const perPage = 50;
    const pageNum = 1;

    useEffect(() => {
        const data = getFilteredData(searchText, minPrice, maxPrice, categoryFilters, minRating);
        const paginatedData: Item[] = []
        for(let i = ((pageNum - 1) * perPage); i < (pageNum * perPage); i++) {
            try {
                if(data[i] !== undefined) {
                    paginatedData.push(data[i])
                } else {
                    throw Error("Less than per page amount in list")
                }
            } catch (error) {
                break;
            }
        }
        setItems(paginatedData)
    }, [searchText, minPrice, maxPrice, categoryFilters, minRating])
    
    
    
    return (
        <>
        <h1>Store</h1>
        <SearchBar />
            <Row md={2} xs={1} lg={3} className="g-3">
                <StoreItemsDisplay items={items} />
            </Row>
        </>

    )
}