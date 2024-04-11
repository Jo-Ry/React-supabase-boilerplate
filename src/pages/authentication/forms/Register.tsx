import Input from "src/components/inputs/Input"
import FormTitle from "../components/Title"
import Button from "src/components/inputs/Button";

/**
 * @param view wich view to display on as it correlates to the query param -> view.
 * @returns form content.
 */
const RegisterForm = ( { view } : { view: boolean } ) => {
	if ( view === false ) return null;

	return (
		<>
			<FormTitle text="Register"/>
			<Input
				label='Name'
				required
				name='name'
				className="text-input"
				placeholder="Your name"
			/>
			<Input
				label='Email adress'
				required
				type="email"
				name='email'
				className="text-input"
				placeholder="Your email adress"
			/>
			<Input
				label='Password'
				required
				type="password"
				name='password'
				className="text-input"
				minLength={8}
				placeholder="Your password"
			/>
			<Button type="submit" title="Sign up" />
		</>
	)
}

export default RegisterForm