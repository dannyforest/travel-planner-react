// src/context/TripContext.tsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { Trip } from '../models'; // Assuming you have a type definition for UserTrip
import { DataStore } from '@aws-amplify/datastore'; // Assuming you're using AWS Amplify
import { UserTrip } from '../screens/MainScreen'; // Assuming you have a type definition for UserTrip
interface TripContextType {
    trips: UserTrip[];
    loadTrips: () => Promise<void>;
}

const TripContext = createContext<TripContextType | undefined>(undefined);

export const useTripContext = () => {
    const context = useContext(TripContext);
    if (context === undefined) {
        throw new Error('useTripContext must be used within a TripProvider');
    }
    return context;
};

interface TripProviderProps {
    children: React.ReactNode;
}

export const TripProvider: React.FC<TripProviderProps> = ({ children }) => {
    const [trips, setTrips] = useState<UserTrip[]>([]);

    const loadTrips = async () => {
		 const userTrips = await DataStore.query(Trip);
        setTrips(userTrips.map((trip) => {
			return {
			id: trip.id,
			name: trip.name,
			description: trip.description,
			date: trip.date,
			location: trip.location,
			image: trip.image
			} as UserTrip
		}));
    };

    useEffect(() => {
        loadTrips();
    }, []);

    return (
        <TripContext.Provider value={{ trips, loadTrips }}>
            {children}
        </TripContext.Provider>
    );
};

// useEffect(() => {
// 	const fetchTrips = async () => {
// 		try {
// 			const trips = await DataStore.query(Trip);
// 			console.log(trips);
// 			return trips.map((trip) => {
// 				return {
// 				id: trip.id,
// 				name: trip.name,
// 				description: trip.description,
// 				date: trip.date,
// 				location: trip.location,
// 				image: trip.image
// 				} as UserTrip
// 			});
// 		} catch (error) {
// 			console.error("Error fetching trips", error);
// 		}
// 	}
// 	fetchTrips().then(trips => {
// 		if (!trips) return;
// 		setTrips(trips);
//   }).catch(error => {
// 		console.error("Error fetching trips", error);
//   });
// }, []);
