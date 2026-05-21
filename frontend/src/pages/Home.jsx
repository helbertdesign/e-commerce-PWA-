import { useEffect, useState } from 'react';
import ProductoCard from '../components/ProductoCard';

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/productos')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h1>Productos</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '16px' }}>
        {productos.map(p => (
          <ProductoCard key={p.id} producto={p} />
        ))}
      </div>
    </div>
  );
};

export default Home; 