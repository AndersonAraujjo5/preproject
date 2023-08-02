// import './database'
import express from 'express';

// const MySQLStore = require('express-mysql-session')(session);

const app = express();

app.get('/', (req,res) => {
  console.log(res.body);
  const {hub_challenge} = req.body;
  console.log(req.body);
  res.send(hub_challenge)
})

app.listen(3000);
