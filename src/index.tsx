// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { MainScreen } from "./screens/MainScreen";
import { TripEditorScreen } from "./screens/TripEditorScreen";
import ProfileScreen from "./screens/ProfileScreen";  // Import ProfileScreen
import NavigationBar from "./components/NavigationBar";
import { TripProvider } from "./context/TripContext";

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from "./amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
Amplify.configure(awsconfig);

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainScreen />,
    },
    {
        path: "/edit",
        element: <TripEditorScreen />,
    },
    {
        path: "/profile",  // Add the new profile route
        element: <ProfileScreen />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <NavigationBar />
        <TripProvider>
            <Authenticator>
                <RouterProvider router={router} />
            </Authenticator>
        </TripProvider>
        <div>Footer</div>
    </React.StrictMode>
);

reportWebVitals();


