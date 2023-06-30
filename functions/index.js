import {onRequest} from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import express from 'express';
import cors from 'cors';
import { addItem, getItems } from "./src/items.js";


const app = express();
app.use(cors());
app.use(express.json());


app.get('/item', getItems);
app.post('/item', addItem);


export const api = onRequest(app);