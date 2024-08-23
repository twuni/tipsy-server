const DECIMAL = 10;

export const createConfig = (env) => Object.freeze({
  ipAddress: env.IP_ADDRESS || '127.0.0.1',
  logLevel: env.LOG_LEVEL || 'INFO',
  tcpPort: Number.parseInt(env.TCP_PORT || '8080', DECIMAL),
  tlsCertificate: env.TLS_CERTIFICATE,
  tlsKey: env.TLS_KEY
});

export default createConfig;
