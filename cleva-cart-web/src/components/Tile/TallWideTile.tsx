import React from 'react';
import styled from 'styled-components';
import { Container } from "react-bootstrap";

const TileContainer = styled(Container)`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Centers the tiles horizontally */
    align-items: center; /* Centers the tiles vertically */
    gap: 10px; /* Adds space between tiles */
    padding: 10px;
`;

// Styled component for the tile
const Tile = styled(Container)`
    background-color: ${(props) => props.primary || '#fff'};
    border-radius: 5px; /* Rounded corners */
    padding: 20px;
    width: 100%;
    max-width: 400px;
    min-height: 500px;
    position: relative;
    color: #333;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    overflow: hidden;

    & img {
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 120px;
        height: auto;
        z-index: 1;
    }
`;

// Title, Subtext, and Content
const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    z-index: 2;
`;

const SubText = styled.h4`
  font-size: 12px;
  color: #666;
  z-index: 2;
`;

const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  z-index: 2;
`;

// Avatar styling
const Avatar = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-right: -10px;
  border: 2px solid white;
  z-index: 2;
`;

const PlusIcon = styled.div`
    background-color: #e4eaf5;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #333;
    margin-left: 10px;
    z-index: 2;
`;

const TallWideTile: React.FC<{ title: string; subtext: string; avatars: string[]; bgColor: string; image: string }> = ({
                                                                                                                       title,
                                                                                                                       subtext,
                                                                                                                       bgColor,
                                                                                                                       image,
                                                                                                                   }) => {
    return (
        <TileContainer>
            <Tile bgColor={bgColor}>
                <div>
                    <SubText>{subtext}</SubText>
                    <Title>{title}</Title>
                </div>
                <img src={image} alt="tile background" />
            </Tile>
        </TileContainer>
    );
};

export default TallWideTile;