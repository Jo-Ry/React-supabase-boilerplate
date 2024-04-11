import Input from "src/components/inputs/Input"
import FormTitle from "../components/Title"
import Button from "src/components/inputs/Button";

/**
 * @param view wich view to display on as it correlates to the query param -> view.
 * @returns form content.
 */
const UpdatePasswordForm = ( { view } : { view: boolean } ) => {
	if ( view === false ) return null;

	return (
		<>
			<FormTitle text="Update your email or password"/>
			<Input
				label='Email adress'
				type="email"
				name='email'
				className="text-input"
				placeholder="Your new email adress"
			/>
			<Input
				label='Password'
				name='password'
				className="text-input"
				placeholder="Your new password"
			/>
			<Button type="submit" title="Update"/>
		</>
	)
}

export default UpdatePasswordForm