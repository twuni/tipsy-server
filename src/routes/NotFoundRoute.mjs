export const createNotFoundRoute = () => () => (response) => {
  response.statusCode = 404;
  response.statusMessage = 'Not Found';
  response.end();
};

export default createNotFoundRoute;
