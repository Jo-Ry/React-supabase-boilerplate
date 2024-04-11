import { ReactNode, createContext, useEffect, useState } from 'react'
import { supabase } from 'supabase/createClient'
import { Session } from '@supabase/supabase-js'

export type ClientAuthContextProps = {
	session: Session | null
	signout: () => Promise<void>
}
type ClientAuthProviderProps = { children: ReactNode }

export const ClientAuthContext = createContext<ClientAuthContextProps>({
	session: null,
	signout: () => Promise.resolve(),
});

/**
 * @warning use only when you now that the component has been mounted
 * otherwise use the loader with react-douter-dom to handle session state.
 * @returns a provider with the global auth object and the ability to signout
 * and reset the password.
*/
const ClientAuthProvider = ({ children } : ClientAuthProviderProps) => {
	const [session, setSession] = useState<Session | null>(null)

	useEffect(() => {
		(async () => {
			const { data } = await supabase.auth.getSession()
			setSession(data.session);
		})()

		/**
		 * This hook sets up an event listener using the onAuthStateChange method
		 * from the Supabase authentication service. It then listens for changes in
		 * the user's authentication state, such as when they sign in, sign out or
		 * updating the user
		 */
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				setSession(session);

				if (event === "SIGNED_OUT") {
					window.location.reload()
				}
			}
		)

		return () => {
			authListener.subscription.unsubscribe();
		}
	}, [])

	const signout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) throw error;
	}

	return <ClientAuthContext.Provider value={{session, signout}}>{children}</ClientAuthContext.Provider>
}

export default ClientAuthProvider