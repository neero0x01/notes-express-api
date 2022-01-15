export const list = (req, res) => {
  let { sort } = req.query;
  sort = sort ? sort.toLowerCase() : "desc"
  if(!(sort === "asc" || sort === "desc")) {
    return res.status(400).send('Invalid sort params')
  }
  console.log({ sort });
  res.json([])
}

export const create = (req, res) => {
  const { title, body } = req.body
  if(title === undefined || body === undefined) {
    return res.status(400).send("Missing title or body")
  }
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
  if(title === undefined && body === undefined) {
    return res.status(400).send("Missing title or body")
  }
  console.log(`updating ${id} with ${title} and ${body}`);
  res.send('ok')
}

export const deleteNote = (req, res) => {
  const { id } = req.params
  console.log(`${id} note deleted`)
  res.send('ok')
}
