import { measured } from '@twuni/measured';
import { randomUUID } from 'node:crypto';

export const createApp = (options) => {
  const { URL } = globalThis;

  const { logger } = options;

  return async (request, response) => {
    await measured(() => {
      response.end();
    }, {
      onComplete: ({ duration }) => {
        const url = new URL(`https://localhost${request.url}`);

        const query = {};

        for (const [key, value] of url.searchParams) {
          query[key] = value;
        }

        logger.info('app:request', {
          duration,
          id: randomUUID(),
          request: {
            method: request.method,
            path: url.pathname,
            query
          },
          response: {
            status: {
              code: response.statusCode,
              text: response.statusMessage
            }
          }
        });
      }
    });
  };
};

export default createApp;
