import React from "react";
import {Button, Container} from "react-bootstrap";
import styled from "styled-components";

const ButtonContainer = styled(Container)`
    padding: 15px;
    display: flex;
    justify-content: flex-end;
`

const StyledButton = styled(Button)`
    border: 1px solid black; 
    background-color: white; 
    color: black; 
    font-family: Helvetica, sans-serif; 
    padding: 5px 15px; 
    font-size: 11px; 
    border-radius: 35px;
    max-width: 100px;
    justify-content: right;

    &:hover {
        background-color: black; 
        color: white; 
    }

    `;

const ViewMoreButton: React.FC = () =>  {
    return (
        <ButtonContainer>
            <StyledButton>
                Show More
            </StyledButton>
        </ButtonContainer>
    );
}

export default ViewMoreButton;