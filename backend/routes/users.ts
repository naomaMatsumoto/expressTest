import {NextFunction, Request, Response} from "express";

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log('aaaa');
  console.log('aaaa');
  res.send('respond with a resource');
});

export {router}