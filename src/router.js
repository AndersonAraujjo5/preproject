import express from 'express';

import ApiController from './controllers/ApiController';


const route = express.Router();

route.get('/', ApiController.index);
route.post('/', ApiController.index);


export default route;
