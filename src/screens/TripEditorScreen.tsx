import {useEffect} from "react";
import {DataGrid} from '@mui/x-data-grid';
import {useTripContext} from "../context/TripContext";

export const TripEditorScreen = () => {
    const {trips} = useTripContext();
    console.log(trips);
    // Set the document title when component mounts
    useEffect(() => {
        document.title = "Travel Planner - Editor";
    }, []);

    return (
        <div>
            TripEditorScreen
        </div>
    )
}