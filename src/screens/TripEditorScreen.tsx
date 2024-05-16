import { useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';

export const TripEditorScreen = () => {
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