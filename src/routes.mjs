import { createNotFoundRoute } from './routes/NotFoundRoute.mjs';
import { createOAuth2AuthorizeRoute } from './routes/OAuth2AuthorizeRoute.mjs';
import { createOAuth2TokenRoute } from './routes/OAuth2TokenRoute.mjs';

export const createRoutes = (options) => Object.freeze([
  createOAuth2AuthorizeRoute,
  createOAuth2TokenRoute,
  createNotFoundRoute
].map((createRoute) => createRoute(options)));

export default createRoutes;
