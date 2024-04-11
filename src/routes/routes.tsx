import { RouteObject, createBrowserRouter } from "react-router-dom";
import { dashboardLoader } from "src/pages/dashboard/dashboardLoader";
import { sessionLoader } from "src/pages/authentication/loader";
import Dashboard from "src/pages/dashboard";
import ErrorBoundary from "./ErrorBoundary";
import RootLayout from "src/layout/root";
import Index from "src/pages/index";
import Authentication from "src/pages/authentication";
import { authActions } from "src/pages/authentication/action";

const publicRoutes: RouteObject[] = ([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorBoundary/>,
		children: [
			{
				path: "/",
				element: <Index />
			},
			{
				path: "auth",
				element: <Authentication />,
				loader: sessionLoader,
				action: authActions
			},
		]
	}
])

const protectedRoutes: RouteObject[] = ([
	{
		path: "dashboard",
		element: <RootLayout/>,
		errorElement: <ErrorBoundary/>,
		children: [
			{
				path: "",
				element: <Dashboard/>,
				loader: dashboardLoader
			},
		]
	},
])

const routes = [...publicRoutes, ...protectedRoutes]

const router = createBrowserRouter(routes, {
	future: {
		// Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase.
		// This also future profs the project for version 7.
		v7_normalizeFormMethod: true,
	},
});

export default router