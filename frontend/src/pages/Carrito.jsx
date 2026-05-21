import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Carrito = () => {
  const { carrito, eliminar, modificarCantidad, total } = useCart();
  const navigate = useNavigate();

  if (carrito.length === 0) return (
    <div style={{ padding: '32px' }}>
      <button onClick={() => navigate('/')}>← Volver</button>
      <h1>El carrito está vacío</h1>
    </div>
  );

  return (
    <div style={{ padding: '32px' }}>
      <button onClick={() => navigate('/')}>← Volver</button>
      <h1>Carrito de compras</h1>
      {carrito.map(p => (
        <div key={p.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
          <h3>{p.nombre}</h3>
          <p>${p.precio}</p>
          <div>
            <button onClick={() => modificarCantidad(p.id, p.cantidad - 1)}>-</button>
            <span style={{ margin: '0 8px' }}>{p.cantidad}</span>
            <button onClick={() => modificarCantidad(p.id, p.cantidad + 1)}>+</button>
          </div>
          <p>Subtotal: ${(p.precio * p.cantidad).toFixed(2)}</p>
          <button onClick={() => eliminar(p.id)}>Eliminar</button>
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default Carrito; 