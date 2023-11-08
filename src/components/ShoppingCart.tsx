import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../hooks/useShoppingCart"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }:ShoppingCartProps) {
    const {closeCart} = useShoppingCart();
    return <Offcanvas show={ isOpen } onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title></Offcanvas.Header>
    </Offcanvas>
}