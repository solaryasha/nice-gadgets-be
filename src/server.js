import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.resolve('mockup_data', 'phones.json');

async function read() {
  const dataPhones = await fs.readFile(filePath, 'utf-8');

  return JSON.parse(dataPhones);
}

const PORT = 3000;

const app = express();

app.use(cors());

app.get('/phones', async (req, res) => {
  const data = await read();

  res.send(data);
})

app.get('/phones/:id', async (req, res) => {
  const data = await read();
  const {id} = req.params;
  const foundData = data.find(d => d.id === id);



  res.send(foundData);
})

app.listen(PORT, () => {
   console.log(`API is ready on http://localhost:${PORT} 🚀🚀🚀`);
});
