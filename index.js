import express from 'express'
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get('/', (req, res) => {
  res.send('hola')
})

app.get('/error', (req, res) => {
  throw new Error("oops I made a mistake")
})

app.use((req,res) => {
  res.status(404).send("Not found");
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send(err.message)
  next()
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
