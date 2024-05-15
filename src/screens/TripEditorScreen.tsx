import {useEffect} from "react";

export const TripEditorScreen = () => {
	// Set the document title when component mounts
	useEffect(() => {
		document.title = "Travel Planner - Editor";
	}, []);
	return (
		<div>
			TripEditorScreen
		</div>)
}