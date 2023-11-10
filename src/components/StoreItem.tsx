import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utils/formatCurrency"
import { useShoppingCart } from "../hooks/useShoppingCart"
import { StarRating } from "./StarRating"
import { useState } from "react"
import { ModalStoreItem } from "./ModalStoreItem"

export type StoreItemProps = {
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
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    
    const quantity = getItemQuantity(id);
    return (
        <>
        <ModalStoreItem showModal={showModal} handleClose={handleClose} item={{id, name, category, price, imgUrl, rating}}></ModalStoreItem>
        <Card className="h-100">
            <Card.Img variant="top" src={imgUrl} height="200px" style={{objectFit: "cover", cursor: "pointer"}} onClick={() => setShowModal(true)}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-5">{ name }</span>
                    <span className="ms-2 text-muted">{ formatCurrency(price) }</span>
                </Card.Title>
                <Card.Subtitle className="mb-2 d-flex align-items-baseline">
                    <StarRating rating={rating}></StarRating>
                    <span className="ms-1">Avg Rating</span>
                </Card.Subtitle>
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
        </>
    )
}