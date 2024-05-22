import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import awsconfig from "../src/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { MainScreen } from "./screens/MainScreen";
import reportWebVitals from "./reportWebVitals";
import NavigationBar from "./components/NavigationBar";
import { TripEditorScreen } from "./screens/TripEditorScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TripProvider } from "./contexts/TripContext";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

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
	},
]);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<Authenticator>
			<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
				<NavigationBar />
				<TripProvider>
					<RouterProvider router={router} />
				</TripProvider>
				<div style={{ backgroundColor: "black", padding: "20px", color: "white", fontFamily: "monospace" }}>This is a footer</div>
			</div>
		</Authenticator>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
