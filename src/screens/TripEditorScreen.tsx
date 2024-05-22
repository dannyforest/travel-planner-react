import {useEffect} from "react";
import {DataGrid} from '@mui/x-data-grid';
import {useTripContext} from "../context/TripContext";
import TripsGrid from "../components/TripsGrid";
import styled from "styled-components";

export const TripEditorScreen = () => {
    // Set the document title when component mounts
    useEffect(() => {
        document.title = "Travel Planner - Editor";
    }, []);

    return (
        <div>
            <StyledTitle>
                TripEditorScreen
            </StyledTitle>
            <TripsGrid/>
        </div>
    )
}

const StyledTitle = styled.h1`
    margin-left: 25px;
`;