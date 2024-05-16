import React, { createContext, useState, useEffect } from 'react';
import { UserTrip } from '../models';
import { DataStore } from '@aws-amplify/datastore';

interface TripContextType {
    trips: UserTrip[];
    loadTrips: () => Promise<void>;
}

export const TripContext = createContext<TripContextType>({
    trips: [],
    loadTrips: async () => {},
});

interface Props {
    children: React.ReactNode;
}

export const TripProvider: React.FC<Props> = ({ children }: Props) => {
    const [trips, setTrips] = useState<UserTrip[]>([]);

    const loadTrips = async () => {
        const userTrips = await DataStore.query(UserTrip);
        setTrips(userTrips);
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