import express from 'express';
import "reflect-metadata";
import {createConnection} from "typeorm";
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);


createConnection().then(async connection => {
}).catch(error => console.log(error));


app.listen(3333);