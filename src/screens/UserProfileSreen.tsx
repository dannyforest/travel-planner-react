import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { fetchUserAttributes } from 'aws-amplify/auth';
import { getCurrentUser } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth';
import {AuthUser} from "aws-amplify/auth";
import {Amplify} from "aws-amplify";
import awsExports from '../aws-exports';
import {UserProfile} from "../models";
import {DataStore} from "@aws-amplify/datastore";
Amplify.configure(awsExports)

/*async function onCreate() {
    await DataStore.save(
        new UserProfile({
            userId: (await getCurrentUser()).userId,
            email: (await fetchUserAttributes()).email,
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address:{
                street: '',
                city: '',
                stateProvince: '',
                country: '',
            },
            avatar: '',
            bio: '',
        })
    )
}

/*async function handleFetchUserAttributes() {
    try {
        const userAttributes = await fetchUserAttributes();
        const email = userAttributes.email;
        console.log(userAttributes);
        console.log(email);
        return email;
    } catch (error) {
        console.log(error);

    }
}*/


const TextStyleH1 = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    padding-bottom: 2rem;
    text-align: center;
    text-shadow: 3px 4px 5px black;
`;

export const UserProfileScreen: React.FC = () => {
    //currentAuthenticatedUser()
    //fetchUserAttributes()
    //urrentSession()


    /*const [email, setEmail] = useState<string>('');
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        getCurrentUser().then(({userId}) => {
            setUserId(userId);
        })
    }, []);
    useEffect(() => {
        async function fetchData() {
            const email = await handleFetchUserAttributes();
            if (email) {
                setEmail(email);
            }
        }
        fetchData();
    }, []);*/
    return (
        <div>
            <TextStyleH1>User Profile</TextStyleH1>
            {/*<>
                <p>Email: {email}</p>
                <p>UserId: {userId}</p>
                <button onClick={onCreate}>Create User Profile</button>
            </>*/}
        </div>
    );
};