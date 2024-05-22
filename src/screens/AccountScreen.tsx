import {useEffect} from "react";

export const AccountScreen = () => {
    useEffect(() => {
        document.title = "Travel Planner - Account";
    }, []);

    return (
        <div>Account Screen</div>
    )
}