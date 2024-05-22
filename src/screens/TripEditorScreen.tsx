// src/screens/TripEditorScreen.tsx
import { useEffect } from "react";
import TripsGrid from "../components/TripsGrid";

export const TripEditorScreen = () => {
    // Set the document title when the component mounts
    useEffect(() => {
        document.title = "Travel Planner - Editor";
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <h1>TripEditorScreen</h1>
            <TripsGrid />
        </div>
    );
}
