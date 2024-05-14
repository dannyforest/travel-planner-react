import styled from "styled-components";
import { ListTripEntry } from "../components/ListTripEntry";

interface Trip {
	id: number;
	name: string;
	description: string;
	date: string;
	location: string;
	image: string;
}
const trips: Trip[] = [
	{
		id: 1,
		name: "Trip 1",
		description: "Trip 1 description",
		date: "2023-05-01",
		location: "Trip 1 location",
		image: "https://www.protegez-vous.ca/var/protegez_vous/storage/images/_aliases/social_network_image/8/3/4/7/4707438-2-fre-CA/assurance-voyage.jpg",
	},
	{
		id: 2,
		name: "Trip 2",
		description: "Trip 2 description",
		date: "2023-05-02",
		location: "Trip 2 location",
		image: "https://media2.ledevoir.com/images_galerie/nwd_994251_803964/image.jpg",
	},
];

export const MainScreen = () => {
	return (
		<>
			<h1>My planned trips</h1>
			<ListTrips>
				{trips.map((trip) => (
					<ListTripEntry key={trip.id} {...trip} />
				))}
			</ListTrips>
		</>
	);
};

const ListTrips = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
