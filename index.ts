
import 'reflect-metadata';
require('dotenv').config()
const express = require('express')
import Logger from './src/infrastructure/logger'
// app.use(errorHandler)
import initLoaders from './src/infrastructure/index'

async function startServer() {
    const app = express();
    await initLoaders({ expressApp: app })
    app.listen(process.env.SERVER_PORT, () => {
      Logger.info(`Server listening on port: ${process.env.SERVER_PORT}`);
    }).on('error', err => {
      Logger.error(err);
      process.exit(1);
    });
  
  }
  
  startServer();
