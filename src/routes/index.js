import {
  Router
} from 'express'
import jwt from 'jsonwebtoken'
import CepController from '../controllers/cep.js'

const router = Router()

const { verify } = jwt

router.post('/auth', async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body

    if (!email || !password) {
      return res.status(400).json({
        error: 'Email and password are required'
      })
    }

    const token = await CepController.auth(email, password)

    res.json({
      user: email,
      sucess: true,
      token,
      message: 'Authentication successful'
    })
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
})

router.use((req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'] || req.query.token || req.body.token
  if (token) {
    verify(token, 'secret', (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: 'error',
          message: 'Invalid token'
        })
      }
      req.decoded = decoded
      next()
    })
  } else {
    return res.status(401).json({
      status: 'error',
      message: 'No token provided'
    })
  }
})

router.post('/cep', async (req, res) => {
  try {
    const {
      cep
    } = req.body

    if (!cep) {
      return res.status(400).json({
        error: 'CEP is required'
      })
    }

    const address = await CepController.search(cep)
    res.send(address)
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
})

export default router