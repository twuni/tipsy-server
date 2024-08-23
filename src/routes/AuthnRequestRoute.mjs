export const createAuthnRequestRoute = () => {
  const { URL } = globalThis;

  const pattern = () => /^\/authn\/request$/gu;

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

export default createAuthnRequestRoute;
