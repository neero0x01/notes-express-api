import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('hola')
})

router.get('/error', (req, res) => {
  throw new Error("oops I made a mistake")
})

export default router;
