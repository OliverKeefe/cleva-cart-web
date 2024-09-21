import React from "react";
import {Card} from "react-bootstrap";
import ShoppingList from "../../components/ShoppingList/ShoppingList.tsx";
import WideTile from "../../components/ShoppingList/WideTile.tsx";


const HomeScreen: React.FC = () => {
    return (

        <Card>
            <ShoppingList items={shoppingItems}/>
        </Card>


        <WideTile
            title="This Weeks Meal Plan"
            subtext="Meals"
            bgColor="#56D0FF"
            image="https://via.placeholder.com/150/1E90FF/FFFFFF?text=Yoga"
        />
        <WideTile
            title="Shopping Cart"
            subtext="Finance"
            bgColor="#5CC397"
            image="https://via.placeholder.com/150/32CD32/FFFFFF?text=Workout"
        />

    );
}

export default HomeScreen;