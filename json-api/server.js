const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let persons = [
  {
    id: 1,
    nama: "Samuel Rivaldo Saragih",
    umur: 30,
    alamat: {
      jalan: "Jalan Sromo",
      kota: "Banyuwangi"
    },
    hobi: ["nge game", "Olahraga"]
  }
];

// GET endpoint untuk mengambil data
app.get('/person', (req, res) => {
  res.json(persons);
});

// POST endpoint untuk menambahkan data
app.post('/person', (req, res) => {
  const newPerson = req.body;
  newPerson.id = persons.length + 1;
  persons.push(newPerson);
  res.status(201).json(newPerson);
});

// DELETE endpoint untuk menghapus data berdasarkan ID
app.delete('/person/:id', (req, res) => {
  const id = parseInt(req.params.id);
  persons = persons.filter(person => person.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
