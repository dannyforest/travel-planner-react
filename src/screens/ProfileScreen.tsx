// src/screens/ProfileScreen.tsx
import React, { useState, useEffect } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { TextField, Button, Container } from '@mui/material';
import '@aws-amplify/ui-react/styles.css';

interface UserAttributes {
    email?: string;
    given_name?: string;
    family_name?: string;
    birthdate?: string;
    address?: string;
}

interface User {
    username: string;
    attributes: UserAttributes;
}

const ProfileScreen = () => {
    const { user } = useAuthenticator((context) => [context.user]) as unknown as { user: User };
    const [formData, setFormData] = useState<UserAttributes>({
        email: '',
        given_name: '',
        family_name: '',
        birthdate: '',
        address: ''
    });

    useEffect(() => {
        if (user && user.attributes) {
            setFormData(user.attributes);
        }
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            const result = await Auth.updateUserAttributes(currentUser, formData);
            console.log(result); // SUCCESS
            alert('Profile updated successfully');
        } catch (err) {
            console.error('Error updating profile:', err);
            alert('Error updating profile');
        }
    };

    return (
        <Container>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="First Name"
                    name="given_name"
                    value={formData.given_name || ''}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Last Name"
                    name="family_name"
                    value={formData.family_name || ''}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Birthdate"
                    name="birthdate"
                    value={formData.birthdate || ''}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Address"
                    name="address"
                    value={formData.address || ''}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Update Profile
                </Button>
            </form>
        </Container>
    );
};

export default ProfileScreen;
