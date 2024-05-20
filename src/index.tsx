import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
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


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <NavigationBar/>
        <TripProvider>
            <RouterProvider router={router}/>
        </TripProvider>
        <Footer>Travel planner &copy;2024 AEC Développement d'applications Web </Footer>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();