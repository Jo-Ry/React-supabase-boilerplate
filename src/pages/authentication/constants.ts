export type QueryViewParams = (typeof VIEWS)[keyof typeof VIEWS];

/**
 * This object defines all views for authentication.
 *
 * If you decide to remove one or more views than make sure to
 * make some adjustemnts. Typescript is you best friend here
 * cause everywhere that this object is referenced, it is also
 * typed to the dynamic type QueryViewParams.
 *
 * @QuickTip run: 'npm run build' and ts will highlight all places
 * that you need to modify :)
 */
export const VIEWS = {
  LOGIN: 'login',
  REGISTER: 'register',
  FORGOTTEN_PASSWORD: 'forgotten_password',
  UPDATE_PASSWORD: 'update_password',
} as const; // makes the object readonly
