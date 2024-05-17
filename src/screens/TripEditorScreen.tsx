import { useEffect } from "react";
import TripsGrid from "../components/TripsGrid";

export const TripEditorScreen = () => {
    // Set the document title when component mounts
    useEffect(() => {
        document.title = "Travel Planner - Editor";
    }, []);

	return (
        <div>
            <TripsGrid />
        </div>
    )
}