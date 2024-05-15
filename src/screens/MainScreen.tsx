import styled from "styled-components";
import {ListTripEntry} from "../components/ListTripEntry";
import {Box, Modal, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import {DataStore} from "@aws-amplify/datastore";
import {UserTrip} from "../models";
import {Amplify} from "aws-amplify";
import awsconfig from "../amplifyconfiguration.json";

Amplify.configure(awsconfig)

interface Trip {

    id: number;
    name: string;
    description: string;
    date: string;
    location: string;
    image: string;
    title: string;
    tooltipText: string;
}

const trips: Trip[] = [
    {
        id: 1,
        name: "Trip to Spain",
        description: "Click here if you plan a trip to Spain",
        date: "2023-05-01",
        location: "Trip 1 location",
        image: "Spain",
        title: "Be charmed by Spain",
        tooltipText: "Spain picture, click to plan a trip"
    },
    {
        id: 2,
        name: "Trip to Egypt",
        description: "Click here if you plan a trip to Egypt",
        date: "2023-05-02",
        location: "Trip 2 location",
        image: "Egypte",
        title: "Be charmed by Egypt",
        tooltipText: "Egypt picture, click to plan a trip"
    },
    {
        id: 3,
        name: "Trip to Italy",
        description: "Click here if you plan a trip to Italy",
        date: "2023-05-03",
        location: "Trip 3 location",
        image: "Italy",
        title: "Be charmed by Italy",
        tooltipText: "Italy picture, click to plan a trip"
    },
    {
        id: 4,
        name: "Trip to England",
        description: "Click here if you plan a trip to England",
        date: "2023-05-04",
        location: "Trip 4 location",
        image: "England",
        title: "Be charmed by England",
        tooltipText: "England picture, click to plan a trip"
    },
    {
        id: 5,
        name: "Trip to France",
        description: "Click here if you plan a trip to France",
        date: "2023-05-05",
        location: "Trip 5 location",
        image: "France",
        title: "Be charmed by France",
        tooltipText: "France picture, click to plan a trip"
    },
    {
        id: 6,
        name: "Trip to Germany",
        description: "Click here if you plan a trip to Germany",
        date: "2023-05-06",
        location: "Trip 6 location",
        image: "Germany",
        title: "Be charmed by Germany",
        tooltipText: "Germany picture, click to plan a trip"
    }
];

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

const closeIconStyle = {
    position: "relative",
    top: "-28px",
    right: "-400px",
    cursor: "pointer",
    color: "red",
    border: "2px black solid",
    borderRadius: "5px"
}

const modalTitleStyle = {
    position: "relative",
    textAlign: "center",
    top: "-55px",
    color: "black",
    fontWeight: "bold",
}

export const MainScreen = () => {
    const [open, setOpen] = useState(false);
    const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
    const handleOpen = (trip: Trip) => {
        setSelectedTrip(trip);
        setOpen(true)
    };
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
            <TripTitle>My Planned Trips</TripTitle>
            <ListTrips>
                {trips.map((trip) => (
                    <ListTripEntry
                        key={trip.id}
                        id={trip.id.toString()}
                        description={trip.description}
                        handleOpenModal={() => handleOpen(trip)}
                        name={trip.name}
                        image={trip.image}
                        tooltipText={trip.tooltipText}
                    />
                ))}
            </ListTrips>
            <Modal
                open={open}
                /*onClose={handleClose}*/
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CloseTwoToneIcon
                        onClick={handleClose}
                        sx={closeIconStyle}
                    />
                    <Typography
                        id="modal-modal-title"
                        variant="h5"
                        component="h2"
                        sx={modalTitleStyle}
                    >
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

const ListTrips = styled.div
    `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

const TripTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    padding-bottom: 2rem;
    text-align: center;
    text-shadow: 3px 4px 5px black;
`;

