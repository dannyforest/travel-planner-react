import styled, {keyframes} from 'styled-components';

interface Props {
    id: string;
    name: string;
    image: string
    handleOpenModal: () => void;
}

export const ListTripEntry = ({id, name, image, handleOpenModal}: Props) => {
    return (
        <ListTripEntryDiv
            key={id}
            image={image}
            onClick={handleOpenModal}
        >
            {name}
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
    width: 1000px;
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(/images/${(props) => props.image}.webp);
    transition: transform 0.3s ease-in-out;

    &:hover {
        animation: ${scaleAnimation} 0.5s ease-in-out;
    }
`;