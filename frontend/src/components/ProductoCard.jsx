import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductoCard = ({ producto }) => {
  const navigate = useNavigate();
  const { agregar } = useCart();

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '200px' }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <button onClick={() => navigate(`/producto/${producto.id}`)}>Ver detalle</button>
      <button onClick={() => agregar(producto)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductoCard; 