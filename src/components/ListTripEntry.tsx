import styled, {keyframes} from 'styled-components';

interface Props {
    id: string;
    name: string;
    image: string;
}

export const ListTripEntry = ({id, name, image}: Props) => {
    return (
        <ListTripEntryDiv
            key={id}
            image={image}
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
