import {
  ClientAuthContext,
  ClientAuthContextProps,
} from 'src/context/ClientAuthProvider';
import { useContext } from 'react';

/**
 * @returns a convenient hook for getting the current auth session.
 */
export const useAuth = () => {
  return useContext(ClientAuthContext) as ClientAuthContextProps;
};
