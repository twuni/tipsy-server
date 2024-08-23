import { createValidator as createJSONSchemaValidator } from 'vsj';

export const createValidator = (schema) => {
  const validate = createJSONSchemaValidator(schema);

  return (payload, response, next) => {
    try {
      validate(payload);
      return next();
    } catch (error) {
      // eslint-disable-next-line no-magic-numbers
      response.writeHead(400, 'Client Error', { 'Content-Type': 'application/json' });

      if (error.name === 'MultipleErrors') {
        response.write(`${error.message}\n`);
      } else {
        response.write(`${JSON.stringify({ message: error.message, type: error.name })}\n`);
      }

      response.end();
    }

    return Promise.resolve();
  };
};

export default createValidator;
