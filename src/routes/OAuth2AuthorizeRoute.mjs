export const createOAuth2AuthorizeRoute = () => {
  const { URL } = globalThis;

  const pattern = () => (/^\/oauth2\/authorize$/gu);

  return (request) => {
    if (request.method !== 'GET') {
      return null;
    }

    const url = new URL(`https://localhost${request.url}`);

    if (!pattern().test(url.pathname)) {
      return null;
    }

    return (response) => {
      response.end();
    };
  };
};

export default createOAuth2AuthorizeRoute;
