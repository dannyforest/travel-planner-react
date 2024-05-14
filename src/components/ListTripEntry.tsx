interface Props {
    id: string;
    name: string;
}

export const ListTripEntry = ({id, name}: Props) => {
    return (
        <div key={id}>{name}</div>
    );
}