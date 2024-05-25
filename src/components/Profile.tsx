import * as React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {getCurrentUser} from "aws-amplify/auth";
import {DataStore} from "@aws-amplify/datastore";
import {UserProfile} from "../models";


interface Profile {
    id?: string;
    name?: string;
    email?: string;
    avatar?: string;
    bio?: string;
}



export function Profile(props: Profile) {
    const [userId, setUserId] = useState<string | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    useEffect(() => {
        getCurrentUser().then(({userId}) => {
            setUserId(userId);
        })
    }, []);

    return (
        <div>
            {
                userId && <p>ID: {userId}</p>
            }
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Bio: {props.bio}</p>
            <p>Avatar: {props.avatar}</p>
        </div>

    );
};

