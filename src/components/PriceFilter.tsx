import { Dropdown, DropdownMenu, DropdownToggle, Form } from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";

export function PriceFilter() {
    return (
        <Dropdown>
            <DropdownToggle>Filter by Price</DropdownToggle>
            <DropdownMenu>
                <Form.Label>Min Price</Form.Label>
                <FormRange id="min" min="0" max="1000" step="1" defaultValue="0" />

                <Form.Label>Max Price</Form.Label>
                <FormRange /> 
            </DropdownMenu>
        </Dropdown>
    )
}