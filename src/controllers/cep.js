import { getAddress } from '../services/index.js'
import jwt from 'jsonwebtoken'

const { sign } = jwt

export default class CepController {
  static async search(cep) {
    const response = await getAddress(cep);
    return response;
  }

  static async auth(email, password) {
    let token = sign({ email, password }, 'secret', { expiresIn: '1h' })
    return token;
  }
} 