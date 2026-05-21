const productoRepository = require('../repositories/productoRepository');

const getAll = async () => {
  return await productoRepository.getAll();
};

const getById = async (id) => {
  return await productoRepository.getById(id);
};

module.exports = { getAll, getById }; 