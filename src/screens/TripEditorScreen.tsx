import {useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';
import {useTripContext} from "../context/TripContext";
import TripsGrid from "../components/TripsGrid";
import styled from "styled-components";

export const TripEditorScreen = () => {
    useEffect(() => {
        document.title = "Travel Planner - Editor"
    }, []);
    return (
        <div>
            <TextStlyleH1>
                TripEditorScreen
            </TextStlyleH1>
            <TripsGrid />
        </div>
    )
}

const TextStlyleH1 = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    padding-bottom: 2rem;
    text-align: center;
    text-shadow: 3px 4px 5px black;
`;