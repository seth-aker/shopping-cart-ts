import { Dropdown, DropdownMenu, DropdownToggle, Form } from "react-bootstrap";
import { Star } from "./Star";


type RatingFilterProps = {
    setMinRating: (rating: number) => void
}

export function RatingFilter({setMinRating}: RatingFilterProps) {
    
    function handleChange({target}: React.ChangeEvent<HTMLInputElement>) {
        setMinRating(Number(target.value))
    }
    
    return (
        <Dropdown>
            <DropdownToggle>Filter by Rating</DropdownToggle>
            <DropdownMenu className="p-1">
                <Form.Check value={4}
                    type="radio"
                    onChange={handleChange} 
                    label={
                        <>
                        <Star fill={true}/>
                        <Star fill={true}/>
                        <Star fill={true}/>
                        <Star fill={true}/>
                        <Star fill={false}/>
                        <span className="ms-1">& Up</span>
                        </>
                    }
                    name="rating-filter"
                />
                <Form.Check value={3}
                    type="radio" 
                    onChange={handleChange} 
                    label={
                        <>
                        <Star fill={true}/>
                        <Star fill={true}/>
                        <Star fill={true}/>
                        <Star fill={false}/>
                        <Star fill={false}/>
                        <span className="ms-1">& Up</span>
                        </>
                    }
                    name="rating-filter"
                />
                <Form.Check value={2}
                    type="radio" 
                    onChange={handleChange} 
                    label={
                        <>
                        <Star fill={true}/>
                        <Star fill={true}/>
                        <Star fill={false}/>
                        <Star fill={false}/>
                        <Star fill={false}/>
                        <span className="ms-1">& Up</span>
                        </>
                    }
                    name="rating-filter"
                />
                <Form.Check value={1}
                    type="radio" 
                    onChange={handleChange} 
                    label={
                        <>
                        <Star fill={true}/>
                        <Star fill={false}/>
                        <Star fill={false}/>
                        <Star fill={false}/>
                        <Star fill={false}/>
                        <span className="ms-1">& Up</span>
                        </>
                    }
                    name="rating-filter"
                    defaultChecked
                />
                
            </DropdownMenu>
        </Dropdown>
    )
}