import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, InputGroup} from "react-bootstrap";
import { topTenCategories } from "../data/amazonCategories";

export function SearchBar() {
    const categoryFilters = topTenCategories.map((category, i) => {
            return (
                <Form.Check name="category-filters" className="ms-2 me-3" type="checkbox" label={category} key={`checkbox-${i}`}></Form.Check>
            )
            
        })
    
    return (
        <Form>
            <Dropdown  className="mb-1">
               <DropdownToggle>Filter By Categories</DropdownToggle>
               <DropdownMenu>
                    {categoryFilters}
                    <DropdownItem style={{textDecoration: "underline", fontSize: "0.75rem", textAlign: "end"}} onClick={() => console.log("Hi")}>Show All Categories</DropdownItem>
               </DropdownMenu>
            </Dropdown>
            <InputGroup className="mb-3">
                <Form.Control placeholder="Search" type="text"/>
                <Button>Search</Button>
            </InputGroup>
        </Form>
    )
}