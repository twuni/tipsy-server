import { measured } from '@twuni/measured';
import { randomUUID } from 'node:crypto';

export const createObserver = (options) => {
  const { logger } = options;

  return (next) => (request, response) => measured(() => next(request, response), {
    onComplete: ({ duration }) => {
      const { URL } = globalThis;

      const url = new URL(`https://localhost${request.url}`);

      const loggingContext = {
        duration,
        id: randomUUID(),
        request: {
          method: request.method,
          path: url.pathname,
          query: {}
        },
        response: {
          status: {
            code: response.statusCode,
            text: response.statusMessage
          }
        }
      };

      for (const [key, value] of url.searchParams) {
        loggingContext.request.query[key] = value;
      }

      logger.info('app:request', loggingContext);
    }
  });
};

export default createObserver;
