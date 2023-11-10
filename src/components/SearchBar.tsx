import { Button, Form, InputGroup} from "react-bootstrap";
import { CategoryFilter } from "./CategoryFilter";
import { PriceFilter } from "./PriceFilter";
import { useSearchFilters } from "../hooks/useSearchFilters";
import { RatingFilter } from "./RatingFilter";
import { Navigate } from "react-router-dom";
import { useState } from "react";


export function SearchBar() {
    const {searchText, setSearchText, minPrice, maxPrice, setMinPrice, setMaxPrice, addCategoryFilter, removeCategoryFilter, setMinRating} = useSearchFilters();
    const [buttonClicked, setButtonClicked] = useState(false);
    const search = () => {
        setButtonClicked(true)
        
    }
    
    return (
        <>
        <Form>
            <InputGroup className="mb-1 ms-1">
                <CategoryFilter addCategoryFilter={addCategoryFilter} removeCategoryFilter={removeCategoryFilter} />
                <PriceFilter minPrice={minPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} />
                <RatingFilter setMinRating={setMinRating}/>
            </InputGroup>
          
            <InputGroup className="mb-3">
                <Form.Control placeholder={searchText ? searchText : "Search"} type="text" onChange={({target}) => setSearchText(target.value)}/>
                <Button onClick={search}>Search</Button>
            </InputGroup>
        </Form>
        {buttonClicked && <Navigate to={"/store"} />}
        </>
    )
}