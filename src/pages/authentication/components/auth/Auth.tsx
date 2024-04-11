import { Form } from "react-router-dom"
import { useLoader } from "src/hooks/useLoader"
import { sessionLoader } from "../../loader"
import { SocialLayout } from "../../validation"
import OAuth, { AcceptedProviders } from "./Providers"
import LoginForm from "../../forms/Login"
import RegisterForm from "../../forms/Register"
import ResetPasswordForm from "../../forms/ResetUser"
import UpdatePasswordForm from "../../forms/updateUser"
import Anchor from "../Anchor"

type AuthProps = {
	providers?: AcceptedProviders[]
	onlyThirdPartyProviders?: boolean;
	socialLayout?: SocialLayout
}

const Auth = ({ providers, onlyThirdPartyProviders, socialLayout } : AuthProps) => {
	const views = useLoader(sessionLoader)

	return (
		<section className="auth">
			<OAuth
				view={views === 'login'}
				thirdParty={providers}
				direction={socialLayout || 'vertical'}
			/>

			{ onlyThirdPartyProviders !== true &&
				<>
					{ views === 'login' && <span className="divider" /> }

					<Form method='post' aria-label="User authentication form" replace>
						<LoginForm 			view={views === 'login'} />
						<RegisterForm 		view={views === 'register'} />
						<ResetPasswordForm 	view={views === 'forgotten_password'} />
						<UpdatePasswordForm view={views === 'update_password'} />
					</Form>

					<nav className='anchors' aria-label="User authentication form navigation">
						<ul>
							<Anchor
								toView="forgotten_password"
								fromView={ views === "login" }
								link="/auth?view=forgotten_password"
								ariaLabel="Forgot password"
								text="Forgot your password?"
							/>
							<Anchor
								toView="register"
								fromView={ views === "login" }
								link="/auth?view=register"
								ariaLabel="Sign up"
								text="Don't have an account? Sign up"
							/>
							<Anchor
								toView="login"
								fromView={ views === "register" }
								link="/auth?view=login"
								ariaLabel="Sign in"
								text="Already have an account? Sign in"
							/>
							<Anchor
								toView="login"
								fromView={ views === "forgotten_password" }
								link="/auth?view=login"
								ariaLabel="Sign in"
								text="Already have an account? Sign in"
							/>
						</ul>
					</nav>
				</>
			}
		</section>
	)
}

export default Auth;