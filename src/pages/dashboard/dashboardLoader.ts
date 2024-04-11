import requireAuthRoute from 'src/routes/requireAuthRoute';
import { RequestProp } from 'src/routes/typeHelpers';

export const dashboardLoader = async ({ request }: RequestProp) => {
  const data = await requireAuthRoute(request);
  return data;
};
