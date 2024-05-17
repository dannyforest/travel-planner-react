import {useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';
import {useTripContext} from "../context/TripContext";
import TripsGrid from "../components/TripsGrid";

export const TripEditorScreen = () => {

    useEffect(() => {
        document.title = "Tavel Planner - Edittor";
    }, []);
    return (
        <div>
            <h1>TripEditorScreen</h1>
            <TripsGrid />
        </div>
    )
}