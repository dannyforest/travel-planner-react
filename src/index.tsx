import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavigationBar from "./components/NavigationBar";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import {MainScreen} from "./screens/MainScreen";
import {TripEditorScreen} from "./screens/TripEditorScreen";
import {ProfileScreen} from "./screens/ProfileScreen";
import {AccountScreen} from "./screens/AccountScreen";
import {DashboardScreen} from "./screens/DashboardScreen";

import {TripProvider} from "./context/TripContext";

import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from "./amplifyconfiguration.json";
import {Amplify} from "aws-amplify";

Amplify.configure(awsconfig);

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
        element: <ProfileScreen/>,
    },
    {
        path: "/account",
        element: <AccountScreen/>,
    },
    {
        path: "/dashboard",
        element: <DashboardScreen/>,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <NavigationBar/>
        <TripProvider>
            <Authenticator>
                <RouterProvider router={router}/>
            </Authenticator>
        </TripProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
