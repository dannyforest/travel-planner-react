interface Props {
    id: string;
    name: string;
    image: string;
}

export const ListTripEntry = ({id, name, image}: Props) => {
    return (
        <div
            style={{
                width: '100%',
                height: '300px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage: `url(/images/${image}.jpg)`
            }}
            key={id}>{name}</div>
    );
}