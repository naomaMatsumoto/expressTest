import express, {NextFunction, Request, Response} from "express";
const api = express.Router();

// CORS を許可する
api.use((req:any, res:any, next:any) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

/* GET users listing. */
api.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ title: 'Express. Responded by BackEnd-B.' });

  // console.log('api');
  // console.log('aaaa');
  // res.send('respond with a resource');
});

export {api}