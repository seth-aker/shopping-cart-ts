import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../hooks/useShoppingCart"
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utils/formatCurrency";
import getData from "../data/amazonData";

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }:ShoppingCartProps) {
    const {closeCart, cartItems} = useShoppingCart();
    return <Offcanvas show={ isOpen } onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item => {
                   return <CartItem key={item.id} {...item} />
                })}
                <div className="ms-auto fw-bold fs-5">
                    Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                        const item = getData().find(item => item.product_id === cartItem.id);
                        return total + cartItem.quantity * (Number(item?.product_price || 0))
                    }, 0))}
                </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}