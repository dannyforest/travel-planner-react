import styled from "styled-components";
import {ListTripEntry} from "../components/ListTripEntry";
import {Box, Modal, Typography} from "@mui/material";
import {DataStore} from '@aws-amplify/datastore';
import config from '../amplifyconfiguration.json';
import {useState,useEffect} from "react";
import {Amplify} from 'aws-amplify';
import {UserTrip} from "../models";


Amplify.configure(config);


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
    const [selectedTrip, setSelectedTrip] = useState <UserTrip >()
    const [trips, setTrips] = useState<UserTrip[] >([]);
    useEffect(() => {
        const loadTrips = async () => {
            try {
                const trips = await DataStore.query(UserTrip);
                setTrips(trips);
            } catch (error) {
                console.log('Error retrieving trips', error);
            }
        };

        loadTrips();
    }, []);
    const handleOpen = (trip:UserTrip) => {
        setSelectedTrip(trip);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    // @ts-ignore
    return(
       <div>
          <h1>
              My planned Trips
          </h1>
           <ListTrips>
               {trips.map((trip:UserTrip)=>(
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
