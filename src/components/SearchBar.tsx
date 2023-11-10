import { Button, Form, InputGroup} from "react-bootstrap";
import { CategoryFilter } from "./CategoryFilter";
import { PriceFilter } from "./PriceFilter";
import { useSearchFilters } from "../hooks/useSearchFilters";
import { RatingFilter } from "./RatingFilter";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";



export function SearchBar() {
    const {searchText, setSearchText, minPrice, maxPrice, setMinPrice, setMaxPrice, addCategoryFilter, removeCategoryFilter, setMinRating} = useSearchFilters();
    const search = (e: FormEvent<HTMLFormElement>  ) => {
        e.preventDefault();
        navigate("/shopping-cart-ts/store");
    }
    const navigate = useNavigate();
   
    return (
        <>
        <Form onSubmit={search}>
            <InputGroup className="mb-1 ms-1">
                <CategoryFilter addCategoryFilter={addCategoryFilter} removeCategoryFilter={removeCategoryFilter} />
                <PriceFilter minPrice={minPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} />
                <RatingFilter setMinRating={setMinRating}/>
            </InputGroup>
          
            <InputGroup className="mb-3">
                <Form.Control placeholder={searchText ? searchText : "Search"} type="text" onChange={({target}) => setSearchText(target.value)}/>
                <Button onClick={() => navigate("/shopping-cart-ts/store")}>Search</Button>
            </InputGroup>
        </Form>
        </>
    )
}