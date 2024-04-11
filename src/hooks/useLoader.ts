import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { LoaderData } from 'src/routes/typeHelpers';

/**
 * The useLoaderData hook can be used to simplify the process of handling asynchronous data
 * loading in a React application. By using this hook, you can avoid having to manually
 * handle the Promise and resolve it in your component code. Hence your data will return
 * as typeof :unkown cause it dont know what is getting returned. So in order to fix this
 * we need to cast the type with the type reflected inside the loader function.
 *
 * So by using this custom hook you can make sure that response you get back has correct types.
 *
 * @rememeber
 * this loader function need to be a standalone function and not called directly inside the
 * loader in your routes. But rather call the function inside your loader so that it can be
 * passed in as a param aswell.
 *
 * @param _loader name of your loader function.
 *
 * @returns a typesafe response.
 *
 */

export const useLoader = <TLoaderFn extends LoaderFunction>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _loader: TLoaderFn,
) => {
  return useLoaderData() as LoaderData<TLoaderFn>;
};
