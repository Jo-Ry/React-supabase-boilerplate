import { Link, To } from "react-router-dom"
import { QueryViewParams, VIEWS } from "../constants"

type AnchorProps = {
	toView: QueryViewParams
	fromView: boolean
	link: To
	ariaLabel: string
	text: string
}

/**
 * The component first checks if the toView prop is a valid value in the
 * VIEWS object which contains a list of valid views in the application.
 * If it is not a valid value, the component returns null.
 *
 * @param toView to wich view you want to navigate to.
 * @param fromView current view. If the fromView prop is false,
 * the component does not render anything.
 * @param link /auth?view=...
 * @param ariaLabel describe what the button does
 * @param text the text within the button
 *
 * @notice ToView and FromView exist to properly handle deletion of
 * unused links and display them for respective view!
 */
const Anchor = ( { link, text, fromView, toView, ariaLabel } : AnchorProps ) => {
	if ( !Object.values(VIEWS).includes(toView) ) return null

	return (
		fromView &&
		<li>
			<Link to={link} aria-label={ariaLabel}>
				{text}
			</Link>
		</li>
	)
}

export default Anchor
