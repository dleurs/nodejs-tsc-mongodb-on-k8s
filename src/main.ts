// npm install mongodb; npm install @types/mongodb;
import express from 'express';
import bodyParser from 'body-parser';
import { todoRoutes } from './routes/todos';
import { mongoConnect } from './utils/database';
//import { Todo } from './models/todo';

const app: express.Application = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(todoRoutes);

//const hostname: string = process.env.HOST_ADDR || "0.0.0.0";
const port: string = process.env.PORT || "8080";
const nodeEnv: string = process.env.NODE_ENV || "production";
const dbUrl: string | undefined = process.env.DBURL;

if (dbUrl == (undefined || null))
{
  throw ("dbPassword should be set");
}

app.listen(parseInt(port), async function ()
{
  await mongoConnect();
  console.log(`Server running at http://localhost:${port}/ in ${nodeEnv}`);
});

