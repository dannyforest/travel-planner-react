import {useEffect} from "react";

export const DashboardScreen = () => {
    useEffect(() => {
        document.title = "Travel Planner - Dashboard";
    }, []);

    return (
        <div>Dashboard Screen</div>
    )
}