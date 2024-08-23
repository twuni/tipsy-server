import { createApp } from './App.mjs';
import { createConfig } from './Config.mjs';
import { createLogger } from './Logger.mjs';
import { createServer } from './Server.mjs';
import process from 'node:process';

const config = createConfig(process.env);

const logger = createLogger({
  emit: (event) => process.stdout.write(event),
  level: config.logLevel,
  timestamp: () => new Date().toISOString()
});

const app = createApp({
  logger
});

const server = createServer({
  app,
  ipAddress: config.ipAddress,
  logger,
  tcpPort: config.tcpPort,
  tlsCertificate: config.tlsCertificate,
  tlsKey: config.tlsKey
});

process.on('SIGINT', server.stop);
process.on('SIGTERM', server.stop);

server.start();
