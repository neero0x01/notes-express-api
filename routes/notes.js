export const list = (req, res) => {
  const { sort } = req.query;
  console.log({ sort });
  res.json([])
}

export const create = (req, res) => {
  const { title, body } = req.body
  console.log(`${title} and ${body} received`);
  res.send('ok')
}

export const read = (req, res) => {
  const { id } = req.params
  res.json({ id, title: 'note title', body: 'this is my note' })
}

export const update = (req, res) => {
  const { id } = req.params
  const { title, body } = req.body
  console.log(`updating ${id} with ${title} and ${body}`);
  res.send('ok')
}

export const deleteNote = (req, res) => {
  const { id } = req.params
  console.log(`${id} note deleted`)
  res.send('ok')
}
