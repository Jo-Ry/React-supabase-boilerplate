import { redirect } from "react-router-dom"
import { supabase } from "supabase/createClient"

/**
 * The user must be authenticated before allowing access to
 * certain routes otherwise get redirect back to the login page.
 */
const requireAuthRoute = async ( request : Request ) => {
	// Save last known location.
	const pathname = new URL(request.url).pathname

	// Is user authenticated?
	const { data: { session } } = await supabase.auth.getSession()

	// Redirect user if not authenticated to login page.
	if (!session) {
		throw redirect(`/auth?view=login&redirectTo=${pathname}`)
	}

	// Pass along session to loader
	return session
}

export default requireAuthRoute
