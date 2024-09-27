import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Card} from "react-bootstrap";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const MealCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    color: #000000;
    width: 30%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
    border-color: oldlace;
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

const SectionTitle = styled.h3`
    margin: 10px 0;
    background-color: #000000;
    width: 100%;
    padding: 10px;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    font-family: Helvetica;
    font-size: 1.2em;
`;


const MealCardRow = () => {
    //const [meals, setMeals] = useState([]);
//
    //useEffect(() => {
    //    fetch("/api/meals")
    //        .then((response) => response.json())
    //        .then((data) => {
    //            setMeals(data);
    //    })
    //        .catch((error) => {
    //            console.error('Error fetching the meal plan data:', error);
    //        });
    //}, []);

    const meals = new Map([
        [1, { title: "Overnight Oats with Mixed Berries", description: "This no-cook method allows the oats to absorb liquid overnight.", prepTime: "5 mins", cookTime: "20 mins" }],
        [2, { title: "Ham Sandwich", description: "A quick and easy ham sandwich.", prepTime: "10 mins", cookTime: "0 mins" }],
        [3, { title: "Pasta Salad", description: "A refreshing pasta salad with veggies.", prepTime: "15 mins", cookTime: "0 mins" }]
    ]);

    //{meals.map((meal, index) => (

    return (
        <CardContainer>
            {Array.from(meals.values()).map((meal, index) => (
                <MealCard key={index}>
                    <MealImage />
                    <MealTitle>{meal.title}</MealTitle>
                    <MealDescription>
                        {meal.description}
                    </MealDescription>
                    <InfoSection>
                        <InfoItem>
                            <strong>Servings</strong>
                            <p>1</p>
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
            ))}
        </CardContainer>
    );
};

export default MealCardRow;
