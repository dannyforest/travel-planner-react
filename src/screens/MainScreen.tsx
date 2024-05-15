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

const trips = [
    {
        id: 1,
        name: "Trip to Spain",
        description: "Trip 1 description",
        date: "2023-05-01",
        location: "Trip 1 location",
        image: "espagne"
    },
    {
        id: 2,
        name: "Trip to Japan",
        description: "Trip 2 description",
        date: "2023-05-02",
        location: "Trip 2 location",
        image: "japan"
    },
    {
        id: 2,
        name: "Trip to Paris",
        description: "Trip 3 description",
        date: "2023-05-04",
        location: "Trip 3 location",
        image: "paris"
    },
    {
        id: 2,
        name: "Trip to Greece",
        description: "Trip 4 description",
        date: "2023-05-05",
        location: "Trip 4 location",
        image: "greece"
    }]
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

export const MainScreen = ()=>{
    const [open, setOpen] = useState(false);
    const [selectedTrip, setSelectedTrip] = useState <Trip|null>(null)
    const handleOpen = (trip:Trip) => {
        setSelectedTrip(trip);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    return(
       <div>
          <h1>
              My planned Trips
          </h1>
           <ListTrips>
               {trips.map((trip:Trip)=>(
                   <ListTripEntry
                       key={trip.id}
                       name={trip.name}
                       description={trip.description}
                       id={trip.id.toString()}
                       image={trip.image}
                       handleOpen={()=>handleOpen(trip)}
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
                       {selectedTrip?.name}
                   </Typography>
                   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
    margin:30px;
`
