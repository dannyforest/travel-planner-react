import styled from "styled-components";
import {ListTripEntry} from "../components/ListTripEntry";
import {Box, Modal, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import { Trip } from "../models";
import { DataStore } from "@aws-amplify/datastore";
interface UserTrip {
	id: number;
	name: string;
	description: string;
	date: string;
	location: string;
	image: string;
}
const trips: UserTrip[] = [
	{
		id: 1,
		name: "Trip 1",
		description: "Trip 1 description",
		date: "2023-05-01",
		location: "Trip 1 location",
		image: "https://www.protegez-vous.ca/var/protegez_vous/storage/images/_aliases/social_network_image/8/3/4/7/4707438-2-fre-CA/assurance-voyage.jpg",
	},
	{
		id: 2,
		name: "Trip 2",
		description: "Trip 2 description",
		date: "2023-05-02",
		location: "Trip 2 location",
		image: "https://media2.ledevoir.com/images_galerie/nwd_994251_803964/image.jpg",
	},
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
    const [selectedTrip, setSelectedTrip] = useState<UserTrip | null>(null);
	useEffect(() => {
		try {
			DataStore.query(Trip).then((res) => {
				console.log(res);
			});
		} catch (error) {
			console.error("Error fetching trips", error);
		}
	});
    const handleOpen = (trip: UserTrip) => {
        setSelectedTrip(trip);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

	return (
		<div style={{backgroundColor: "rgb(150,150,200)"}}>
			<h1>My planned trips</h1>
			<ListTrips>
				{trips.map((trip) => (
					<ListTripEntry key={trip.id} onClick={()=>handleOpen(trip)} {...trip} />
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
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {selectedTrip?.description}
                    </Typography>
                </Box>
            </Modal>
		</div>
	);
};

const ListTrips = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
