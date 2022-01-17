// import express from 'express';

const cors = require('cors')

const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
const path = require('path');
import Logger from './logger'
const router = require('../routes/main.router')
const express = require('express')

export default ({ app }) => {
   
  app.use(cors());
  app.use(cookieParser())
  app.use(express.json());
  app.use(express.static(path.resolve(__dirname,'src','static')));
  app.use(fileUpload());
  app.use(bodyParser.json())
  app.use('/api', router);
  
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });

  /// error handlers
  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      return res
        .status(err.status)
        .send({ message: err.message })
        .end();
    }
    return next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};