// CustomSignUp.tsx
import React, { useState } from 'react';
import {TextField} from "@mui/material";
import {DataStore} from "@aws-amplify/datastore";
import {UserProfile} from "../models";
import {fetchUserAttributes, getCurrentUser} from "aws-amplify/auth"; // Adjust the import path as necessary
import styled from "styled-components";
import {useAuthenticator, View} from "@aws-amplify/ui-react";
import Button from "@mui/material/Button";

const textFiledStyle = {
    marginBottom: '1rem',
    fontWeight: 'bold',
    fontSize: '1rem',
};

async function onCreate() {
    const currentUser = await getCurrentUser();
    const userAttributes = await fetchUserAttributes();
    await DataStore.save(
        new UserProfile({
            userId: currentUser.userId,
            email: userAttributes.email,
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: {
                street: '',
                city: '',
                stateProvince: '',
                country: '',
            },
            avatar: '',
            bio: '',
        })
    );
}

const CustomSignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const signUp  = useAuthenticator((context) => [context.toSignUp]);

    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await signUp.toSignUp({ username: email, password, attributes: { email } });

            // Call the onCreate function to save user profile
            await onCreate();

            console.log('User signed up and profile created');
        } catch (error) {
            console.error('Error during sign-up:', error);
        }
    };

    return (
        <View as="form" onSubmit={handleSignUp}>
            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {/*<Button type="submit" title="Sing Up">
                Sign Up
            </Button>*/}
        </View>
    );
};

export default CustomSignUp;