import { randomUUID } from 'node:crypto';

const LOGGER_PRIORITY = new Map();

/* eslint-disable no-magic-numbers */
LOGGER_PRIORITY.set('DEBUG', 0);
LOGGER_PRIORITY.set('INFO', 1);
LOGGER_PRIORITY.set('WARN', 2);
LOGGER_PRIORITY.set('ERROR', 3);
LOGGER_PRIORITY.set('CRITICAL', 4);
/* eslint-enable no-magic-numbers */

export const createLogger = (options) => {
  const minimumPriority = LOGGER_PRIORITY.get(options.level);

  const level = (level) => {
    const priority = LOGGER_PRIORITY.get(level);

    if (priority >= minimumPriority) {
      return (type, payload) => {
        const context = {
          event: {},
          id: randomUUID(),
          level,
          timestamp: options.timestamp()
        };

        if (payload) {
          context.event.payload = payload;
        }

        context.event.type = type;

        options.emit(`${JSON.stringify(context)}\n`);
      };
    }

    return () => {
      // This space intentionally left blank.
    };
  };

  return Object.freeze({
    critical: level('CRITICAL'),
    debug: level('DEBUG'),
    error: level('ERROR'),
    info: level('INFO'),
    warn: level('WARN')
  });
};

export default createLogger;
