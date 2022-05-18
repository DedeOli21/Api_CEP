import axios from 'axios';
import {
  createClient
} from 'redis';
const TIME_ON_CACHE = 300;

export const getAddress = async (cep) => {

  const client = createClient();
  client.on('error Redis', (err) => console.log('Redis Client Error', err));
  await client.connect();

  const cepCache = await client.get(cep);

  if (!cepCache) {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    await client.set(cep, JSON.stringify(response.data), 'EX', TIME_ON_CACHE);
    return response.data;
  } else {
    return cepCache;
  }
}
