import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductoDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregar } = useCart();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/productos/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div style={{ padding: '32px' }}>
      <button onClick={() => navigate('/')}>← Volver</button>
      <h1>{producto.nombre}</h1>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <p><strong>Categoría:</strong> {producto.categoria}</p>
      <button onClick={() => agregar(producto)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductoDetalle; 