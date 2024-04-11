
import { useLoader } from "src/hooks/useLoader";
import { dashboardLoader } from "./dashboardLoader";

const Dashboard = () => {
	const { user } = useLoader(dashboardLoader)

	return (
		<h1>Welcome: {user.user_metadata.name}</h1>
	)
}

export default Dashboard
