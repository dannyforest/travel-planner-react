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
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

const ListTripEntryDiv = styled.div<ListTripEntryProps>`
  cursor: pointer;
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(/images/${(props) => props.image}.jpg);
  transition: transform 0.3s ease-in-out;

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
  width: 50%;
  background-color: rgba(128, 128, 128, 0.5); // Transparent grey background
  color: white; // White text
  padding: 1rem;
  border-radius: 4px;
`;