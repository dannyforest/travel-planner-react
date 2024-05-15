import styled, {keyframes} from 'styled-components';

interface Props {
    id: string;
    name: string;
    image: string;
    description: string;
    handleOpenModal: () => void;
}

export const ListTripEntry = ({id, name, image, handleOpenModal, description}: Props) => {
    return (
        <ListTripEntryDiv
            key={id}
            image={image}
            onClick={handleOpenModal}
        >
            <Heading>{name}</Heading>
            <Paragraph>{description}</Paragraph>
        </ListTripEntryDiv>
    )
}

interface ListTripEntryProps {
    image: string;
}

const scaleAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.5);
    }
`;

const ListTripEntryDiv = styled.div<ListTripEntryProps>`
    cursor: pointer;
    width: 40%;
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(/images/${(props) => props.image}.jpg);
    transition: transform 0.3s ease-in-out;
    margin-bottom: 2rem;
    border: 2px black solid;
    box-shadow: 10px 10px rgba(128, 128, 128, 0.6);

    &:hover {
        animation: ${scaleAnimation} 0.5s ease-in-out forwards;
    }
`;

const Heading = styled.h1`
  background-color: rgba(128, 128, 128, 0.5); // Transparent grey background
  color: white; // White text
  font-size: 3rem;  
  text-shadow: 2px 2px 5px black;
  text-align: center;  
  padding: 1rem;
  border-radius: 4px;
  border: 0.5px black solid;  
`;

const Paragraph = styled.p`
  width: 40%;
  background-color: rgba(128, 128, 128, 0.8); // Transparent grey background
  color: white; // White text 
  text-shadow: 2px 2px 5px black;  
  padding: 1rem;
  border-radius: 4px;
  border: 0.5px black solid;  
`;