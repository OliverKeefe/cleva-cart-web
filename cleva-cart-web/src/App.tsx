import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from "./themes/Themes.ts";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavbarTop/NavbarTop'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import NavbarTop from "./components/NavbarTop/NavbarTop.tsx";
import React from "react";
import ShoppingListScreen from "./screens/ShoppingListScreen/ShoppingListScreen.tsx";
import MealPlannerScreen from "./screens/MealPlannerScreen/MealPlanScreen.tsx";

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
    //background-image: radial-gradient(circle at top right, rgba(39, 0, 255, 0.8), rgba(255, 99, 0, 0.4), #FFF);
    background-color: ${(props) => props.theme.colors.background};
    background-size: cover;
    background-position: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <PageBackground>
                <AppContainer>
                    <NavbarTop />
                        <Router>
                            <Routes>
                                <Route path="/" element={<HomeScreen />} />
                                <Route path="/shoppinglist" element={<ShoppingListScreen />} />
                                <Route path="/mealplan" element={<MealPlannerScreen />} />

                            </Routes>
                        </Router>
                </AppContainer>
            </PageBackground>
        </ThemeProvider>
    );
}

export default App
