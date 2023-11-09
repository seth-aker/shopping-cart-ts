import { Button, Form, InputGroup} from "react-bootstrap";
import { CategoryFilter } from "./CategoryFilter";

export function SearchBar() {
    return (
        <Form>
            <CategoryFilter />
            <InputGroup className="mb-3">
                <Form.Control placeholder="Search" type="text"/>
                <Button>Search</Button>
            </InputGroup>
        </Form>
    )
}