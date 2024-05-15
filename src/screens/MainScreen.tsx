import styled from "styled-components";
import {ListTripEntry} from "../components/ListTripEntry";
import {Box, Modal, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {UserTrip} from "../models";
import {DataStore} from "@aws-amplify/datastore";
import {Amplify} from "aws-amplify";

import awsconfig from "../amplifyconfiguration.json";

Amplify.configure(awsconfig);

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
        name: "Trip to Taiwan",
        description: "Trip 1 description",
        date: "2023-05-01",
        location: "Trip 1 location",
        image: "Lungshan_Temple_in_Taiwan"
    },
    {
        id: 2,
        name: "Trip to Shanghai",
        description: "Trip 2 description",
        date: "2023-05-02",
        location: "Trip 2 location",
        image: "White_Buildings_in_Shanghai"
    }
]

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const MainScreen = () => {

    const [open, setOpen] = useState(false);
    const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null)
    const handleOpen = (trip: Trip) => {
        setSelectedTrip(trip)
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    useEffect(() => {
        try {
            const posts = DataStore.query(UserTrip).then(res => {
                console.log(res);
            });
            console.log('Posts retrieved successfully!', JSON.stringify(posts, null, 2));
        } catch (error) {
            console.log('Error retrieving posts', error);
        }
    }, []);

    return (
        <div>
            <h1>My Planned Trips</h1>
            <ListTrips>
                {trips.map((trip: Trip) => (
                    <ListTripEntry
                        key={trip.id}
                        id={trip.id.toString()}
                        name={trip.name}
                        description={trip.description}
                        image={trip.image}
                        handleOpenModal={() => handleOpen(trip)}/>
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
                        {selectedTrip?.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        {selectedTrip?.description}
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