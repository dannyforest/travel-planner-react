import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import awsconfig from '../src/amplifyconfiguration.json'
import { Amplify } from "aws-amplify";
import { MainScreen } from './screens/MainScreen';
import reportWebVitals from './reportWebVitals';
import NavigationBar from "./components/NavigationBar";
import { TripEditorScreen } from './screens/TripEditorScreen';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {TripProvider} from "./contexts/TripContext";
Amplify.configure(awsconfig);
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainScreen />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/edit",
    element: <TripEditorScreen />,
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <NavigationBar/>
        <TripProvider>
            <RouterProvider router={router}/>
        </TripProvider>
      <div>Footer</div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
