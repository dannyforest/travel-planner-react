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
}
const trips: Trip[] = [
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

export const MainScreen = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

	return (
		<div style={{backgroundColor: "rgb(150,150,200)"}}>
			<h1>My planned trips</h1>
			<ListTrips>
				{trips.map((trip) => (
					<ListTripEntry key={trip.id} onClick={handleOpen} {...trip} />
				))}
			</ListTrips>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
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
