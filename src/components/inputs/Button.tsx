import { ComponentProps, ReactNode } from 'react'
import { useNavigation } from 'react-router-dom'
import Loader from '../loading/Loader'

type ButtonProps = ComponentProps<'button'> & {
  backgroundColor?: string
  icon?: string | ReactNode
  alt?: string
}

/**
 * @param title represents the text for the button,
 * @param icon use path to image or insert an svg instead,
 * @param ...props allows the component to accept any number of additional
 * button properties. This is useful for passing in additional attributes like
 * type, className, disabled, etc.. to the button element.
 *
 * @friendly_warning do not forget to use "alt" attr if "icon" is present
 */
const Button = ({
  title,
  backgroundColor,
  icon,
  alt,
  type,
  ...props
}: ButtonProps) => {
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting' && type === 'submit'

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      style={{ backgroundColor: backgroundColor || '' }}
      disabled={submitting}
      {...props}
    >
      <>
        {submitting ? (
          <Loader />
        ) : (
          <>
            {title}
            {typeof icon === 'string' ? <img src={icon} alt={alt} /> : icon}
          </>
        )}
      </>
    </button>
  )
}

export default Button
