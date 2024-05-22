// src/index.tsx
import React from 'react';
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
import Footer from "./components/Footer";
import {TripProvider} from "./context/TripContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainScreen/>,
    },
    {
        path: "/edit",
        element: <TripEditorScreen/>,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <div id="app-container">
            <NavigationBar/>
            <TripProvider>
                <main>
                    <RouterProvider router={router}/>
                </main>
            </TripProvider>
        </div>
        <Footer />
    </React.StrictMode>
);

reportWebVitals();
