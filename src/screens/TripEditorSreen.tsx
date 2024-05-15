import {useEffect} from "react";

export const TripEditorSreen = ()=>{
    useEffect(() => {
        document.title = "Travel Planner - Editor";
    }, []);
    return(
        <div>
            TripEditorSreen
        </div>
    )
}