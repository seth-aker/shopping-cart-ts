import { Card } from "react-bootstrap"

type StoreItemProps = {
    id: string,
    name: string,
    category: string,
    price: number,
    imgUrl: string,
    rating: number
}


export function StoreItem({ id , name, category, price, imgUrl, rating }: StoreItemProps) {
    return (
        <Card>
            <Card.Img variant="top" src={imgUrl} height="200px" style={{objectFit: "cover"}} />
            <Card.Body className="d-flex flex-column">
                <Card.Title></Card.Title>
            </Card.Body>
        </Card>
    )
}