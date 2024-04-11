import { redirect } from 'react-router-dom';
import { RequestProp } from 'src/routes/typeHelpers';
import { supabase } from 'supabase/createClient';
import { QueryViewParams, VIEWS } from './constants';

export const sessionLoader = async ({ request }: RequestProp) => {
  const { data, error } = await supabase.auth.getSession();

  if (error) throw error;

  // Stop user from entering the login page when already signed in.
  if (data.session) {
    throw redirect('/');
  }

  // Each view corresponds to an form action
  const query = new URL(request.url).searchParams;
  const view = query.get('view') as QueryViewParams;

  // Fallback: redirect user back to login form if query param 'view' is typed wrong
  if (!Object.values(VIEWS).includes(view)) {
    throw redirect('/auth?view=login');
  }

  return view;
};
