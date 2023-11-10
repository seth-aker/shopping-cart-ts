import { Button, Card, Modal } from "react-bootstrap";
import { StoreItemProps } from "./StoreItem";
import { StarRating } from "./StarRating";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../hooks/useShoppingCart";

type ModalStoreItemProps = {
    item: StoreItemProps,
    showModal: boolean,
  
    handleClose: () => void
}

export function ModalStoreItem({ item, showModal, handleClose}:ModalStoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    const quantity = getItemQuantity(item.id);
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton><span className="fs-5">{ item.name }</span></Modal.Header>
            <Card className="h-100">
            <Card.Img variant="top" src={item.imgUrl} style={{objectFit: "cover", }}  />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    
                    <span className="ms-2 text-muted">{ formatCurrency(item.price) }</span>
                </Card.Title>
                <Card.Subtitle className="mb-2 d-flex align-items-baseline">
                    <StarRating rating={item.rating}></StarRating>
                    <span className="ms-1">Avg Rating</span>
                </Card.Subtitle>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(item.id)}>+ Add to Cart</Button>
                        ): <div className="d-flex align-items-center flex-column" style={{ gap: "0.5rem"}}>
                        <div className="d-flex align-items-center justify-content-center">
                            <Button className="me-2" onClick={() => decreaseCartQuantity(item.id)}>-</Button>
                            <div>
                                <span className="fs-3">{quantity}</span> in cart
                            </div>
                            <Button className="ms-2" onClick={() => increaseCartQuantity(item.id)}>+</Button>
                        </div>
                        <Button className="danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                    </div> }
                </div>
            </Card.Body>
        </Card>
        </Modal>
    )
}