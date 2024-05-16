import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {useTripContext} from "../context/TripContext";



const columns: GridColDef[]= [
    {
        field: 'id',
        headerName: 'ID',
        width: 100,
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 300,
        editable: true,
    },
    {
        field: 'location',
        headerName: 'Location',
        width: 150,
        editable: true,
    },
    {
        field: 'date',
        headerName: 'Date',
        editable: true,
        width: 160
    },
    {
        field: 'image',
        headerName: 'Image',
        editable: true,
        width: 160
    },
    {
        field: 'title',
        headerName: 'Title',
        editable: true,
        width: 160
    },
    {
        field: 'tooltipText',
        headerName: 'TooltipText',
        editable: true,
        width: 160
    },
];

export default function TripsGrid() {
    const {trips} = useTripContext();

    const rows = trips.map(trip => ({
        id: trip.id,
        name: trip.name,
        description: trip.description,
        location: trip.location,
        date: trip.date,
        image: trip.image,
        title: trip.title,
        tooltipText: trip.tooltipText
    }));
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}