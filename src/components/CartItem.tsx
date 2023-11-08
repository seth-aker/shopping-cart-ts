import { useShoppingCart } from "../hooks/useShoppingCart"
import getData from "../data/amazonData";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";
type CartItemProps = {
    id: string
    quantity: number
}

export function CartItem({id, quantity} : CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = getData().find(item => item.product_id === id);
    if (item == null) {
        return null
    }
    return (
       <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={item.product_image_url} style={{width: "125px", height: "75px", objectFit: "cover"}}/>
        <div className="me-auto">
            <div>
                {item.product_name} {quantity> 1 && <span className="text-muted" style={{fontSize: "0.65rem"}}>x{quantity}</span>}
            </div>
            <div className="text-muted" style={{fontSize: "0.75rem"}}>
                {formatCurrency(Number(item.product_price))}
            </div>
        </div>
        <div> {formatCurrency(Number(item.product_price) * quantity)} </div>
        <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(id)} >&times;</Button>
       </Stack> 
    )
}