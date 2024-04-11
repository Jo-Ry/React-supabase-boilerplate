import { LoaderFunction, Params } from 'react-router-dom';

/**
 * This code defines a TypeScript type called LoaderData that takes a generic type parameter
 * TLoaderFn which is a function that returns a Promise. The type LoaderData is used to represent
 * the data that is returned by the LoaderFunction.
 *
 * The type Awaited<ReturnType<TLoaderFn>> is used to wait for the Promise returned by the
 * LoaderFunction to resolve and return its value. The infer keyword is used to infer the type
 * of the resolved value and assign it to the variable D.
 *
 * The type D is then used as the type of the LoaderData type. If the resolved value is a Response,
 * the type D will be inferred as the type of the response body. Otherwise,
 * the type D will be inferred as the resolved value.
 *
 * In summary, this code defines a type that represents the data returned by a LoaderFunction
 * that can be either a Response or a specific type of data.
 */
export type LoaderData<TLoaderFn extends LoaderFunction> =
  Awaited<ReturnType<TLoaderFn>> extends Response | infer D ? D : never;

export type RequestProp = {
  request: Request;
};

export type ParamsProp = {
  params: Params;
};

export type RequestAndParamsProps = {
  request: Request;
  params: Params;
};
