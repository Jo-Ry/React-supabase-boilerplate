import { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
  containerClass?: string;
  label?: string;
};

/**
 * @param label represents the label for the input field,
 * @param containerClass represents the CSS class for the container element.
 * @param ...props allows the component to accept any number of additional
 * input properties. This is useful for passing in additional attributes like
 * type, placeholder, disabled, etc.. to the input field.
 *
 * @conditional only input gets rendered if label is not present on the component
 */
const Input = ({ label, containerClass, ...props }: InputProps) => {
  return (
    <>
      {label ? (
        <div className={`text-input ${containerClass || ''}`}>
          <label>{label}</label>
          <input {...props} />
        </div>
      ) : (
        <input {...props} />
      )}
    </>
  );
};

export default Input;
