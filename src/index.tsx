import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {MainScreen} from "./screens/MainScreen";
import {TripEditorScreen} from "./screens/TripEditorScreen";
import NavigationBar from "./components/NavigationBar";
import {TripProvider} from "./context/TripContext";
import styled from "styled-components";
import { Amplify } from 'aws-amplify';
import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import {UserProfileScreen} from "./screens/UserProfileSreen";
import { DataStore } from '@aws-amplify/datastore';
import {UserProfile} from "./models";
import { Hub } from 'aws-amplify/utils';
import {getCurrentUser} from "aws-amplify/auth";

Amplify.configure(awsExports);

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainScreen/>,
    },
    {
        path: "/edit",
        element: <TripEditorScreen/>,
    },
    {
        path: "/profile",
        element: <UserProfileScreen/>,
    },
]);

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    color: #ffffff;
    background-color: #0a7ecf;
    border: 0.2px black solid;
`;

const App = () => {
    useEffect(() => {
        const listener = (data: any) => {
            switch (data.payload.event) {
                case 'signUp':
                    handleUserSignUp(data.payload.data.user);
                    break;
                default:
                    break;
            }
        };

        Hub.listen('auth', listener);

        return () => {
            Hub.listen('auth', listener);
        };
    }, []);

    const handleUserSignUp = async (user: any) => {
        const [userId, setUserId] = useState<string | null>(null);

        useEffect(() => {
            getCurrentUser().then(({userId}) => {
                setUserId(userId);
            })
        }, []);

        try {
            await DataStore.save(
                new UserProfile({
                    id: userId , // Assuming the username is the user ID, adjust as needed
                    name: '', // Initialize with empty values or default values
                    email: user.attributes.email,
                    avatar: '', // Initialize with empty values or default values
                    bio: '' // Initialize with empty values or default values
                })
            );
            console.log('UserProfile created for new user:', user.username);
        } catch (error) {
            console.error('Error creating UserProfile for new user:', error);
        }
    };

    return (
        <React.StrictMode>
            <NavigationBar />
            <TripProvider>
                <Authenticator>
                    <RouterProvider router={router} />
                </Authenticator>
            </TripProvider>
            <Footer>Travel planner &copy;2024 AEC Développement d'applications Web </Footer>
        </React.StrictMode>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();