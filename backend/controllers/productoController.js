const productoService = require('../services/productoService');

const getAll = async (req, res) => {
  try {
    const productos = await productoService.getAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

const getById = async (req, res) => {
  try {
    const producto = await productoService.getById(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

module.exports = { getAll, getById }; 