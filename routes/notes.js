import { getNotes, createNote, getNote, updateNote, delteNote as deleteNoteWithId } from "../model/notes.js";

export const list = (req, res) => {
  let { sort } = req.query;
  sort = sort ? sort.toLowerCase() : "desc"
  if(!(sort === "asc" || sort === "desc")) {
    return res.status(400).send('Invalid sort params')
  }
  console.log({ sort });
  const notes = getNotes();
  res.json({notes})
}

export const create = (req, res) => {
  const { title, body } = req.body
  if(title === undefined || body === undefined) {
    return res.status(400).send("Missing title or body")
  }
  const note = createNote(req.body)
  res.send({note})
}

export const read = (req, res) => {
  const { id } = req.params
  const note = getNote(id)
  res.json({ note })
}

export const update = (req, res) => {
  const { id } = req.params
  const { title, body } = req.body
  if(title === undefined && body === undefined) {
    return res.status(400).send("Missing title or body")
  }
  updateNote(id, req.body)
  res.send('ok')
}

export const deleteNote = (req, res) => {
  const { id } = req.params
  deleteNoteWithId(id)
  res.send('ok')
}
