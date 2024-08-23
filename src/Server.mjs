import http from 'node:http';
import https from 'node:https';

export const createServer = (options) => {
  const { app, ipAddress, logger, tcpPort, tlsCertificate, tlsKey } = options;

  const server = tlsCertificate ? https.createServer({
    cert: tlsCertificate,
    key: tlsKey
  }, app) : http.createServer(app);

  const stop = () => {
    server.close(() => {
      logger.info('server:stop');
    });
  };

  const start = () => {
    server.listen({ host: ipAddress, port: tcpPort }, () => {
      logger.info('server:start', { ipAddress, tcpPort });
    });
    return stop;
  };

  return Object.freeze({ start, stop });
};

export default createServer;
