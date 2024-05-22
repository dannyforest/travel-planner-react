import {Box, Modal, Typography} from "@mui/material";
import styled from "styled-components";
import {ListTripEntry} from "../components/ListTripEntry";
import React, {useEffect, useState} from "react";
import {UserTrip} from "../models";
import {DataStore} from "@aws-amplify/datastore";
import {Amplify} from "aws-amplify";
import {useTripContext} from "../context/TripContext";
import ReactPlayer from "react-player";
import { getCurrentUser } from 'aws-amplify/auth';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

async function currentAuthenticatedUser() {
    try {
        const { username, userId, signInDetails } = await getCurrentUser();
        console.log(`The username: ${username}`);
        console.log(`The userId: ${userId}`);
        console.log(`The signInDetails: ${signInDetails}`);
    } catch (err) {
        console.log(err);
    }
}
export const MainScreen = () => {
    const {trips} = useTripContext();
    const [open, setOpen] = useState(false);
    const [selectedTrip, setSelectedTrip] = useState<UserTrip | null>(null);
    const [video, setVideo] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        getCurrentUser().then(({userId}) => {
            setUserId(userId);
        })
    }, []);

    const handleOpen = (trip: UserTrip) => {
        setOpen(true);
        setSelectedTrip(trip)
        setVideo(trip.video ?? null);
    }
    const handleClose = () =>{
        setOpen(false);
        setSelectedTrip(null);
        setVideo(null)
}
    return (
        <div>
            <h1>My Planned Trips</h1>
            {
                userId && <p>User ID: {userId}</p>
            }
            <ListTrips>
                {trips.map((trip: UserTrip) => (
                    <ListTripEntry key={trip.id}
                                   name={trip.name}
                                   description={trip.description}
                                   image={trip.image}
                                   id={trip.id.toString()}
                                   handleOpenModal={() => handleOpen(trip)}/>
                ))} </ListTrips>
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
                    {video && (

                        <ReactPlayer url={video} />
                    )}
                </Box>
            </Modal>
        </div>
    )
}

const ListTrips = styled.div`
    dispay: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`