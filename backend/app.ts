import {router} from "./routes/users";
import {api} from "./routes/api";
import express from "express";
import path from "path";

// import cookieParser from "cookie-parser";
// import logger from "morgan";
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// CORSを許可する

const app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', router);
app.use('/api', api);


export {app};