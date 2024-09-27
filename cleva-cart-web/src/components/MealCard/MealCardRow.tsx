import React from 'react';
import styled from 'styled-components';
import { Card, Row, Col } from 'react-bootstrap';

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    flex-wrap: wrap;
`;

const MealCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    color: #000000;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    border-color: oldlace;
    max-width: 300px; /* Set a maximum width to prevent cards from becoming too wide */
    width: 100%;
`;

const MealTitle = styled.h2`
    margin: 10px 0;
    font-size: 1.5em;
    text-align: left;
`;

const MealImage = styled.div`
    width: 100%;
    height: 150px;
    background-color: #ccc;
    border-radius: 8px;
    margin-bottom: 10px;
`;

const MealDescription = styled.p`
    text-align: left;
    font-size: 0.9em;
    color: #b5b5b5;
    margin-bottom: 20px;
`;

const InfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
`;

const InfoItem = styled.div`
    text-align: center;
`;

const MealCardRow = () => {
    const meals = new Map([
        [1, { title: "Overnight Oats with Mixed Berries", description: "This no-cook method allows the oats to absorb liquid overnight.", prepTime: "5 mins", cookTime: "20 mins", servings: "1" }],
        [2, { title: "Ham Sandwich with Chips", description: "A quick and easy ham sandwich with lettuce and salad cream.", prepTime: "10 mins", cookTime: "23 mins", servings: "1" }],
        [3, { title: "Spicy Cajun Pasta Salad", description: "A refreshing pasta salad with veggies.", prepTime: "15 mins", cookTime: "8 mins", servings: "1" }],
        [4, { title: "Chicken Stir Fry with Puk Choi", description: "A healthy chicken stir fry with puk choi and gluten free soy sauce.", prepTime: "20 mins", cookTime: "15 mins", servings: "1" }]
    ]);

    return (
        <CardContainer>
            <Row className="w-100">
                {Array.from(meals.values()).map((meal, index) => (
                    <Col key={index} sm={12} md={6} lg={4} className="d-flex justify-content-center">
                        <MealCard>
                            <MealImage />
                            <MealTitle>{meal.title}</MealTitle>
                            <MealDescription>
                                {meal.description}
                            </MealDescription>
                            <InfoSection>
                                <InfoItem>
                                    <strong>Servings</strong>
                                    <p>{meal.servings}</p>
                                </InfoItem>
                                <InfoItem>
                                    <strong>Preparation</strong>
                                    <p>{meal.prepTime}</p>
                                </InfoItem>
                                <InfoItem>
                                    <strong>Cook</strong>
                                    <p>{meal.cookTime}</p>
                                </InfoItem>
                            </InfoSection>
                        </MealCard>
                    </Col>
                ))}
            </Row>
        </CardContainer>
    );
};

export default MealCardRow;
