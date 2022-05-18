import express from "express";
import router from './routes/index.js';


export default async function createApp() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/', router);

  return app;
}