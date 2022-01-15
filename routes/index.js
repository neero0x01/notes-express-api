import express from 'express'
import * as notes from './notes.js'

const router = express.Router()

router.get('/notes', notes.list) // list
router.post('/notes', notes.create) // create
router.get('/notes/:id', notes.read) // read
router.put('/notes/:id', notes.update) // update
router.delete('/notes/:id', notes.deleteNote) // delete

router.get('/', (req, res) => {
  res.send('hola')
})

router.get('/error', (req, res) => {
  throw new Error("oops I made a mistake")
})

export default router;
