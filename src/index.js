import { createServer } from 'http';
import createApp from './app.js';

const port = process.env.PORT || 3000;

export default async function startServer() {
  try {
    const app = await createApp();
    const server = await createServer(app)
    server.listen(port)
    console.log(`Server listening on port ${port}`)
  } catch (error) {
    console.error(error)
  }
}

startServer()