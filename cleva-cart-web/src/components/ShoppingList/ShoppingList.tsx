import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const CardContainer = styled(Container)`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: left; /* Centers the tiles horizontally */
    align-items: flex-start; /* Aligns the cards at the top */
    gap: 15px; /* Adds space between cards */
`;

// Styled component for the card
const Card = styled.div`
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    max-width: 350px; /* Wider cards for horizontal layout */
    display: flex;
    flex-direction: row; /* Horizontal layout */
    align-items: center;
    gap: 10px; /* Reduce space between image and content */
`;

const ProductImage = styled.img`
    width: 100px; /* Reduce the image size */
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align text elements closer together */
    width: 100%;
    gap: 3px; /* Reduce space between text elements */
`;

const ProductName = styled.h2`
    font-size: 14px; /* Reduce font size */
    font-weight: bold;
    margin: 0; /* Remove default margin */
`;

const ProductDescription = styled.p`
    font-size: 11px;
    color: #666;
    margin: 0; /* Remove extra margin */
    line-height: 1.2; /* Tighten line spacing */
`;

const ProductDetails = styled.p`
    font-size: 10px;
    color: #777;
    margin: 0; /* Remove margin */
`;

const Quantity = styled.p`
    font-size: 10px;
    margin: 0; /* Remove extra margin */
    font-weight: bold;
`;

const ExpectedDelivery = styled.p`
    font-size: 10px;
    margin: 0; /* Reduce margin */
`;

type ShoppingItem = {
    productName: string;
    productImage: string;
    sourceProducers: string;
    sourceSuperMarket: string;
    productDescription: string;
    quantity: string;
    expectedDelivery: string;
};

type ShoppingListProps = {
    items: ShoppingItem[];
};

const ShoppingList: React.FC<ShoppingListProps> = ({ items }) => {
    return (
        <CardContainer>
            {items.map((item, index) => (
                <Card key={index}>
                    <ProductImage src={item.productImage} alt={item.productName} />
                    <ProductInfo>
                        <ProductName>{item.productName}</ProductName>
                        <ProductDescription>{item.productDescription}</ProductDescription>
                        <ProductDetails>
                            Producer: {item.sourceProducers} <br />
                            Available at: {item.sourceSuperMarket}
                        </ProductDetails>
                        <Quantity>Quantity: {item.quantity}</Quantity>
                        <ExpectedDelivery>Expected Delivery: {item.expectedDelivery}</ExpectedDelivery>
                    </ProductInfo>
                </Card>
            ))}
        </CardContainer>
    );
};

export default ShoppingList;
