import express from 'express'
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get('/', (req, res) => {
  res.send('hola')
})

app.use((req,res) => {
  res.status(404).send("Not found");
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
