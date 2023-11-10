import { Dropdown, DropdownMenu, DropdownToggle, Form } from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";

type PriceFilterProps = {
    minPrice: number | null,
    maxPrice: number | null,
    setMinPrice: (price: number) => void,
    setMaxPrice: (price: number) => void,
}
export function PriceFilter({minPrice, maxPrice, setMinPrice, setMaxPrice}: PriceFilterProps) { 
    function handleMaxChange({ target }: React.ChangeEvent<HTMLInputElement>) {
        setMaxPrice(Number(target.value))
    }

    function handleMinChange({ target }: React.ChangeEvent<HTMLInputElement>) {
        setMinPrice(Number(target.value))
    }

    return (
        <Dropdown>
            <DropdownToggle>Filter by Price</DropdownToggle>
            <DropdownMenu className="p-1" style={{width: "25vw"}}>
                <Form.Label>Min Price: ${minPrice ? minPrice : "0"}</Form.Label>
                <FormRange id="min" min="0" max="999" defaultValue={minPrice ? minPrice : "0"} onChange={handleMinChange}/>

                <Form.Label>Max Price: ${maxPrice ? maxPrice : "1000"}</Form.Label>
                <FormRange id="max" min="1" max="1000" defaultValue={maxPrice ? maxPrice : "1000"} onChange={handleMaxChange}/> 
            </DropdownMenu>
        </Dropdown>
    )
}