export const createOAuth2TokenRoute = () => {
  const { URL } = globalThis;

  const pattern = () => (/^\/oauth2\/token$/gu);

  return (request) => {
    if (request.method !== 'POST') {
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

export default createOAuth2TokenRoute;
