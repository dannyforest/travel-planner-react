import styled from "styled-components";
import {ListTripEntry} from "../components/ListTripEntry";
import {Box, Modal, Typography} from "@mui/material";
import {useState} from "react";

interface Trip {

    id: number;
    name: string;
    description: string;
    date: string;
    location: string;
    image: string;
    title: string;
}

const trips: Trip[] = [
    {
        id: 1,
        name: "Trip to Spain",
        description: "Click here if you plan a trip to Spain",
        date: "2023-05-01",
        location: "Trip 1 location",
        image: "Spain",
        title: "Be charmed by Spain"
    },
    {
        id: 2,
        name: "Trip to Egypt",
        description: "Click here if you plan a trip to Egypt",
        date: "2023-05-02",
        location: "Trip 2 location",
        image: "Egypte",
        title: "Be charmed by Egypt"
    },
    {
        id: 3,
        name: "Trip to Italy",
        description: "Click here if you plan a trip to Italy",
        date: "2023-05-03",
        location: "Trip 3 location",
        image: "Italy",
        title: "Be charmed by Italy"
    },
    {
        id: 4,
        name: "Trip to England",
        description: "Click here if you plan a trip to England",
        date: "2023-05-04",
        location: "Trip 4 location",
        image: "England",
        title: "Be charmed by England"
    },
    {
        id: 5,
        name: "Trip to France",
        description: "Click here if you plan a trip to France",
        date: "2023-05-05",
        location: "Trip 5 location",
        image: "France",
        title: "Be charmed by France"
    },
    {
        id: 6,
        name: "Trip to Germany",
        description: "Click here if you plan a trip to Germany",
        date: "2023-05-06",
        location: "Trip 6 location",
        image: "Germany",
        title: "Be charmed by Germany"
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

export const MainScreen = () => {
    const [open, setOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState<string>("");
    const handleOpen = (title: string) => {
        setSelectedTitle(title);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);


    return (
        <div>
            <TripTitle>My Planned Trips</TripTitle>
            <ListTrips>
                {trips.map((trip) => (
                    <ListTripEntry
                        key={trip.id}
                        id={trip.id.toString()}
                        description={trip.description}
                        handleOpenModal={() => handleOpen(trip.title)}
                        name={trip.name}
                        image={trip.image} />
                ))}
            </ListTrips>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{
                            textAlign: "center",
                            color: "black",
                            fontWeight: "bold",
                        }}
                    >
                        {selectedTitle}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
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

