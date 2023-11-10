
import { StoreItem } from "./StoreItem";
import { Col } from "react-bootstrap";
import { Item } from "../pages/Store";
import { ReactElement } from "react";

type StoreItemsDisplayProps = {
     items: Item[]
}

export function StoreItemsDisplay({items}: StoreItemsDisplayProps) {
    const storeList: ReactElement[] = [];
   
    items.forEach(item => {
        storeList.push(
            <Col key={item.product_id}>
                <StoreItem 
                    id={item.product_id} 
                    name={item.product_name}
                    category={item.product_category}
                    price={Number(item.product_price)}
                    imgUrl={item.product_image_url}
                    rating={item.product_rating} ></StoreItem>
            </Col>
        )
    })
        
    return storeList;
}