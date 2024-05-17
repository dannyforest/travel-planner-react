import { DataStore } from "@aws-amplify/datastore";
import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridColDef, GridEventListener, GridRowEditStopReasons, GridRowId, GridRowModel, GridRowModes, GridRowModesModel } from "@mui/x-data-grid";
import { useTripContext } from "../contexts/TripContext";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { LazyTrip, Trip } from "../models";
import { useState } from "react";

interface TripRow {
	id: string;
	name: string | null | undefined;
	description: string | null | undefined;
	location: string | null | undefined;
	date: string | null | undefined;
	image: string | null | undefined;
	isNew?: boolean;
}

export default function TripsGrid() {
	const { trips } = useTripContext();
	const [rows, setRows] = useState<TripRow[]>([]);
	useEffect(() => {
		setRows(
			trips.map((trip) => {
				return {
					id: trip.id,
					name: trip.name,
					description: trip.description,
					date: trip.date,
					location: trip.location,
					image: trip.image,
				};
			})
		);
	}, [trips]);
	const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

	const columns: GridColDef[] = [
		{
			field: "id",
			headerName: "ID",
			width: 325,
		},
		{
			field: "name",
			headerName: "Name",
			width: 150,
			editable: true,
		},
		{
			field: "description",
			headerName: "Description",
			width: 300,
			editable: true,
		},
		{
			field: "location",
			headerName: "Location",
			width: 175,
			editable: true,
		},
		{
			field: "date",
			headerName: "Date",
			editable: true,
			width: 260,
		},
		{
			field: "image",
			headerName: "Image",
			editable: true,
			width: 160,
		},
		{
			field: "actions",
			type: "actions",
			headerName: "Actions",
			width: 100,
			cellClassName: "actions",
			getActions: ({ id }) => {
				const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

				if (isInEditMode) {
					return [
						<GridActionsCellItem
							icon={<SaveIcon />}
							label="Save"
							sx={{
								color: "primary.main",
							}}
							onClick={handleSaveClick(id)}
						/>,
						<GridActionsCellItem icon={<CancelIcon />} label="Cancel" className="textPrimary" onClick={handleCancelClick(id)} color="inherit" />,
					];
				}

				return [
					<GridActionsCellItem icon={<EditIcon />} label="Edit" className="textPrimary" onClick={handleEditClick(id)} color="inherit" />,
					<GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={handleDeleteClick(id)} color="inherit" />,
				];
			},
		},
	];

	const handleRowEditStop: GridEventListener<"rowEditStop"> = (params, event) => {
		if (params.reason === GridRowEditStopReasons.rowFocusOut) {
			event.defaultMuiPrevented = true;
		}
	};

	const handleEditClick = (id: GridRowId) => () => {
		setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
	};

	const handleSaveClick = (id: GridRowId) => () => {
		setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
		if (typeof id === "number") id = id.toString();
		async function updatePost(id: string) {
			const original = await DataStore.query(Trip, id);
			if (original) {
				const updatedPost = await DataStore.save(
					Trip.copyOf(original, (updated) => {
						updated.name = rows.find((row) => row.id === id)?.name;
						updated.description = rows.find((row) => row.id === id)?.description;
						updated.location = rows.find((row) => row.id === id)?.location;
						updated.date = rows.find((row) => row.id === id)?.date;
						updated.image = rows.find((row) => row.id === id)?.image;
					})
				)
				console.log(updatedPost);
			}
		}
		updatePost(id);
	};

	const handleDeleteClick = (id: GridRowId) => () => {
		setRows(rows.filter((row) => row.id !== id));
	};

	const handleCancelClick = (id: GridRowId) => () => {
		setRowModesModel({
			...rowModesModel,
			[id]: { mode: GridRowModes.View, ignoreModifications: true },
		});

		const editedRow = rows.find((row) => row.id === id);
		if (editedRow!.isNew) {
			setRows(rows.filter((row) => row.id !== id));
		}
	};

	const processRowUpdate = (newRow: GridRowModel) => {
		const updatedRow = { ...newRow, isNew: false } as TripRow;
		setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
		return updatedRow;
	};

	const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
		setRowModesModel(newRowModesModel);
	};

	return (
		<Box sx={{ height: 400, width: "100%" }}>
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
