import { useAuth } from "src/hooks/useAuth"
import { NavLink } from "react-router-dom"

const Navbar = () => {
	const { session, signout } = useAuth()

	const PublicLinks = () => {
		return (
			<>
				<li><NavLink to="/">Home</NavLink></li>
			</>
		)
	}

	const UnAuthenticatedLinks = () => {
		if ( !session?.user ) {
			return (
				<>
					<li><NavLink to="/auth?view=login">Login</NavLink></li>
				</>
			)
		}
	}

	const AuthenticatedLinks = () => {
		if (session?.user) {
			return (
				<>
					<li><NavLink to="/dashboard">dashboard</NavLink></li>
					<li onClick={signout}>logout</li>
				</>
			)
		}
	}

	return (
		<header className="navbar">
			<nav>
				<menu>
					<PublicLinks/>
					<UnAuthenticatedLinks/>
					<AuthenticatedLinks/>
				</menu>
			</nav>
		</header>
	)
}

export default Navbar
