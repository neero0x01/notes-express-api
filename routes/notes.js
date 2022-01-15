export const list = (req, res) => {
  res.json([])
}

export const create = (req, res) => {
  res.send('ok')
}

export const read = (req, res) => {
  res.json({ title: 'note title', body: 'this is my note' })
}

export const update = (req, res) => {
  res.send('ok')
}

export const deleteNote = (req, res) => {
  res.send('ok')
}
