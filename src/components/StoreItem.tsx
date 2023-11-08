import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utils/formatCurrency"
import { useShoppingCart } from "../hooks/useShoppingCart"

type StoreItemProps = {
    id: string
    name: string,
    category: string,
    price: number,
    imgUrl: string,
    rating: number
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function StoreItem({ id, name, category, price, imgUrl, rating }: StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    
    const quantity = getItemQuantity(id);
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={imgUrl} height="200px" style={{objectFit: "cover"}} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-4">{ name }</span>
                    <span className="ms-2 text-muted">{ formatCurrency(price) }</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Add to Cart</Button>
                    ): <div className="d-flex align-items-center flex-column" style={{ gap: "0.5rem"}}>
                        <div className="d-flex align-items-center justify-content-center">
                            <Button className="me-2" onClick={() => decreaseCartQuantity(id)}>-</Button>
                            <div>
                                <span className="fs-3">{quantity}</span> in cart
                            </div>
                            <Button className="ms-2" onClick={() => increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button className="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                    </div> }
                </div>
            </Card.Body>
        </Card>
    )
}