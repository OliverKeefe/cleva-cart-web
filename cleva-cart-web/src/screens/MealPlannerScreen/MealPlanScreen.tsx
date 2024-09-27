import React from "react";
import {Card, Container} from "react-bootstrap";
import styled from "styled-components";
import MealCardRow from "../../components/MealCard/MealCardRow.tsx";
import WideTile from "../../components/ShoppingList/WideTile.tsx";



const MealPlannerScreen: React.FC = () => {
    return (
        <Container>
            <h1>Monday</h1>
            <MealCardRow></MealCardRow>
            <h1>Tuesday</h1>
            <MealCardRow></MealCardRow>
            <h1>Wednesday</h1>
            <MealCardRow></MealCardRow>
            <h1>Thursday</h1>
            <MealCardRow></MealCardRow>
            <h1>Friday</h1>
            <MealCardRow></MealCardRow>
            <h1>Saturday</h1>
            <MealCardRow></MealCardRow>
            <h1>Sunday</h1>
            <MealCardRow></MealCardRow>
        </Container>
    );
};

export default MealPlannerScreen;