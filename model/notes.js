import MapStore from '../lib/mapstore.js'
import { v4 as uuid } from 'uuid';
const NOTES = new Map()
const store = new MapStore('notes.json')

// Note {
//   id: string
//   title: string
//   body: string
//   lastEdited: Date
// }

store.read().then(notes => {
  for (let [id, note] of notes) {
    NOTES.set(id, note)
  }
}).catch(err => console.error(err))

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

export const createNote = async ({ title, body }) => {
  const id = uuid()
  const lastEdited = Date.now()
  const note = {
    id,
    lastEdited,
    title,
    body
  }
  NOTES.set(id, note)
  await store.save(NOTES)
  return { ...note };
}

export const updateNote = async (id, { title, body }) => {
  if(!NOTES.has(id)) return null
  const note = NOTES.get(id)
  note.title = title ?? note.title
  note.body = body ?? note.body
  note.lastEdited = Date.now()
  await store.save(NOTES)
  return { ...note }
}

export const getNote = (id) => {
  if(!NOTES.has(id)) return null
  const note = NOTES.get(id)
  return { ...note }
}

export const delteNote = async (id) => {
  const success = NOTES.delete(id)
  await store.save(NOTES)
  return success
}
