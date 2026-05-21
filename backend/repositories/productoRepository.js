const pool = require('../db/connection');

const getAll = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM productos');
    return rows;
  } catch (error) {
    console.error('Error en getAll:', error.message);
    throw error;
  } finally {
    if (conn) conn.release();
  }
};

const getById = async (id) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM productos WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    console.error('Error en getById:', error.message);
    throw error;
  } finally {
    if (conn) conn.release();
  }
};

module.exports = { getAll, getById };