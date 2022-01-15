import express from 'express'
import morgan from 'morgan';
import routes from './routes/index.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(routes)

app.use((req,res) => {
  res.status(404).send("Not found");
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send(err.message)
  next()
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
