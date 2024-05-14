import styled from "styled-components";

interface Trip {

    id: number;
    name: string;
    description: string;
    date: string;
    location: string;
    image: string;
}

const trips: Trip[] = [
    {
        id: 1,
        name: "Trip 1",
        description: "Trip 1 description",
        date: "2023-05-01",
        location: "Trip 1 location",
        image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        id: 2,
        name: "Trip 2",
        description: "Trip 2 description",
        date: "2023-05-02",
        location: "Trip 2 location",
        image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    }
];

export const MainScreen = () => {
    return (
        <div>
            <h1>My Planned Trips</h1>
            <ListTrips>
                {trips.map((trip) => (
                    <div key={trip.id}>{trip.name}</div>
                ))}
            </ListTrips>
        </div>
    )
}

const ListTrips = styled.div
`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`