import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MainScreen } from './screens/MainScreen';
import reportWebVitals from './reportWebVitals';
import NavigationBar from "./components/NavigationBar";
import { TripEditorScreen } from './screens/TripEditorScreen';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
      <NavigationBar />
    <RouterProvider router={router} />
      <div>Footer</div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
