const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB conectado');
  app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));
}).catch(err => console.error('Error al conectar MongoDB:', err));