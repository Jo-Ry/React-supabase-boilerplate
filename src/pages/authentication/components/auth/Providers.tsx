import { Form } from "react-router-dom"
import { Provider } from "@supabase/supabase-js"
import { supabase } from "supabase/createClient"
import { SocialLayout } from "../../validation"
import Button from "src/components/inputs/Button"

export type AcceptedProviders = Extract<
	// Supported third party providers from supabase
	Provider,
	// Providers you can use
	'google' | 'github' | 'apple' | 'facebook'
>

type OAuthProps = {
	thirdParty?: AcceptedProviders[]
	direction: SocialLayout
	view: boolean
}

/**
 * @param thirdParty is an array of strings that represent the third-party
 * authentication providers that are supported by the application.
 * @param direction display the buttons in a vertical or horizontal layout,
 * if direction is 'horizontal' then only icon will show.
 * @param view wich view to display on as it correlates to the query param -> view.
 * @renders respektive ProviderButton component for each third-party
 * authentication provider provided in the array.
 */
const OAuth = ( { thirdParty, direction, view } : OAuthProps ) => {
	if ( thirdParty === undefined || thirdParty.length === 0 || view === false ) return null

	const providers = [...thirdParty]

	/**
	 * This function checks if the vendor prop is included in the providers array,
	 * which is a copy of the provider array that was created earlier.
	 *
	 * If the vendor prop is included, the component returns a Button component that
	 * represents a sign-in button for the third-party authentication provider
	 * specified by the vendor prop.
	 *
	 * The onClick event handler for the button calls the thirdPartyLogin function,
	 * which uses the Supabase authentication API to initiate a sign-in flow
	 * with the specified third-party provider.
	 */
	const ProviderButton = ( { vendor } : { vendor: AcceptedProviders } ) => {

		const thirdPartyLogin = async () => {
			let { data, error } = await supabase.auth.signInWithOAuth({
				provider: vendor
			})
			if (error) throw error
			return data
		}

		const VerticalProviderButton = () => {
			if ( providers.includes(vendor) && direction === 'vertical' ) {
				return (
					<Button
						type="button"
						className='has-icon left-side'
						title={`Sign in with ${vendor}`}
						icon={`/src/assets/icons/OAuth/${vendor}.svg`}
						alt={`Icon representing ${vendor} login`}
						onClick={thirdPartyLogin}
					/>
				)
			}
		}

		const HorizontalProviderButton = () => {
			if ( providers.includes(vendor) && direction === 'horizontal' ) {
				return (
					<Button
						type="button"
						icon={`/src/assets/icons/OAuth/${vendor}.svg`}
						alt={`Icon representing ${vendor} login`}
						onClick={thirdPartyLogin}
					/>
				)
			}
		}

		return (
			<>
				<VerticalProviderButton />
				<HorizontalProviderButton />
			</>
		)
	}

	return (
		<Form className={`OAuth ${direction || 'vertical'}`} aria-label="Third party user authentication providers">
			{ providers.map(thirdParty => (
				<ProviderButton key={thirdParty} vendor={thirdParty} />
			))}
		</Form>
	)
}

export default OAuth


