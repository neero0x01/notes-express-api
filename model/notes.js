import { v4 as uuid } from 'uuid';
const NOTES = new Map()

// Note {
//   id: string
//   title: string
//   body: string
//   lastEdited: Date
// }

export const getNotes = () => {
  return Array.from(NOTES.values())
}

export const createNote = ({ title, body }) => {
  const id = uuid()
  const lastEdited = Date.now()
  const note = {
    id,
    lastEdited,
    title,
    body
  }
  NOTES.set(id, note)
  return { ...note };
}

export const updateNote = (id, { title, body }) => {
  if(!NOTES.has(id)) return null
  const note = NOTES.get(id)
  note.title = title ?? note.title
  note.body = body ?? note.body
  return { ...note }
}

export const getNote = (id) => {
  if(!NOTES.has(id)) return null
  const note = NOTES.get(id)
  return { ...note }
}

export const delteNote = (id) => {
  return NOTES.delete(id)
}
