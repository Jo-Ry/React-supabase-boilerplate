import Button from "src/components/inputs/Button";
import Input from "src/components/inputs/Input"

/**
 * @param view wich view to display on as it correlates to the query param -> view.
 * @returns form content.
 */
const ResetPasswordForm = ( { view } : { view: boolean } ) => {
	if ( view === false ) return null;

	return (
		<>
			<Input
				label='Email adress'
				required
				type="email"
				name='email'
				className="text-input"
				placeholder="Your email adress"
			/>
			<Button
				type="submit"
				title="Send reset password instructions"
			/>
		</>
	)
}

export default ResetPasswordForm
