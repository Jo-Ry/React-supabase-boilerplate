import { redirect } from "react-router-dom";
import { RequestProp } from "src/routes/typeHelpers";
import { supabase } from "supabase/createClient";
import { QueryViewParams } from "./constants";

export const authActions = async ({ request } : RequestProp ) => {
	const query = new URL(request.url).searchParams

	// Get value from each input in the form.
	const formData = Object.fromEntries(await request.formData());
	const email = formData.email?.toString() || '';
	const password = formData.password?.toString() || '';
	const name = formData.name?.toString() || '';

	// If user entered an authenticated route, extract last known location.
	const toLastKnownLocation = query.get('redirectTo') || "/auth?view=login"

	// Handle what is getting submitted, depending on the view.
	const view = query.get('view') as QueryViewParams;

	switch (view) {
		case 'login': {
			let { error } = await supabase.auth.signInWithPassword({
				email: email,
				password: password
			});
			if (error) return error
			return redirect(toLastKnownLocation)
		}

		case 'register': {
			let { error } = await supabase.auth.signUp({
				email: email,
				password: password,
				options: {
					data: {
						// Add more fields here, if needed
						name: name
					}
				}
			})
			if ( error ) return error
			return redirect(toLastKnownLocation)
		}

		// Work in progress.
		case 'forgotten_password': {
			let { error } = await supabase.auth.resetPasswordForEmail(email, {
				// where the gets redirected to after going through their email
				redirectTo: 'http://127.0.0.1:5173/auth?view=update_password'
			})
			if (error) throw error
			break
		}

		// Work in progress.
		case 'update_password': {
			let { error } = await supabase.auth.updateUser({
				email: email,
				password: password
			})
			if ( error ) throw error
			break;
		}

		default: {
			const _noMoreActionsLeft: never = view
			return _noMoreActionsLeft;
		}
	}
}