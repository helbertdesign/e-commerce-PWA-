import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { carrito } = useCart();

  const totalItems = carrito.reduce((acc, p) => acc + p.cantidad, 0);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: '#333', color: 'white' }}>
      <h2 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>E-Commerce</h2>
      <button onClick={() => navigate('/carrito')}>
        Carrito ({totalItems})
      </button>
    </nav>
  );
};

export default Navbar; 