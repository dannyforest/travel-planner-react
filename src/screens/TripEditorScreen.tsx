import {useEffect} from "react";

export const TripEditorScreen = () => {
    useEffect(() => {
        document.title = "Tavel Planner - Edittor";
    }, []);
    return (
        <div>
            TripEditorScreen
        </div>
    )
}