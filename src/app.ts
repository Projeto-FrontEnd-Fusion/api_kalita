import express from 'express';
import { prisma } from './prisma/prisma';

export const app = express();

app.use(express.json());


app.get('/api', (req, res) => {
  res.send('Hello, World!');
});