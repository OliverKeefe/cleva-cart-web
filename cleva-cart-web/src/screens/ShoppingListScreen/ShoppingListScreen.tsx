import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import ShoppingList from "../../components/ShoppingList/ShoppingList.tsx";
import Checkout from "../../components/Checkout/Checkout.tsx";

const shoppingItems = [
    {
        productName: 'Organic Apples',
        productImage: 'https://via.placeholder.com/150',
        sourceProducers: 'Local Farms Co.',
        sourceSuperMarket: 'Whole Foods',
        productDescription: 'Fresh organic apples grown locally.',
        quantity: '5 lbs',
        expectedDelivery: 'September 25, 2024',
    },
    {
        productName: 'Almond Milk',
        productImage: 'https://via.placeholder.com/150',
        sourceProducers: 'Almond Breeze',
        sourceSuperMarket: 'Trader Joe\'s',
        productDescription: 'Unsweetened almond milk, 1 quart.',
        quantity: '2 cartons',
        expectedDelivery: 'September 26, 2024',
    },
    {
        productName: 'Whole Wheat Bread',
        productImage: 'https://via.placeholder.com/150',
        sourceProducers: 'Bakery Fresh Co.',
        sourceSuperMarket: 'Walmart',
        productDescription: 'Healthy whole wheat bread loaf.',
        quantity: '1 loaf',
        expectedDelivery: 'September 27, 2024',
    },
    // Add more items...
];

const ShoppingListScreen: React.FC = () => {
    return (
        <div>
            <Col>
                <Row>
                    <Col>
                <Card>
                    <h1>Shopping List</h1>
                    <ShoppingList items={shoppingItems}/>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Checkout />
                </Card>
            </Col>
                </Row>
            </Col>
        </div>
    );
}

export default ShoppingListScreen;