import { LoaderFunction, useActionData } from 'react-router-dom'
import { LoaderData } from 'src/routes/typeHelpers'

/**
 * The useActionData hook can be used to simplify the process of handling asynchronous data
 * loading in a React application. By using this hook, you can avoid having to manually
 * handle the Promise and resolve it in your component code. Hence your data will return
 * as typeof :unkown cause it dont know what is getting returned. So in order to fix this
 * we need to cast the type with the type reflected inside the action function.
 *
 * So by using this custom hook you can make sure that response you get back has correct types.
 *
 * @rememeber
 * this action function need to be a standalone function and not called directly inside the
 * action in your routes. But rather call the function inside your action so that it can be
 * passed in as a param aswell.
 *
 * @param _loader name of your action function.
 *
 * @returns a typesafe response.
 *
 */

export const useAction = <TLoaderFn extends LoaderFunction>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _loader: TLoaderFn,
) => {
  return useActionData() as LoaderData<TLoaderFn>
}
