import React from "react";
import styled from "styled-components";
import avocadoImage from "./avocado.jpg";  // Import the image

// Styled components
const Card = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    width: 200px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 12px;
`;

const Price = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 4px;
`;

const Currency = styled.span`
    font-size: 1rem;
    vertical-align: top;
`;

const AddButton = styled.button`
    background-color: #0f9d58;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #0b7d46;
    }
`;

const ButtonText = styled.span`
    margin-left: 8px;
`;

const Description = styled.div`
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 8px;
`;

// React Component
const ItemCard: React.FC = () => {
    return (
        <Card>
            <Image
                src={avocadoImage}  // Use the imported image
                alt="Avocado"
            />
            <Price>
                <Currency>£</Currency>2<sup>85</sup>
            </Price>
            <Description>Avocado, Package 1 kg</Description>
            <AddButton>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#fff"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z" />
                </svg>
                <ButtonText>Add</ButtonText>
            </AddButton>
        </Card>
    );
};

export default ItemCard;
