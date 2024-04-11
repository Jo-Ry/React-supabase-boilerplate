import { useAction } from 'src/hooks/useAction'
import { authActions } from '../action'
import Input from 'src/components/inputs/Input'
import Button from 'src/components/inputs/Button'

/**
 * @param view wich view to display on as it correlates to the query param -> view.
 * @returns form content.
 */
const LoginForm = ({ view }: { view: boolean }) => {
  const error = useAction(authActions)

  if (view === false) return null

  return (
    view && (
      <>
        {error && <span className="error">{error.message}</span>}
        <Input
          label="Email adress"
          required
          type="email"
          name="email"
          className="text-input"
          placeholder="Your email adress"
        />
        <Input
          label="Password"
          required
          type="password"
          name="password"
          className="text-input"
          placeholder="Your password"
        />
        <Button type="submit" title="Sign in" />
      </>
    )
  )
}

export default LoginForm
