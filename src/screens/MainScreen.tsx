import styled from "styled-components";
import {ListTripEntry} from "../components/ListTripEntry";
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
        image: "espagne"
    },
    {
        id: 2,
        name: "Trip 2",
        description: "Trip 2 description",
        date: "2023-05-02",
        location: "Trip 2 location",
        image: "japan"
    }
]

export const MainScreen = ()=>{

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
                       id={trip.id.toString()}
                       image={trip.image}
                   />
               ))}
           </ListTrips>
       </div>
)
}
const ListTrips = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`