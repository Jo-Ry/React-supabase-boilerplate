import Navbar from "src/layout/Navbar"
import { Outlet } from "react-router-dom"

/**
 * @returns the navbar and the child route's element inside an main element.
 */
const RootLayout = () => {
	return (
		<>
			<Navbar/>
			<main>
				<Outlet/>
			</main>
		</>
	)
}

export default RootLayout;
