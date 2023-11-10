import { Button, Form, InputGroup} from "react-bootstrap";
import { CategoryFilter } from "./CategoryFilter";
import { PriceFilter } from "./PriceFilter";
import { useSearchFilters } from "../hooks/useSearchFilters";
import { RatingFilter } from "./RatingFilter";

export function SearchBar() {
    const {setSearchText, minPrice, maxPrice, setMinPrice, setMaxPrice, addCategoryFilter, removeCategoryFilter, setMinRating} = useSearchFilters();
    return (
        <Form>
            <InputGroup className="mb-1 ms-1">
                <CategoryFilter addCategoryFilter={addCategoryFilter} removeCategoryFilter={removeCategoryFilter} />
                <PriceFilter minPrice={minPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} />
                <RatingFilter setMinRating={setMinRating}/>
            </InputGroup>
          
            <InputGroup className="mb-3">
                <Form.Control placeholder="Search" type="text" onChange={({target}) => setSearchText(target.value)}/>
                <Button>Search</Button>
            </InputGroup>
        </Form>
    )
}