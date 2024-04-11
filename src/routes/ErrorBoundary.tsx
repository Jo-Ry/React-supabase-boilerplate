import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

/**
 * This component is a React error boundary that catches errors that occur during
 * rendering of the component tree and displays an appropriate error message to the user.
 *
 * It handles different types of errors, such as 404 errors
 * and server errors, and displays a different error message for each case.
 */
const ErrorBoundary = () => {
	const error = useRouteError();

	const RouteErrorResponse = () => {

		// Url missmatch
		if (isRouteErrorResponse(error) && error.status === 404) {
			return (
				<>
					<h1 className="h1">Oooops</h1>
					<h2 className="h3">It seems that you have visited the wrong page</h2>
					<Link className="button" to="/">Go home</Link>
					<span>Status: {error.statusText}</span>
				</>
			)
		}

		// Handles all cases concerning errors from server!
		if (isRouteErrorResponse(error) && error.status >= 500) {
			return (
				<>
					<h1 className="h1">Oooops</h1>
					<h2 className="h3">The page has some issues to fix, come back later</h2>
					<span>Status: {error.statusText}</span>
				</>
			)
		}

		// Fallback if none of the 2 conditions return true.
		return (
			<>
				<h1 className="h1">Oooops</h1>
				<h2 className="h3">Something went wrong when trying to load the page</h2>
				<Link className="button" to="/">Go home</Link>
				<span>Status: Unkown</span>
			</>
		)
	}

	return (
		<main>
			<section className="error-boundary">
				<RouteErrorResponse/>
			</section>
		</main>
	)
}

export default ErrorBoundary
