export const createApp = (options) => {
  const { observe, routes } = options;

  return observe((request, response) => {
    const route = routes.reduce((route, match) => route || match(request), null);
    return route(response);
  });
};

export default createApp;
