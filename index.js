const express = require('express');
const app = express();
const PORT = 3001;  // Cambié el puerto a 3001

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API está funcionando correctamente');
});

// Datos en memoria
let items = [];
let idCounter = 1;

// Crear ítem
app.post('/api/items', (req, res) => {
    const { name, description } = req.body;
    const newItem = { id: idCounter++, name, description };
    items.push(newItem);
    res.status(201).json(newItem);
});

// Obtener todos
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Obtener uno por ID
app.get('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json(item);
});

// Actualizar ítem
app.put('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ error: 'Item not found' });

    const { name, description } = req.body;
    item.name = name ?? item.name;
    item.description = description ?? item.description;

    res.json(item);
});

// Eliminar ítem
app.delete('/api/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Item not found' });

    items.splice(index, 1);
    res.status(204).send();
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${3001}`);
});
