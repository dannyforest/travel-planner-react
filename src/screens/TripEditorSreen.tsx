import {useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';
import {useTripContext} from "../context/TripContext";
import TripsGrid from "../components/TripsGrid";


export const TripEditorSreen = ()=>{
    const {trips}=useTripContext()
    console.log(trips)
    useEffect(() => {
        document.title = "Travel Planner - Editor";
    }, []);
    return(
        <div>
            <h1>TripEditorSreen</h1>
            <TripsGrid/>
        </div>
    )
}