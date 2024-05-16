import {useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';

export const TripEditorScreen = () => {
    useEffect(() => {
        document.title = "Travel Planner - Editor"
    }, []);
    return (
        <div>
            TripEditorScreen
        </div>
    )
}