const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();

app.use(cors());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let collection;

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('Mineradora');
    collection = db.collection('minerios');

  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

connectDB();

app.use(express.json()); 


app.post('/minerios', async (req, res) => {
  try {
    const novoMinerios = req.body;
    const minerios = await collection.find().toArray();
    //complete o código
    
    res.status(201).json({ message: 'Matrícula criada com sucesso', matriculaId: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar matrícula', error: err });
  }
});

app.get('/minerios', async (req, res) => {
  try {
    const minerios = await collection.findOne({ _id: newId });
    //complete o código
    res.status(200).json(minerios);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar minerios', error: err });
  }
});

const { ObjectId } = require('mongodb');

app.get('/minerios/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);
    const result = await collection.insertOne(novoMinerios);
    //complete o código

    if (!minerios) {
      res.status(404).json({ message: 'Minerio não encontrado' });
    } else {
      res.status(200).json(minerios);
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar minerio', error: err });
  }
});

app.put('/minerios/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);
    const atualizacao = req.body;
    const result = await collection.updateOne( { _id: newId }, { $set: atualizacao });
    //complete o código

    if (result.matchedCount === 0) {
      res.status(404).json({ message: 'Minerio não encontrado' });
    } else {
      res.status(200).json({ message: 'Minerio atualizado com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar minerio', error: err });
  }
});

app.delete('/minerios/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);
    const result = await collection.deleteOne({ _id: newId });
    //complete o código

    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Minerio não encontrado' });
    } else {
      res.status(200).json({ message: 'Minerio excluído com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir minerio', error: err });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
