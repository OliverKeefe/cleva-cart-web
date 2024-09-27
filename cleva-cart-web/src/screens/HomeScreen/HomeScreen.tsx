import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import ShoppingList from "../../components/ShoppingList/ShoppingList.tsx";
import WideTile from "../../components/ShoppingList/WideTile.tsx";
import NavbarTop from "../../components/NavbarTop/NavbarTop.tsx";
import ViewMoreButton from "../../components/ShoppingList/ViewMoreButton.tsx";
import styled, {ThemeProvider} from "styled-components";
import {lightTheme} from "../../themes/Themes.ts";
import {Link} from "react-router-dom";




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

const HomeScreen: React.FC = () => {
    return (
                <Row>
                    <Col>
                        <Card>
                            <h1>Shopping List</h1>
                            <ShoppingList items={shoppingItems}/>
                            <Container className="d-flex justify-content-end">
                                <Link to={"/shoppinglist"}>
                                    <ViewMoreButton />
                                </Link>
                            </Container>
                        </Card>
                    </Col>
                    <Col>
                        <WideTile
                            title="This Weeks Meal Plan"
                            subtext="Meals"
                            bgColor="#56D0FF"
                            image="https://via.placeholder.com/150/1E90FF/FFFFFF?text=Yoga"
                        />
                        <WideTile
                            title="Example Tile"
                            subtext="Finance"
                            bgColor="#5CC397"
                            image="https://via.placeholder.com/150/32CD32/FFFFFF?text=Workout"
                        />
                    </Col>
                </Row>
    );
}

export default HomeScreen;