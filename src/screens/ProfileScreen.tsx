import {useEffect} from "react";

export const ProfileScreen = () => {
    useEffect(() => {
        document.title = "Travel Planner - Profile";
    }, []);
    
    return (
        <div>Profile Screen</div>
    )
}