import { Col, Row } from "react-bootstrap";
import getData  from "../data/amazonData";
import { StoreItem } from "../components/StoreItem";

export function Store() {
    const data = getData();
    const storeList = [];
    for(let i = 0; i < 50; i++) {
        const item = data[i];
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
        
    }
    return (
        <>
        <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeList}
            </Row>
        </>

    )
}