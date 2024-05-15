import {useEffect} from "react";

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