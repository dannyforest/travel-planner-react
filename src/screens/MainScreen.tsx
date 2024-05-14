import styled from "styled-components";
import {ListTripEntry} from "../components/ListTripEntry";
import {Box, Modal, Typography} from "@mui/material";

interface Trip {
    id: number;
    name: string;
    description: string;
    date: string;
    location: string;
    image: string;
}

const trips = [
    {
        id: 1,
        name: "Trip 1",
        description: "Trip 1 description",
        date: "2023-05-01",
        location: "Trip 1 location",
        image: "spain.webp"
    },
    {
        id: 2,
        name: "Trip 2",
        description: "Trip 2 description",
        date: "2023-05-02",
        location: "Trip 2 location",
        image: "japan.jpg"
    }
]
export const MainScreen = () => {
    return (
        <div>
            <h1>My Planned Trips</h1>
            <ListTrips>
                {trips.map((trip: Trip) => (
                    <ListTripEntry
                        key={trip.id}
                        name={trip.name}
                        image={trip.image}
                        id={trip.id.toString()}
                    />
                ))}
            </ListTrips>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}


const ListTrips = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;