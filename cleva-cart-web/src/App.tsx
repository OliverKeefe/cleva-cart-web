import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from "./themes/Themes.ts";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavbarTop/NavbarTop'
import NavbarTop from "./components/NavbarTop/NavbarTop.tsx";
import WideTile from "./components/ShoppingList/WideTile.tsx";
import ShoppingList from "./components/ShoppingList/ShoppingList.tsx";
import './App.css'
import {Card, Col, Row} from "react-bootstrap";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: flex-start; 
    padding: 20px;
    padding-top: 5%;  
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .8);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    backdrop-filter: blur(20px);
    /* Safari */
    -webkit-backdrop-filter: blur(20px); 
    
`;

const PageBackground = styled.div`
    background-image: radial-gradient(circle at top right, rgba(39, 0, 255, 0.8), rgba(255, 99, 0, 0.4), #FFF);
    background-size: cover;
    background-position: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;


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

function App() {

    return (
            <ThemeProvider theme={lightTheme}>
                <PageBackground>
                <AppContainer>
                <NavbarTop />
                        <Row>
                            <Col>
                            <Card>
                                <h1>Shopping List</h1>
                                <ShoppingList items={shoppingItems}/>
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
                </AppContainer>
                </PageBackground>
                </ThemeProvider>
                );
}

export default App
