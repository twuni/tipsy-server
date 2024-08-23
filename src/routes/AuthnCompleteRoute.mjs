export const createAuthnCompleteRoute = () => {
  const { URL } = globalThis;

  const pattern = () => /^\/authn\/complete$/gu;

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

export default createAuthnCompleteRoute;
