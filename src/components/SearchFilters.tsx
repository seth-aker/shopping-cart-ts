import { Form } from "react-bootstrap"
import { topTenCategories } from "../data/amazonCategories"

export function SearchFilters() {
    const categoryFilters = topTenCategories.map((category, i) => {
            return (
                <Form.Check  name="category-filters" className="me-2" type="checkbox" label={category} id={`checkbox-${i}`}></Form.Check>
            )
        })

    return (
        <Form>
            {categoryFilters}
        </Form>
    )
}