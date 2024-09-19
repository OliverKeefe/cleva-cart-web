import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from "./themes/Themes.ts";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavbarTop/NavbarTop'
import NavbarTop from "./components/NavbarTop/NavbarTop.tsx";
import WideTile from "./components/Tile/WideTile.tsx";
import Container from 'react-bootstrap/esm/Container';
import TallWideTile from "./components/Tile/TallWideTile.tsx";

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
    background: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F680%2F709%2Foriginal%2Fcolorful-retro-abstract-geometric-shape-background.jpg&f=1&nofb=1&ipt=ab0b6ace318b673eb869b3a62d6d4abc5c8daa851e2c65dc1d771dbe99605487&ipo=images");
    background-size: cover;
    background-position: center;
    //position: fixed;
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

                    <WideTile
                        title="Training Schedule"
                        subtext="Workout"
                        bgColor="#FEBBBD"
                        image="https://via.placeholder.com/150/FF6347/FFFFFF?text=3D"
                    />
                    <TallWideTile
                        title="Shopping Cart"
                        subtext="Finance"
                        bgColor="#5CC397"
                        image="https://via.placeholder.com/150/32CD32/FFFFFF?text=Workout"
                    />
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
                    <TallWideTile
                        title="Shopping Cart"
                        subtext="Finance"
                        bgColor="#5CC397"
                        image="https://via.placeholder.com/150/32CD32/FFFFFF?text=Workout"
                        />
                </AppContainer>
                </PageBackground>
                </ThemeProvider>
                );
}

export default App
