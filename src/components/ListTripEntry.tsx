interface ListTripEntryProps {
	name: string,
	date: string,
	location: string,
	description: string,
	image: string,
	onClick: () => void;
}

export const ListTripEntry = (props: ListTripEntryProps) => {
	return (
		<div style={{backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center", border: "4px solid black"}}>
			<h2>{props.name}</h2>
			<p>{props.date}</p>
			<p>{props.location}</p>
			<p>{props.description}</p>
			<img src={props.image!} alt={props.name!} />
		</div>
	)
};