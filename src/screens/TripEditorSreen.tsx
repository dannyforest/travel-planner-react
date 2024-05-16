import {useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';
import {useTripContext} from "../context/TripContext";


export const TripEditorSreen = ()=>{
    const {trips}=useTripContext()
    console.log(trips)
    useEffect(() => {
        document.title = "Travel Planner - Editor";
    }, []);
    return(
        <div>
            TripEditorSreen
        </div>
    )
}