import { createJSONReader } from '../JSONReader.mjs';
import { createValidator } from '../Validator.mjs';
import { schema } from './AuthnRequestRoute.schema.mjs';

export const createAuthnRequestRoute = () => {
  const { URL } = globalThis;

  const read = createJSONReader();
  const validate = createValidator(schema);

  const pattern = () => /^\/authn\/request$/gu;

  return (request) => {
    if (request.method !== 'POST') {
      return null;
    }

    const url = new URL(`https://localhost${request.url}`);

    if (!pattern().test(url.pathname)) {
      return null;
    }

    return async (response) => {
      const body = await read(request);

      return validate(body, response, () => {
        response.end();
      });
    };
  };
};

export default createAuthnRequestRoute;
