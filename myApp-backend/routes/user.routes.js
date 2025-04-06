const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario', error });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    res.send({ message: 'Login exitoso' });
  } else {
    res.status(401).send({ message: 'Credenciales inválidas' });
  }
});

module.exports = router;
