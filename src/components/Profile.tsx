import * as React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {getCurrentUser} from "aws-amplify/auth";
import {DataStore} from "@aws-amplify/datastore";
import {UserProfile} from "../models";


interface ProfilePops {
    name?: string;
    email?: string;
    avatar?: string;
    bio?: string;
}


export const Profile: React.FC<ProfilePops> = (props) => {
    const [userId, setUserId] = useState<string | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    useEffect(() => {
        getCurrentUser().then(({ userId }) => {
            setUserId(userId);
            // Fetch user profile from DataStore
            fetchUserProfile(userId);
        });
    }, []);

    const fetchUserProfile = async (userId: string) => {
        if (!userId) return;

        const original = await DataStore.query(UserProfile, userId);

        if (original) {
            const updatedUserProfile = await DataStore.save(
                UserProfile.copyOf(original, (updated) => {
                    updated.name = props?.name || '';
                    updated.email = props?.email || '';
                    updated.avatar = props?.avatar || '';
                    updated.bio = props?.bio || '';
                })
            );
            setUserProfile(updatedUserProfile);
        }
    };

    return (
        <div>
            {userId && <p>ID: {userId}</p>}
            <p>Name: {userProfile?.name}</p>
            <p>Email: {userProfile?.email}</p>
            <p>Bio: {userProfile?.bio}</p>
            <p>Avatar: {userProfile?.avatar}</p>
        </div>
    );
};

