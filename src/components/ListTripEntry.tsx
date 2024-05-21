import styled, {keyframes} from "styled-components";
import {Box, Modal, Typography} from "@mui/material";
import {useState} from "react";

interface Props {
    id: string;
    name: string | null | undefined;
    image: string | null | undefined;
    handleOpenModal: () => void;
    description: string | null | undefined;
}


export const ListTripEntry = ({id, name, image, handleOpenModal, description}: Props) => {
    return (
        <>
            <ListTripEntryDiv
                key={id}
                $image={image ? image : 'default'}
                onClick={handleOpenModal}
            >
               <Heading>{name}</Heading>
                <Paragraph>{description}</Paragraph>
            </ListTripEntryDiv>
  </>
        )
    }

interface ListTripEntryProps {
    $image: string;

}

const scaleAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

const ListTripEntryDiv = styled.div<ListTripEntryProps>`
    cursor: pointer;
    width: 70%;
    height: 400px;
    margin: 20px auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(/images/${(props) => props.$image}.webp);
    transition: transform 0.3s ease-in-out;
    border-radius: 15px;
    border: 3px
    rgba(51, 204, 204, 1) solid;
    &:hover {
        animation: ${scaleAnimation} 0.5s ease-in-out;
    }
`;

const Heading = styled.h1`
  background-color: rgba(128, 128, 128, 0.5); // Transparent grey background
  color: white; // White text
  padding: 1rem;
  border-radius: 4px;
`;

const Paragraph = styled.p`
    width: 30%;
    background-color: rgba(128, 128, 128, 0.5); // Transparent grey background
    color: white; // White text
    padding: 1rem;
    border-radius: 4px;
`;