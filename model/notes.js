import { v4 as uuid } from 'uuid';
const NOTES = new Map()

// Note {
//   id: string
//   title: string
//   body: string
//   lastEdited: Date
// }

export const getNotes = sort => {
  const notes =  Array.from(NOTES.values())
  notes.sort((a,b) => {
    if(sort === 'asc') {
      return a.lastEdited - b.lastEdited
    } else {
      return b.lastEdited - a.lastEdited
    }
  })
  return notes
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
  note.lastEdited = new Date.now()
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
