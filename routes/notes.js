import { getNotes, createNote, getNote, updateNote, delteNote as deleteNoteWithId } from "../model/notes.js";

export const list = (req, res) => {
  let { sort } = req.query;
  sort = sort ? sort.toLowerCase() : "desc"
  if(!(sort === "asc" || sort === "desc")) {
    return res.status(400).send('Invalid sort params')
  }
  console.log({ sort });
  const notes = getNotes(sort);
  res.json({notes})
}

export const create =  async (req, res) => {
  const { title, body } = req.body
  if(title === undefined || body === undefined) {
    return res.status(400).send("Missing title or body")
  }
  const note = await createNote(req.body)
  res.send({note})
}

export const read = (req, res) => {
  const { id } = req.params
  const note = getNote(id)
  res.json({ note })
}

export const update = async (req, res) => {
  const { id } = req.params
  const { title, body } = req.body
  if(title === undefined && body === undefined) {
    return res.status(400).send("Missing title or body")
  }
  await updateNote(id, req.body)
  res.send('ok')
}

export const deleteNote = async (req, res) => {
  const { id } = req.params
  await deleteNoteWithId(id)
  res.send('ok')
}
